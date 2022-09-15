import { useRef } from "react";
import { useFormContext } from "react-hook-form";

export const ProgressIndicator = ({}) => {
  const { watch } = useFormContext();

  const watchEmail = watch("email");
  const watchPhone = watch("phone");

  return (
    <div className="flex grow gap-x-8">
      <Item isComplete={watchEmail != undefined}>E-post</Item>
      <Item isComplete={watchPhone != undefined && watchPhone != ""}>Info</Item>
      <Item>Frakt & Betaling</Item>
    </div>
  );
};

const Item = ({ children, onClick, isComplete }) => {
  return (
    <button
      className="flex flex-col items-center flex-1 grow"
      onClick={onClick}
    >
      <span
        className={`w-100% h-4 rounded-project bg-neutral-200 ${
          isComplete && "bg-primary-500"
        }`}
      />
      <span
        className={`text-paragraph-xsmall mt-8 text-neutral-500 ${
          isComplete && "text-neutral-900"
        }`}
      >
        {children}
      </span>
    </button>
  );
};
