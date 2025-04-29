import * as React from "react";
import { Controller } from "react-hook-form";
import {
  DatePicker,
  DayOfWeek,
  Label,
  Stack,
  StackItem,
} from "@fluentui/react";
import { IDatePicker } from "./IDatePicker";

const ControlledDatePicker: React.FC<IDatePicker> = ({
  name,
  control,
  label,
  errorMessage,
  styleOverrides,
}) => {
  return (
    <Stack style={styleOverrides}>
      {errorMessage ? (
        <StackItem>
          <Label required>{errorMessage}</Label>
        </StackItem>
      ) : null}
      <StackItem>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <DatePicker
              label={label}
              firstDayOfWeek={DayOfWeek.Sunday}
              placeholder="Select a date..."
              onSelectDate={(date) => field.onChange(date)}
              value={field.value}
            />
          )}
        />
      </StackItem>
    </Stack>
  );
};

export { ControlledDatePicker };
