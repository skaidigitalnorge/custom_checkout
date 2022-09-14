// import { Select } from "./Select";
import Select from "react-select";
import countries from "../../data/countries.json";

import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import MaskedInput from "react-input-mask";

export const InputCountry = ({}) => {
  const [hasSelectedCountry, setHasSelected] = useState(false);
  const { register, control, getValues, watch } = useFormContext();

  const options = countries.map((country) => {
    return {
      value: country.dial_code,
      label: `${country.flag} ${country.name} ${country.dial_code}`,
      flag: country.flag,
    };
  });

  const customStyles = {
    control: (styles) => ({ ...styles }),
    option: (styles) => ({ ...styles }),
    menu: (styles) => ({ ...styles, width: "375px" }),
  };

  return (
    <div className="flex p-12 border border-neutral-200 rounded-project">
      <div className="pr-12 mr-12 border-r-2 border-neutral-200">
        <Controller
          control={control}
          defaultValue={options.find((o) => o.dial_code === "+47")}
          name="dialCode"
          render={({ field: { onChange, value, ref } }) => (
            <Select
              inputRef={ref}
              value={options.find((c) => c.dial_code === value)}
              onChange={(val) => onChange(val.value)}
              options={options}
              styles={customStyles}
              formatOptionLabel={(option, { context }) => {
                return context === "menu" ? option.label : option.flag;
              }}
            />
          )}
        />
      </div>
      <div className="flex flex-3 items-center">
        <span className="text-neutral-500 mr-8">{getValues("dialCode")}</span>
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <MaskedInput
              mask="99 99 99 99 99 99"
              maskChar=""
              value={field.value}
              onChange={field.onChange}
            >
              {(inputProps) => (
                <input
                  {...inputProps}
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="123 123 12"
                  className="grow outline-none"
                />
              )}
            </MaskedInput>
          )}
        />
        {/* <InputMask mask="99/99/9999" value={value} onChange={onChange}>
          {(inputProps) => (
            <input
              {...inputProps}
              type="tel"
              className="grow outline-none"
              {...register("phoneNumber")}
              placeholder="123 123 12"
            />
          )}
        </InputMask> */}
      </div>
    </div>
  );
};
