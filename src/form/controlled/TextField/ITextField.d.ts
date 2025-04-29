import { IControlledComponent } from "../IControlledComponent";
interface ITextField extends IControlledComponent {
  label: string;
  type?: "text" | "number";
  disabled?: boolean; // Add disabled prop
}

export { ITextField };
