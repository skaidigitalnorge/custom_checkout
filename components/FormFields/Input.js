import { useState } from "react";

export const Input = ({
  icon,
  name,
  children,
  hasButton,
  onClick,
  buttonText,
}) => {
  const [hasClickedButton, setHasClickedButton] = useState(false);

  const handleClick = () => {
    onClick();
    setHasClickedButton(true);
  };

  return (
    <div className="flex items-center justify-between px-12 h-48 border-1 border-neutral-200 rounded-project hover:cursor-text peer-focus:border-primary-500">
      <div className="flex items-center">
        {icon && <div className="w-20 h-20 mr-8 border-1">IC</div>}
        <div className="flex flex-col ">
          <input
            type="text"
            placeholder=" "
            className=" mt-[-2px] text-paragraph-small block w-full appearance-none focus:outline-none focus:ring-0 peer translate-y-8"
          />
          <label
            htmlFor={name}
            className="text-paragraph-small text-neutral-500  absolute duration-300 transform -translate-y-12 scale-75 z-[10] origin-[0]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-12"
          >
            {children}
          </label>
        </div>
      </div>
      {hasButton && !hasClickedButton && (
        <button
          className="text-paragraph-xsmall text-neutral-500 flex"
          onClick={handleClick}
        >
          {buttonText} +
        </button>
      )}
    </div>
  );
};
