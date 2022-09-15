import { m } from "framer-motion";
import { Controller, useFormContext } from "react-hook-form";
import MaskedInput from "react-input-mask";
import { ControlledInput } from "./ControlledInput";
import { autoHeightAnimation } from "../../lib/animations";
import { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import { GetPaymentProviderIcon } from "../../lib/getPaymentProviderIcon";

export const InputCreditCard = ({ isActive }) => {
  const [detectedCardProvider, setDetectedCardProvider] = useState(null);

  const { control, watch } = useFormContext();
  const watchCCNumber = watch("ccNumber");

  useEffect(() => {
    setPaymentProviderByCreditCardNumber(watchCCNumber);
  }, [watchCCNumber]);

  const setPaymentProviderByCreditCardNumber = (number) => {
    if (!number) {
      return;
    }

    console.log("number", number);

    const firstTwo = number.slice(0, 2);

    if (number.charAt(0) === "4") {
      return setDetectedCardProvider("Visa");
    }
    if (firstTwo === "34" || firstTwo === "37") {
      return setDetectedCardProvider("AMEX");
    }
    if (
      firstTwo === "51" ||
      firstTwo === "52" ||
      firstTwo === "53" ||
      firstTwo === "54" ||
      firstTwo === "55"
    ) {
      return setDetectedCardProvider("MasterCard");
    }
  };

  return (
    <m.div
      variants={autoHeightAnimation}
      initial="hide"
      animate="show"
      exit="hide"
      className="flex flex-col"
    >
      <div className="flex items-center max-w-[100%] border border-neutral-200 h-48 p-12 mt-8 rounded-t-project">
        <span className="text-neutral-500">
          {detectedCardProvider
            ? GetPaymentProviderIcon(detectedCardProvider)
            : GetPaymentProviderIcon("Generic")}
        </span>
        <Controller
          name="ccNumber"
          control={control}
          rules={{
            required: isActive ? true : false,
          }}
          render={({ field }) => (
            <MaskedInput
              mask={
                detectedCardProvider === "AMEX"
                  ? "9999 999999 99999"
                  : "9999 9999 9999 9999"
              }
              maskChar=""
              value={field.value}
              onChange={field.onChange}
            >
              {(inputProps) => (
                <input
                  {...inputProps}
                  name="cc-number"
                  id="cc-number"
                  className=" w-0 flex-3 shrink-0 outline-none text-paragraph-small placeholder:text-neutral-500 text-neutral-900"
                  placeholder="1234 1234 1234 1234"
                />
              )}
            </MaskedInput>
          )}
        />
        <Controller
          name="ccExp"
          control={control}
          rules={{
            required: isActive ? true : false,
          }}
          render={({ field }) => (
            <MaskedInput
              mask="99/99"
              maskChar=""
              value={field.value}
              onChange={field.onChange}
            >
              {(inputProps) => (
                <input
                  {...inputProps}
                  name="cc-exp"
                  id="cc-exp"
                  className=" w-0 flex-1 shrink outline-none text-paragraph-small placeholder:text-neutral-500 text-neutral-900"
                  placeholder="MM/YY"
                  maxLength={5}
                />
              )}
            </MaskedInput>
          )}
        />
        <Controller
          name="ccCVC"
          control={control}
          rules={{
            required: isActive ? true : false,
          }}
          render={({ field }) => (
            <MaskedInput
              mask="999"
              maskChar=""
              value={field.value}
              onChange={field.onChange}
            >
              {(inputProps) => (
                <input
                  {...inputProps}
                  name="cc-cvc"
                  id="cc-cvc"
                  className=" w-0 flex-1 shrink outline-none text-paragraph-small placeholder:text-neutral-500 text-neutral-900 text-right"
                  placeholder="CVC"
                  maxLength={3}
                />
              )}
            </MaskedInput>
          )}
        />
      </div>
      <ControlledInput name="cc-name" label="Navn på kortet*" />
    </m.div>
  );
};

const lock_icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-lock mr-8"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);
