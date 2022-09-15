import { useCallback } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "./Input";

export const ControlledInput = ({
  type,
  name,
  label,
  validators,
  hasButton,
  onClick,
  buttonText,
  placeholder,
  border,
  rounded,
  errorStyling,
  autoCapitalize,
  inputMode,
}) => {
  const { register, control } = useFormContext();

  const getInputHelperText = useCallback((error) => {
    return !error ? "" : error.message;
  }, []);

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={""}
      render={({ field: { onChange, onBlur, value, name }, fieldState }) => {
        return (
          <Input
            {...register(name, validators)}
            type={type}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            label={label}
            placeholder={placeholder}
            error={!!fieldState.invalid}
            helperText={
              !fieldState.invalid ? "" : getInputHelperText(fieldState.error)
            }
            hasButton={hasButton}
            autoCapitalize={autoCapitalize}
            inputMode={inputMode}
            onClick={onClick}
            buttonText={buttonText}
            border={border}
            rounded={rounded}
            errorStyling={errorStyling}
          />
        );
      }}
    />
  );
};
