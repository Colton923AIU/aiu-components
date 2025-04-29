export interface IControlledComponent {
  name: string;
  control: Control;
  errorMessage?: string;
  styleOverrides?: React.CSSProperties;
}
