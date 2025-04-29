import * as React from 'react';
import { IScrollSpyProps } from './IScrollSpyProps';

/**
 * ScrollSpy component that highlights navigation items based on scroll position
 */
const ScrollSpy: React.FC<IScrollSpyProps> = ({
  navSelector,
  linkSelector,
  activeClass = 'active',
  offset = 0,
  threshold = 0.2,
  onChange,
  containerSelector,
  smoothScroll = true,
  scrollBehavior = 'smooth',
  children
}) => {
  // Store the active section ID
  const [activeId, setActiveId] = React.useState<string>('');
  // Reference to the container
  const containerRef = React.useRef<HTMLDivElement>(null);
  // Track if we're currently handling a click to avoid scroll updates during navigation
  const isNavigatingRef = React.useRef<boolean>(false);
  
  // Process the target sections
  const getSections = React.useCallback(() => {
    const sections: HTMLElement[] = [];
    
    // Get all sections from the DOM
    document.querySelectorAll('[id]').forEach((section) => {
      // Check if this section has a corresponding navigation link
      const navItem = document.querySelector(`${linkSelector}[href="#${section.id}"]`);
      
      if (navItem) {
        sections.push(section as HTMLElement);
      }
    });
    
    return sections;
  }, [linkSelector]);
  
  // Handle scrolling to update the active section
  const handleScroll = React.useCallback(() => {
    // Skip if we're currently navigating via click
    if (isNavigatingRef.current) return;
    
    // Get all relevant sections
    const sections = getSections();
    
    // Get the scroll container
    const scrollContainer = containerSelector 
      ? document.querySelector(containerSelector) as HTMLElement 
      : window;
    
    // Calculate viewport height and scroll position
    const viewportHeight = window.innerHeight;
    
    // Safely get the scroll position based on container type
    const scrollTop = containerSelector && scrollContainer 
      ? (scrollContainer as HTMLElement).scrollTop
      : window.scrollY || window.pageYOffset;
    
    // Find the section that's most visible in the viewport
    let currentSection: HTMLElement | null = null;
    let maxVisiblePercentage = 0;
    
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      
      // Calculate how much of the section is visible
      const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
      const sectionHeight = rect.height;
      const visiblePercentage = Math.max(0, visibleHeight / sectionHeight);
      
      // If this section is more visible than the current best match and 
      // meets the threshold, update the current section
      if (visiblePercentage > maxVisiblePercentage && visiblePercentage >= threshold) {
        maxVisiblePercentage = visiblePercentage;
        currentSection = section;
      }
    });
    
    // Special case: if we're at the top of the page, find the first section
    if (scrollTop <= offset && sections.length > 0) {
      currentSection = sections[0];
    }
    
    // Update the active section
    if (currentSection) {
      setActiveId(currentSection.id);
      
      // Trigger the onChange callback
      if (onChange && currentSection.id !== activeId) {
        onChange(currentSection.id, currentSection);
      }
      
      // Update the active class on navigation items
      const navItems = document.querySelectorAll(linkSelector);
      navItems.forEach((item) => {
        const href = item.getAttribute('href');
        if (href === `#${currentSection!.id}`) {
          item.classList.add(activeClass);
        } else {
          item.classList.remove(activeClass);
        }
      });
    }
  }, [navSelector, linkSelector, activeClass, offset, threshold, onChange, containerSelector, activeId, getSections]);
  
  // Setup click handlers for navigation items
  const setupNavClickHandlers = React.useCallback(() => {
    const navItems = document.querySelectorAll(linkSelector);
    
    const handleNavClick = (e: Event) => {
      e.preventDefault();
      const link = e.currentTarget as HTMLAnchorElement;
      const targetId = link.getAttribute('href')?.substring(1);
      
      if (targetId) {
        // Mark that we're currently handling navigation
        isNavigatingRef.current = true;
        
        // Find the target section
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          // Get the scroll container
          const scrollContainer = containerSelector 
            ? document.querySelector(containerSelector) as HTMLElement 
            : window;
          
          // Calculate the scroll position
          const rect = targetSection.getBoundingClientRect();
          
          // Calculate position differently based on container type
          const scrollPosition = containerSelector && scrollContainer
            ? (scrollContainer as HTMLElement).scrollTop + rect.top - offset
            : window.scrollY + rect.top - offset;
          
          // Scroll to the section
          if (containerSelector && scrollContainer) {
            scrollContainer.scrollTo({
              top: scrollPosition,
              behavior: smoothScroll ? scrollBehavior : 'auto'
            });
          } else {
            window.scrollTo({
              top: scrollPosition,
              behavior: smoothScroll ? scrollBehavior : 'auto'
            });
          }
          
          // Update active state
          setActiveId(targetId);
          
          // Trigger the onChange callback
          if (onChange) {
            onChange(targetId, targetSection);
          }
          
          // Update the active class on navigation items
          navItems.forEach((item) => {
            const href = item.getAttribute('href');
            if (href === `#${targetId}`) {
              item.classList.add(activeClass);
            } else {
              item.classList.remove(activeClass);
            }
          });
          
          // Reset the navigating flag after the scroll animation completes
          setTimeout(() => {
            isNavigatingRef.current = false;
          }, 800); // Typical scroll animation takes less than 800ms
        }
      }
    };
    
    // Add click handlers to all nav items
    navItems.forEach((item) => {
      item.addEventListener('click', handleNavClick);
    });
    
    // Return a cleanup function to remove the handlers
    return () => {
      navItems.forEach((item) => {
        item.removeEventListener('click', handleNavClick);
      });
    };
  }, [linkSelector, activeClass, offset, onChange, containerSelector, smoothScroll, scrollBehavior]);
  
  // Initialize the component
  React.useEffect(() => {
    // Ensure the component is mounted on the client side
    if (typeof window === 'undefined' || !document) {
      return;
    }
    
    // Set up the scroll event handler
    const scrollContainer = containerSelector 
      ? document.querySelector(containerSelector) as HTMLElement 
      : window;
    
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      
      // Initial check for active section
      handleScroll();
      
      // Set up navigation click handlers
      const cleanup = setupNavClickHandlers();
      
      // Clean up event listeners
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
        cleanup();
      };
    }
  }, [containerSelector, handleScroll, setupNavClickHandlers]);
  
  // When the active section changes, update the URL hash (optional)
  React.useEffect(() => {
    if (activeId && !isNavigatingRef.current) {
      // Update the URL hash without triggering a scroll
      const newUrl = `${window.location.pathname}${window.location.search}#${activeId}`;
      window.history.replaceState(null, '', newUrl);
    }
  }, [activeId]);

  return (
    <div ref={containerRef} data-scrollspy="true">
      {children}
    </div>
  );
};

export { ScrollSpy }; 