import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { AddFieldButton } from "./AddFieldButton";

export const Input = ({
  type,
  icon,
  name,
  label,
  placeholder,
  hasButton,
  onClick,
  buttonText,
  hasError,
  errorMessage,
  onChange,
  onBlur,
  value,
  error,
  helperText,
  border,
  rounded,
  errorStyling,
  autoCapitalize,
  inputMode,
}) => {
  const [hasClickedButton, setHasClickedButton] = useState(false);

  const handleClick = () => {
    onClick();
    setHasClickedButton(true);
  };

  return (
    <>
      <div
        className={`flex items-center justify-between px-12 h-48 mt-16 hover(:not focus):border-neutral-300  hover:cursor-text focus-within:border-primary-500 ${
          error && errorStyling
            ? errorStyling
            : error && "border-1 border-danger-500"
        } 
        ${border ? border : "border-1 border-neutral-200"}
          ${rounded ? rounded : "rounded-project"}
        `}
      >
        <div className="flex items-center  w-100%">
          {icon && <div className="w-20 h-20 mr-8 border-1">IC</div>}
          <div className="flex flex-col grow">
            <input
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              name={name}
              autoComplete={name}
              autoCapitalize={autoCapitalize}
              inputMode={inputMode}
              id={name}
              type={type ? type : "text"}
              placeholder={placeholder ? placeholder : " "}
              className={`mt-[-2px] text-paragraph-small block w-full appearance-none focus:outline-none focus:ring-0 peer translate-y-8`}
            />
            <label
              htmlFor={name}
              className="hover:cursor-text text-paragraph-small text-neutral-500  absolute duration-300 transform -translate-y-12 scale-75 z-[10] origin-[0]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-12"
            >
              {label}
            </label>
          </div>
        </div>
        {hasButton && !hasClickedButton && (
          <AddFieldButton onClick={handleClick}>{buttonText}</AddFieldButton>
        )}
      </div>
      {error && helperText && (
        <span className="text-paragraph-xsmall font-semibold text-danger-500">
          {helperText}
        </span>
      )}
    </>
  );
};
