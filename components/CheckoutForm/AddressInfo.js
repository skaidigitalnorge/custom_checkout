import { m } from "framer-motion";
import { useState } from "react";
import { fadeAnimation } from "../../lib/animations";

import { ControlledCountrySelector } from "../FormFields/ControlledCountrySelector";
import { ControlledInput } from "../FormFields/ControlledInput";
import { ControlledPhoneNumberInput } from "../FormFields/ControlledPhoneNumberInput";
import { ControlledToggle } from "../FormFields/ControlledToggle";
import { FormHeading } from "../Typography/FormHeading";

export const AddressInfo = () => {
  const [addFieldAddress2, setAddFieldAddress2] = useState(false);

  const handleAddAddress2 = () => {
    setAddFieldAddress2(true);
  };

  return (
    <m.section
      variants={fadeAnimation}
      initial="hide"
      animate="show"
      className="mb-56"
    >
      <FormHeading className="mb-24">Hvor skal vi sende varene?</FormHeading>
      <div className="flex flex-col gap-y-16">
        <ControlledInput
          name="name"
          label="Name*"
          validators={{ required: "Hva er fornavnet ditt?" }}
        />
        <ControlledCountrySelector name="country" />
        <ControlledInput
          name="address1"
          label="Gateadresse*"
          validators={{ required: "Hva er adressen din?" }}
          hasButton
          onClick={handleAddAddress2}
          buttonText="Legg til lei.nr. o.l."
        />

        {addFieldAddress2 && (
          <ControlledInput name="address2" label="Leilighetnummer, o.l." />
        )}
        <div className="flex">
          <div className="flex-1">
            <ControlledInput
              name="zip"
              label="Postnummer*"
              validators={{ required: "Hva er postnummeret ditt?" }}
              // className="border-none"
            />
          </div>
          <div className="flex-3">
            <ControlledInput
              name="city"
              label="Sted*"
              validators={{ required: "Hviken by bor du i?" }}
            />
          </div>
        </div>
        <ControlledPhoneNumberInput dialCodeName="dialCode" phoneName="phone" />
        <ControlledToggle
          name="createAccount"
          label="Lagre infoen min til neste gang"
          checked
        />
      </div>
    </m.section>
  );
};
