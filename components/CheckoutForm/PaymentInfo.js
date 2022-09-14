import { useFormContext } from "react-hook-form";
import { ControlledRadioButton } from "../FormFields/ControlledRadioButton";
import { InputCreditCard } from "../FormFields/InputCreditCard";

import { FormHeading } from "../Typography/FormHeading";
export const PaymentInfo = ({}) => {
  const { watch } = useFormContext();
  const watchPayment = watch("payment");

  return (
    <section className="mb-56">
      <FormHeading className="mb-24">Hvordan vil du betale?</FormHeading>
      <div className="flex flex-col gap-y-16">
        <ControlledRadioButton
          defaultChecked
          isActive={watchPayment === "card"}
          name="payment"
          value="card"
          labelHeading="Med kort"
          labelSubheading="Sikker betaling via Stripe"
          rightHeading={klarna_logo}
        >
          <InputCreditCard />
        </ControlledRadioButton>
        <ControlledRadioButton
          isActive={watchPayment === "vipps"}
          name="payment"
          value="vipps"
          labelHeading="Med Vipps"
          labelSubheading="Du blir videresendt til Vipps-menyen etterpå"
          rightHeading={klarna_logo}
        />
        <ControlledRadioButton
          isActive={watchPayment === "klarnaLater"}
          name="payment"
          value="klarnaLater"
          labelHeading="Senere med Klarna"
          labelSubheading="Du blir videresendt til Klarna-menyen etterpå"
          rightHeading={klarna_logo}
        />
      </div>
    </section>
  );
};

const klarna_logo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="26.67"
    width="40"
    viewBox="-67.935 -25.275 588.77 151.65"
  >
    <path d="M79.7 0H57.4c0 18.3-8.4 35-23 46l-8.8 6.6 34.2 46.6h28.1L56.4 56.3C71.3 41.5 79.7 21.5 79.7 0zM0 0h22.8v99.2H0zm94.5 0H116v99.2H94.5zm210.1 28.7c-8.2 0-16 2.5-21.2 9.6v-7.7H263v68.6h20.7v-36c0-10.4 7-15.5 15.4-15.5 9 0 14.2 5.4 14.2 15.4v36.2h20.5V55.6c0-16-12.7-26.9-29.2-26.9zM181 30.6V35c-5.8-4-12.8-6.3-20.4-6.3-20 0-36.2 16.2-36.2 36.2 0 20 16.2 36.2 36.2 36.2 7.6 0 14.6-2.3 20.4-6.3v4.4h20.5V30.6zm-18.7 51.9c-10.3 0-18.6-7.9-18.6-17.6 0-9.7 8.3-17.6 18.6-17.6s18.6 7.9 18.6 17.6c0 9.7-8.3 17.6-18.6 17.6zm71-43v-8.9h-21v68.6h21.1v-32c0-10.8 11.7-16.6 19.8-16.6h.2v-20c-8.3 0-16 3.6-20.1 8.9zm164.3-8.9V35c-5.8-4-12.8-6.3-20.4-6.3-20 0-36.2 16.2-36.2 36.2 0 20 16.2 36.2 36.2 36.2 7.6 0 14.6-2.3 20.4-6.3v4.4h20.5V30.6zm-18.7 51.9c-10.3 0-18.6-7.9-18.6-17.6 0-9.7 8.3-17.6 18.6-17.6s18.6 7.9 18.6 17.6c.1 9.7-8.3 17.6-18.6 17.6zM434 32.6c0-1-.7-1.6-1.8-1.6h-1.9v5.2h.9v-1.9h1l.8 1.9h1l-.9-2.1c.6-.3.9-.8.9-1.5zm-1.8.8h-1v-1.6h1c.6 0 .9.3.9.8s-.2.8-.9.8z" />
    <path d="M431.9 28.8c-2.7 0-4.9 2.2-4.9 4.9.1 2.7 2.2 4.9 4.9 4.9s4.9-2.2 4.9-4.9-2.2-4.9-4.9-4.9zm0 8.9c-2.2 0-3.9-1.8-3.9-4s1.8-4 3.9-4c2.2 0 3.9 1.8 3.9 4s-1.8 4-3.9 4zm8.1 37.2c-7.1 0-12.9 5.8-12.9 12.9 0 7.1 5.8 12.9 12.9 12.9 7.1 0 12.9-5.8 12.9-12.9 0-7.2-5.8-12.9-12.9-12.9z" />
  </svg>
);

