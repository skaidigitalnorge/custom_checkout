import { useEffect } from "react";
import { useCallback } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { RadioButton } from "./RadioButton";

export const ControlledRadioButton = ({
  value,
  name,
  validators,
  labelHeading,
  labelSubheading,
  rightHeading,
  rightSubheading,
  children,
  isActive,
  defaultChecked,
}) => {
  const { register, control, watch } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={""}
      render={({ field: { onChange, onBlur, name }, fieldState }) => {
        return (
          <RadioButton
            {...register(name, validators)}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            isActive={isActive}
            labelHeading={labelHeading}
            labelSubheading={labelSubheading}
            rightHeading={rightHeading}
            rightSubheading={rightSubheading}
            defaultChecked={defaultChecked}
          >
            {children}
          </RadioButton>
        );
      }}
    />
  );
};
