import { m } from "framer-motion";
import { useState } from "react";
import { autoHeightAnimation } from "../../lib/animations";

export const RadioButton = ({
  children,
  name,
  value,
  onChange,
  onBlur,
  labelHeading,
  labelSubheading,
  rightHeading,
  rightSubheading,
  isActive,
  defaultChecked,
}) => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <div
      className={`flex flex-col p-16 border-2 border-neutral-200   rounded-project  ${
        isActive && "border-[2px] border-primary-500"
      } ${!isActive && "hover:border-neutral-300"}`}
    >
      <div className="flex ">
        <input
          defaultChecked={defaultChecked}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          name={name}
          id={value}
          type="radio"
          className="cursor-pointer mr-12 mt-6 w-18 h-18 flex self-start group accent-primary-500 peer"
        />
        <div className="flex flex-col grow">
          <label
            htmlFor={value}
            className="cursor-pointer text-paragraph-medium font-semibold mb-4 flex justify-between items-center"
          >
            {labelHeading}
            {rightHeading && <span>{rightHeading}</span>}
          </label>
          <span className="text-paragraph-xsmall text-neutral-500 flex justify-between items-center">
            {labelSubheading}
            {rightSubheading && <span>{rightSubheading}</span>}
          </span>
        </div>
      </div>
      <m.div
        variants={autoHeightAnimation}
        initial="hide"
        animate="show"
        exit="hide"
      >
        {children}
      </m.div>
    </div>
  );
};
