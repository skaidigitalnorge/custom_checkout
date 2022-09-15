import { useState } from "react";
import { ControlledCountrySelector } from "../FormFields/ControlledCountrySelector";
import { ControlledInput } from "../FormFields/ControlledInput";
import { ControlledPhoneNumberInput } from "../FormFields/ControlledPhoneNumberInput";
import { FormHeading } from "../Typography/FormHeading";

export const InvoiceAddressInfo = () => {
  const [addFieldAddress2, setAddFieldAddress2] = useState(false);

  const handleAddAddress2 = () => {
    setAddFieldAddress2(true);
  };

  return (
    <section className="mb-56">
      <FormHeading className="mb-24">Fakturaadresse</FormHeading>
      <div className="flex flex-col">
        <ControlledInput
          name="givenName"
          label="Name*"
          validators={{ required: "Hva er fornavnet ditt?" }}
        />
        <ControlledCountrySelector name="invoiceCountry" />
        <ControlledInput
          name="invoiceAddress1"
          label="Gateadresse*"
          validators={{ required: "Hva er adressen din?" }}
          hasButton
          onClick={handleAddAddress2}
          buttonText="Legg til lei.nr. o.l."
        />

        {addFieldAddress2 && (
          <ControlledInput
            name="invoiceAddress2"
            label="Leilighetnummer, o.l."
          />
        )}
        <ControlledInput
          name="invoiceZip"
          label="Postnummer*"
          validators={{ required: "Hva er postnummeret ditt?" }}
        />
        <ControlledInput
          name="invoiceCity"
          label="Sted*"
          validators={{ required: "Hviken by bor du i?" }}
        />
        <div className="mt-16">
          <ControlledPhoneNumberInput
            dialCodeName="invoiceDialCode"
            phoneName="invoicePhone"
          />
        </div>
      </div>
    </section>
  );
};
