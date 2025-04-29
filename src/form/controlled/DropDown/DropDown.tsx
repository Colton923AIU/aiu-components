import * as React from "react";
import { Controller } from "react-hook-form";
import { Dropdown } from "@fluentui/react";
import { IDropDown } from "./IDropDown";

const ControlledDropdown: React.FC<IDropDown> = ({
  name,
  control,
  label,
  options,
  errorMessage,
  styleOverrides,
  onChange,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Dropdown
          label={label}
          options={options}
          selectedKey={field.value}
          onChange={(e, option) => {
            field.onChange(option?.key);
            if (onChange) onChange(option?.key);
          }}
          errorMessage={errorMessage}
          style={styleOverrides}
        />
      )}
    />
  );
};

export { ControlledDropdown };
