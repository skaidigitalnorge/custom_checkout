import { m } from "framer-motion";
import { useState } from "react";
import { autoHeightAnimation, fadeAnimation } from "../../lib/animations";
import { AddFieldButton } from "../FormFields/AddFieldButton";

import { ControlledCountrySelector } from "../FormFields/ControlledCountrySelector";
import { ControlledInput } from "../FormFields/ControlledInput";
import { ControlledPhoneNumberInput } from "../FormFields/ControlledPhoneNumberInput";
import { ControlledToggle } from "../FormFields/ControlledToggle";
import { FormHeading } from "../Typography/FormHeading";

export const AddressInfo = () => {
  const [addFieldAddress2, setAddFieldAddress2] = useState(false);
  const [addFieldCompany, setAddFieldCompany] = useState(false);

  const handleAddAddress2 = () => {
    setAddFieldAddress2(true);
  };

  const handleAddCompany = () => {
    setAddFieldCompany(true);
  };

  return (
    <m.section
      variants={fadeAnimation}
      initial="hide"
      animate="show"
      className="mb-56"
    >
      <FormHeading className="mb-8 md:mb-24">
        Hvor skal vi sende varene?
      </FormHeading>
      <div className="flex flex-col">
        <ControlledInput
          name="name"
          label="Name*"
          validators={{ required: "Hva er fornavnet ditt?" }}
          autoCapitalize="on"
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
          <m.div variants={autoHeightAnimation} initial="hide" animate="show">
            <ControlledInput name="address2" label="Leilighetnummer, o.l." />
          </m.div>
        )}
        <div className="md:flex mb-16">
          <div className="flex-1">
            <ControlledInput
              name="zip"
              label="Postnummer*"
              inputMode="numeric"
              validators={{ required: "Hva er postnummeret ditt?" }}
              border="border-b border-t border-l border-neutral-200"
              errorStyling="border-danger-500"
              rounded="rounded-l-project"
            />
          </div>
          <div className="flex-3">
            <ControlledInput
              name="city"
              label="Sted*"
              validators={{ required: "Hviken by bor du i?" }}
              rounded="rounded-r-project"
            />
          </div>
        </div>
        <ControlledPhoneNumberInput dialCodeName="dialCode" phoneName="phone" />

        {addFieldCompany && (
          <m.div variants={autoHeightAnimation} initial="hide" animate="show">
            <ControlledInput name="company" label="Selskap" />
          </m.div>
        )}
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between mt-16">
          <div className="mt-24 md:mt-0">
            <ControlledToggle
              name="createAccount"
              label="Lagre infoen min til neste gang"
              checked
              defaultValue={true}
            />
          </div>
          {!addFieldCompany && (
            <AddFieldButton onClick={handleAddCompany}>
              Legg til selskap
            </AddFieldButton>
          )}
        </div>
      </div>
    </m.section>
  );
};
