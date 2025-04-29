import * as React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@fluentui/react";
import { ITextField } from "./ITextField";

const ControlledTextField: React.FC<ITextField> = ({
  name,
  control,
  label,
  errorMessage,
  type = "text",
  disabled = false,
  styleOverrides,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          style={styleOverrides}
          label={label}
          type={type}
          onChange={(_, value) => field.onChange(value)}
          value={field.value || ""}
          errorMessage={errorMessage}
          disabled={disabled} // Pass the disabled prop to TextField
        />
      )}
    />
  );
};

export { ControlledTextField };
