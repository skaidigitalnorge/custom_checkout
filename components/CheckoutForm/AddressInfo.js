import { useState } from "react";
import { Input } from "../FormFields/Input";
import { InputCountry } from "../FormFields/InputCountry";
import { Toggle } from "../FormFields/Toggle";
import { FormHeading } from "../Typography/FormHeading";
import { ControlledInput } from "../FormFields/ControlledInput";
import { SelectCountry } from "../FormFields/SelectCountry";

export const AddressInfo = () => {
  const [addFieldAddress2, setAddFieldAddress2] = useState(false);

  const handleAddAddress2 = () => {
    setAddFieldAddress2(true);
  };

  return (
    <section className="mb-56">
      <FormHeading className="mb-24">Hvor skal vi sende varene?</FormHeading>
      <div className="flex flex-col gap-y-16">
        <ControlledInput
          name="name"
          label="Name*"
          validators={{ required: "Hva er fornavnet ditt?" }}
        />
        <SelectCountry />
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
        <ControlledInput
          name="zip"
          label="Postnummer*"
          validators={{ required: "Hva er postnummeret ditt?" }}
        />
        <ControlledInput
          name="city"
          label="Sted*"
          validators={{ required: "Hviken by bor du i?" }}
        />
        <InputCountry />
        <Toggle name="createAccount">Lagre infoen min til neste gang</Toggle>
      </div>
    </section>
  );
};
