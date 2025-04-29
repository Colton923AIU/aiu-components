import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CardGroup } from './CardGroup';
import { Card } from '../card/Card';

const meta: Meta<typeof CardGroup> = {
  title: 'UI/CardGroup',
  component: CardGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: { type: 'number', min: 1, max: 6 },
      description: 'Number of columns in the card grid',
    },
    gap: {
      control: 'text',
      description: 'Gap between cards (number in px or CSS value)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardGroup>;

// Basic card group with default settings
export const Default: Story = {
  args: {
    columns: 3,
    gap: 24,
    children: (
      <>
        <Card>
          <div style={{ minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Card 1
          </div>
        </Card>
        <Card>
          <div style={{ minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Card 2
          </div>
        </Card>
        <Card>
          <div style={{ minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Card 3
          </div>
        </Card>
        <Card>
          <div style={{ minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Card 4
          </div>
        </Card>
        <Card>
          <div style={{ minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Card 5
          </div>
        </Card>
        <Card>
          <div style={{ minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Card 6
          </div>
        </Card>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic card group with 3 columns and default styling.',
      },
    },
  },
};

// Card group with 2 columns and larger gap
export const TwoColumnsLargeGap: Story = {
  args: {
    columns: 2,
    gap: 32,
    children: (
      <>
        <Card>
          <div style={{ minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Card 1
          </div>
        </Card>
        <Card>
          <div style={{ minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Card 2
          </div>
        </Card>
        <Card>
          <div style={{ minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Card 3
          </div>
        </Card>
        <Card>
          <div style={{ minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Card 4
          </div>
        </Card>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Card group with 2 columns and a larger 32px gap between cards.',
      },
    },
  },
};

// Card group with string-based gap
export const StringGap: Story = {
  args: {
    columns: 3,
    gap: '2rem',
    children: (
      <>
        <Card>
          <div style={{ minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Card 1
          </div>
        </Card>
        <Card>
          <div style={{ minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Card 2
          </div>
        </Card>
        <Card>
          <div style={{ minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Card 3
          </div>
        </Card>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Card group with a string-based gap using CSS units (2rem).',
      },
    },
  },
};

// Product card example
export const ProductCards: Story = {
  render: () => {
    const products = [
      {
        id: 1,
        name: 'Premium Headphones',
        price: '$129.99',
        image: '🎧',
        rating: 4.8,
      },
      {
        id: 2,
        name: 'Wireless Mouse',
        price: '$49.99',
        image: '🖱️',
        rating: 4.5,
      },
      {
        id: 3,
        name: 'Mechanical Keyboard',
        price: '$89.99',
        image: '⌨️',
        rating: 4.7,
      },
      {
        id: 4,
        name: 'HD Webcam',
        price: '$59.99',
        image: '📷',
        rating: 4.2,
      },
      {
        id: 5,
        name: 'USB-C Hub',
        price: '$39.99',
        image: '🔌',
        rating: 4.4,
      },
      {
        id: 6,
        name: 'Bluetooth Speaker',
        price: '$79.99',
        image: '🔊',
        rating: 4.6,
      },
    ];

    return (
      <div style={{ maxWidth: '900px' }}>
        <CardGroup columns={3} gap={24}>
          {products.map((product) => (
            <Card 
              key={product.id}
              header={
                <div style={{ padding: '12px 16px', borderBottom: '1px solid #eee' }}>
                  <h3 style={{ margin: 0, fontSize: '18px' }}>{product.name}</h3>
                </div>
              }
              footer={
                <div style={{ 
                  padding: '12px 16px', 
                  borderTop: '1px solid #eee',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{product.price}</span>
                  <button 
                    style={{ 
                      background: '#1976d2', 
                      color: 'white', 
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              }
              padding="0"
            >
              <div style={{ 
                padding: '32px 16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{ fontSize: '48px' }}>{product.image}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#ffa000' }}>
                  {'★'.repeat(Math.floor(product.rating))}
                  {product.rating % 1 > 0 ? '☆' : ''}
                  <span style={{ marginLeft: '4px', color: '#666', fontSize: '14px' }}>
                    ({product.rating})
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </CardGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Card group displaying a collection of product cards with custom styling.',
      },
    },
  },
};

// Team member card example
export const TeamCards: Story = {
  render: () => {
    const teamMembers = [
      {
        id: 1,
        name: 'John Smith',
        role: 'CEO & Founder',
        avatar: '👨‍💼',
        bio: 'Experienced leader with 15+ years in the industry.',
      },
      {
        id: 2,
        name: 'Sarah Johnson',
        role: 'CTO',
        avatar: '👩‍💼',
        bio: 'Technical expert with a background in AI and machine learning.',
      },
      {
        id: 3,
        name: 'David Chen',
        role: 'Lead Designer',
        avatar: '👨‍🎨',
        bio: 'Award-winning designer with a passion for user experience.',
      },
    ];

    return (
      <div style={{ maxWidth: '900px' }}>
        <CardGroup columns={3} gap={24}>
          {teamMembers.map((member) => (
            <Card 
              key={member.id}
              shadow="0 4px 12px rgba(0,0,0,0.1)"
              radius="12px"
            >
              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '16px',
              }}>
                <div style={{ 
                  fontSize: '64px', 
                  marginBottom: '16px' 
                }}>
                  {member.avatar}
                </div>
                <h3 style={{ margin: '0 0 4px 0' }}>{member.name}</h3>
                <div style={{ 
                  color: '#666', 
                  marginBottom: '16px',
                  fontSize: '14px',
                }}>
                  {member.role}
                </div>
                <p style={{ 
                  margin: '0', 
                  lineHeight: 1.5 
                }}>
                  {member.bio}
                </p>
                <div style={{ 
                  display: 'flex', 
                  gap: '8px', 
                  marginTop: '16px' 
                }}>
                  <button style={{ 
                    background: 'none', 
                    border: '1px solid #ddd', 
                    borderRadius: '4px', 
                    padding: '8px 12px',
                    cursor: 'pointer'
                  }}>
                    LinkedIn
                  </button>
                  <button style={{ 
                    background: 'none', 
                    border: '1px solid #ddd', 
                    borderRadius: '4px', 
                    padding: '8px 12px',
                    cursor: 'pointer'
                  }}>
                    Twitter
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </CardGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Card group displaying team member profiles.',
      },
    },
  },
};

// Pricing cards
export const PricingCards: Story = {
  render: () => {
    const pricingPlans = [
      {
        id: 1,
        name: 'Basic',
        price: '$9.99',
        period: 'per month',
        features: [
          '5 GB Storage',
          '10 Users',
          'Basic Support',
          'Email Notifications',
        ],
        cta: 'Get Started',
        highlight: false,
      },
      {
        id: 2,
        name: 'Pro',
        price: '$19.99',
        period: 'per month',
        features: [
          '25 GB Storage',
          'Unlimited Users',
          'Priority Support',
          'Advanced Analytics',
          'API Access',
        ],
        cta: 'Upgrade Now',
        highlight: true,
      },
      {
        id: 3,
        name: 'Enterprise',
        price: '$49.99',
        period: 'per month',
        features: [
          '100 GB Storage',
          'Unlimited Everything',
          '24/7 Support',
          'Custom Integrations',
          'Dedicated Account Manager',
          'SSO Authentication',
        ],
        cta: 'Contact Sales',
        highlight: false,
      },
    ];

    return (
      <div style={{ maxWidth: '900px' }}>
        <CardGroup columns={3} gap={24}>
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id}
              shadow={plan.highlight ? '0 8px 24px rgba(25, 118, 210, 0.25)' : '0 4px 12px rgba(0,0,0,0.1)'}
              radius="8px"
              style={plan.highlight ? { borderTop: '4px solid #1976d2' } : {}}
            >
              <div style={{ 
                padding: '24px',
                textAlign: 'center',
              }}>
                <h3 style={{ margin: '0 0 16px 0' }}>{plan.name}</h3>
                <div style={{ 
                  fontSize: '36px', 
                  fontWeight: 'bold', 
                  margin: '0 0 4px 0' 
                }}>
                  {plan.price}
                </div>
                <div style={{ 
                  color: '#666', 
                  marginBottom: '24px' 
                }}>
                  {plan.period}
                </div>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: '0',
                  margin: '0 0 32px 0',
                  textAlign: 'left'
                }}>
                  {plan.features.map((feature, index) => (
                    <li 
                      key={index}
                      style={{
                        padding: '8px 0',
                        borderBottom: index < plan.features.length - 1 ? '1px solid #eee' : 'none',
                      }}
                    >
                      <span style={{ marginRight: '8px', color: '#4caf50' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  style={{ 
                    width: '100%',
                    padding: '12px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    background: plan.highlight ? '#1976d2' : '#f5f5f5',
                    color: plan.highlight ? 'white' : '#333',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  {plan.cta}
                </button>
              </div>
            </Card>
          ))}
        </CardGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Card group displaying pricing plans with a highlighted recommended option.',
      },
    },
  },
}; 