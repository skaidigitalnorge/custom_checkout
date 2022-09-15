import { ControlledInput } from "../FormFields/ControlledInput";
import { FormHeading } from "../Typography/FormHeading";

export const EmailInfo = ({}) => {
  return (
    <section className="mb-56">
      <FormHeading className="mb-24">Først. Hva er e-posten din?</FormHeading>
      <div className="flex flex-col">
        <button className="flex justify-end text-paragraph-xsmall text-neutral-500 mb-[-8px]">
          Har du allerede en konto?{" "}
          <span className="underline ml-4">Logg inn her.</span>
        </button>
        <ControlledInput
          name="email"
          label="E-post*"
          validators={{
            required: "Du må skrive inn e-posten din",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message:
                "Det det ser ikke helt riktig ut. Sjekk om du har skrevet feil.",
            },
          }}
        />
      </div>
    </section>
  );
};
