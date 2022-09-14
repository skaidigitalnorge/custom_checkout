import { useFormContext, Controller } from "react-hook-form";
import Select from "react-select";

import countries from "../../data/countries.json";

export const SelectCountry = ({}) => {
  const { control } = useFormContext();

  const options = countries.map((country) => {
    return {
      value: country.name,
      label: `${country.flag} ${country.name}`,
    };
  });

  return (
    <>
      <Controller
        control={control}
        defaultValue={options.find((o) => o.name === "Norway")}
        name="country"
        render={({ field: { onChange, value, ref } }) => (
          <Select
            inputRef={ref}
            // defaultInputValue={options.find((o) => o.name === "Norway")}
            value={options.find((c) => c.name === value)}
            onChange={(val) => onChange(val.value)}
            options={options}
            className="z-[200]"
            // styles={customStyles}
            //   formatOptionLabel={(option, { context }) => {
            //     return context === "menu" ? option.label : option.flag;
            //   }}
          />
        )}
      />
    </>
  );
};
