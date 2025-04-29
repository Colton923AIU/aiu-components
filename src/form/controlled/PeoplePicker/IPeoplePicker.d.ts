import { IControlledComponent } from "../IControlledComponent";

interface IPeoplePicker extends IControlledComponent {
  context: any;
  titleText: string;
  personSelectionLimit?: number;
  disabled?: boolean;
  showTooltip?: boolean;
  searchTextLimit?: number;
}

export { IPeoplePicker };
