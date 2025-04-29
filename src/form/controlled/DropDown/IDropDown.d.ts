import { IControlledComponent } from "../IControlledComponent";

interface IDropDown extends IControlledComponent {
  label: string;
  options: IDropdownOption[];
  onChange?: (value: any) => void;
}

export { IDropDown };
