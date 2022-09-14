import { useState } from "react";
import { useFormContext } from "react-hook-form";

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
  ref,
  error,
  helperText,
}) => {
  const [hasClickedButton, setHasClickedButton] = useState(false);

  const handleClick = () => {
    onClick();
    setHasClickedButton(true);
  };

  return (
    <>
      <div
        className={`flex items-center justify-between px-12 h-48 border-1 border-neutral-200 rounded-project hover:cursor-text focus-within:border-2 focus-within:border-primary-500 ${
          error && "border-2 border-danger-500"
        }`}
      >
        <div className="flex items-center  w-100%">
          {icon && <div className="w-20 h-20 mr-8 border-1">IC</div>}
          <div className="flex flex-col grow">
            <input
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              name={name}
              id={name}
              ref={ref}
              type={type ? type : "text"}
              placeholder={placeholder ? placeholder : " "}
              className=" mt-[-2px] text-paragraph-small block w-full appearance-none focus:outline-none focus:ring-0 peer translate-y-8"
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
          <button
            className="text-paragraph-xsmall text-neutral-500 flex shrink-0"
            onClick={handleClick}
          >
            {buttonText} +
          </button>
        )}
      </div>
      {error && helperText && (
        <span className="text-paragraph-xsmall font-semibold text-danger-500 mt-[-12px]">
          {helperText}
        </span>
      )}
    </>
  );
};
