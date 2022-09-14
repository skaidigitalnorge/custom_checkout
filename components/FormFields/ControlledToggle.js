import { Controller, useFormContext } from "react-hook-form";
import { Toggle } from "./Toggle";

export const ControlledToggle = ({
  name,
  label,
  validators,
  placeholder,
  checked,
}) => {
  const { register, control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, name }, fieldState }) => {
        return (
          <Toggle
            {...register(name, validators)}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            label={label}
            placeholder={placeholder}
            defaultChecked={checked}
          />
        );
      }}
    />
  );
};
