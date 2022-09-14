import { useState } from "react";

export const OrderSummary = ({}) => {
  // TODO fin plass å teste useReducer
  const [showDiscountCodeInput, setShowDiscountCodeInput] = useState(false);
  const [hideAddDiscountButton, setHideAddDiscountButton] = useState(false);

  const handleAddDiscountCode = () => {
    setShowDiscountCodeInput(true);
    setHideAddDiscountButton(true);
  };

  return (
    <div className="flex flex-col">
      <Item left="Subtotal" right="kr 2 200" />
      <Item left="Frakt" right="Ikke satt enda" />
      <div className="border-b border-neutral-200" />
      <Total
        onClick={handleAddDiscountCode}
        hideButton={hideAddDiscountButton}
      />
      {showDiscountCodeInput && <DiscountCodeInput />}
    </div>
  );
};

const Total = ({ onClick, hideButton }) => {
  return (
    <div className="flex justify-between mt-16">
      <div className="flex flex-col">
        <span className="text-paragraph-medium font-semibold text-neutral-900 mb-4">
          Total
        </span>
        <span className="text-paragraph-xsmall text-neutral-500">
          Med kr 249 i avgifter
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-paragraph-medium font-semibold text-neutral-900 mb-4 text-right">
          kr 2 249
        </span>
        {!hideButton && (
          <button
            className="text-paragraph-xsmall text-neutral-500"
            onClick={onClick}
          >
            Legg til rabattkode +
          </button>
        )}
      </div>
    </div>
  );
};

const Item = ({ left, right }) => {
  return (
    <div className="flex justify-between mb-8">
      <span className="text-paragraph-small font-semibold text-neutral-500">
        {left}
      </span>
      <span className="text-paragraph-small font-semibold text-neutral-500">
        {right}
      </span>
    </div>
  );
};

const DiscountCodeInput = () => {
  return (
    <div className="flex items-center grow w-100% my-16">
      <input
        type="text"
        placeholder="Rabattkode"
        className="border border-neutral-200 rounded-l-project h-[36px] grow text-paragraph-small px-8"
      />
      <button className="bg-primary-500 hover:bg-primary-600 transition-all text-white text-paragraph-small font-semibold px-32 py-6 rounded-r-project">
        Legg til
      </button>
    </div>
  );
};
