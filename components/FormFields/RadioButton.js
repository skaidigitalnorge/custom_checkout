import { useState } from "react";

export const RadioButton = ({
  children,
  name,
  value,
  labelHeading,
  labelSubheading,
  rightHeading,
  rightSubheading,
}) => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <div
      className={`flex flex-col p-16 border border-neutral-200 rounded-project  ${
        isChecked && "border-2 border-primary-500"
      }`}
    >
      <div className="flex ">
        <input
          type="radio"
          name={name}
          id={value}
          value={value}
          className="mr-12 mt-6 w-18 h-18 flex self-start group accent-primary-500 peer"
        />
        <div className="flex flex-col grow">
          <label
            htmlFor={value}
            className="text-paragraph-medium font-semibold mb-4 flex justify-between "
          >
            {labelHeading}
            {rightHeading && <span className="mb-8">{rightHeading}</span>}
          </label>
          <span className="text-paragraph-xsmall text-neutral-500 flex justify-between">
            {labelSubheading}
            {rightSubheading && <span>{rightSubheading}</span>}
          </span>
        </div>
      </div>

      {children}
    </div>
  );
};