const vipps_logo = (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 163.5 66.1"
    style="enable-background: new 0 0 163.5 66.1"
    xmlSpace="preserve"
  >
    <path
      className="st0"
      style={{ fill: "#ff5b24" }}
      d="M28,22l5.1,14.9l5-14.9H44l-8.8,22.1h-4.4L22,22H28z"
    />
    <path
      className="st1"
      style={{ fill: "none" }}
      d="M141.4,38.1l14.9-5.1l-14.9-5v-6l22.1,8.8v4.4L141.4,44V38.1z"
    />
    <path
      className="st1"
      style={{ fill: "none" }}
      d="M28,44l5.1,14.9l5-14.9H44l-8.8,22.1h-4.4L22,44H28z"
    />
    <path
      className="st1"
      style={{ fill: "none" }}
      d="M38.1,22.1L33,7.2l-5,14.9h-6L30.9,0h4.4l8.8,22.1H38.1z"
    />
    <path
      className="st1"
      style={{ fill: "none" }}
      d="M22.1,28L7.2,33.1l14.9,5.1v5.9L0,35.3v-4.4L22.1,22V28z"
    />
    <path
      className="st0"
      style={{ fill: "#ff5b24" }}
      d="M57.3,40.6c3.7,0,5.8-1.8,7.8-4.4c1.1-1.4,2.5-1.7,3.5-0.9s1.1,2.3,0,3.7c-2.9,3.8-6.6,6.1-11.3,6.1
      c-5.1,0-9.6-2.8-12.7-7.7c-0.9-1.3-0.7-2.7,0.3-3.4s2.5-0.4,3.4,1C50.5,38.3,53.5,40.6,57.3,40.6z M64.2,28.3c0,1.8-1.4,3-3,3
      s-3-1.2-3-3s1.4-3,3-3C62.8,25.3,64.2,26.6,64.2,28.3z"
    />
    <path
      className="st0"
      style={{ fill: "#ff5b24" }}
      d="M78.3,22v3c1.5-2.1,3.8-3.6,7.2-3.6c4.3,0,9.3,3.6,9.3,11.3c0,8.1-4.8,12-9.8,12c-2.6,0-5-1-6.8-3.5v10.6h-5.4
      V22H78.3z M78.3,33c0,4.5,2.6,6.9,5.5,6.9c2.8,0,5.6-2.2,5.6-6.9c0-4.6-2.8-6.8-5.6-6.8C81,26.2,78.3,28.3,78.3,33z"
    />
    <path
      className="st0"
      style={{ fill: "#ff5b24" }}
      d="M104.3,22v3c1.5-2.1,3.8-3.6,7.2-3.6c4.3,0,9.3,3.6,9.3,11.3c0,8.1-4.8,12-9.8,12c-2.6,0-5-1-6.8-3.5v10.6h-5.4
      V22H104.3z M104.3,33c0,4.5,2.6,6.9,5.5,6.9c2.8,0,5.6-2.2,5.6-6.9c0-4.6-2.8-6.8-5.6-6.8C106.9,26.2,104.3,28.3,104.3,33z"
    />
    <path
      className="st0"
      style={{ fill: "#ff5b24" }}
      d="M132.3,21.4c4.5,0,7.7,2.1,9.1,7.3l-4.9,0.8c-0.1-2.6-1.7-3.5-4.1-3.5c-1.8,0-3.2,0.8-3.2,2.1
      c0,1,0.7,2,2.8,2.4l3.7,0.7c3.6,0.7,5.6,3.1,5.6,6.3c0,4.8-4.3,7.2-8.4,7.2c-4.3,0-9.1-2.2-9.8-7.6l4.9-0.8c0.3,2.8,2,3.8,4.8,3.8
      c2.1,0,3.5-0.8,3.5-2.1c0-1.2-0.7-2.1-3-2.5l-3.4-0.6c-3.6-0.7-5.8-3.2-5.8-6.4C124.2,23.5,128.7,21.4,132.3,21.4z"
    />
  </svg>
);
