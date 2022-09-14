import { useFormContext, Controller } from "react-hook-form";
import Select, { NonceProvider } from "react-select";

import countries from "../../data/countries.json";

export const ControlledCountrySelector = ({ name }) => {
  const { control } = useFormContext();

  const options = countries.map((country) => {
    return {
      value: country.name,
      label: `${country.flag} ${country.name}`,
    };
  });

  const defaultCountry = options.find((o) => o.value === "Norway");

  const defaultValue = {
    label: defaultCountry.label,
    value: defaultCountry.value,
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ref } }) => (
        <Select
          inputRef={ref}
          value={options.find((c) => c.name === "Norway")}
          defaultValue={defaultValue}
          onChange={(val) => onChange(val.value)}
          options={options}
          className="z-[200] text-paragraph-small text-neutral-900"
          styles={customStyles}
        />
      )}
    />
  );
};

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: "48px",
    borderColor: "#e5e5e5",
  }),
};
