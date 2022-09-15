import MaskedInput from "react-input-mask";
import { ErrorMessage } from "@hookform/error-message";
import Select from "react-select";

import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import countries from "../../data/countries.json";

export const ControlledPhoneNumberInput = ({ dialCodeName, phoneName }) => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();
  const [freshDialCode, setFreshDialCode] = useState("");

  const watchDialCode = watch(dialCodeName);

  const options = countries.map((country) => {
    return {
      value: country.dial_code,
      label: `${country.flag} ${country.name} ${country.dial_code}`,
      flag: country.flag,
      name: country.name,
    };
  });

  const defaultCountry = options.find((o) => o.name === "Norway");
  const defaultValue = {
    label: defaultCountry.label,
    value: defaultCountry.value,
  };

  useEffect(() => {
    setFreshDialCode(watchDialCode);
  }, [watchDialCode]);

  return (
    <>
      <div
        className={`flex p-12 h-48 border border-neutral-200 hover:border-neutral-300 focus-within:border-primary-500 rounded-project ${
          errors.phone && "border-1 border-danger-500"
        }`}
      >
        <div className="pr-12 mr-12 border-r-2 border-neutral-200 flex items-center">
          <Controller
            control={control}
            name={dialCodeName}
            defaultValue={defaultValue.value}
            render={({ field: { onChange, value, ref } }) => (
              <Select
                inputRef={ref}
                value={options.find((c) => c.name === "Norway")}
                defaultValue={defaultValue}
                onChange={(val) => onChange(val.value)}
                options={options}
                styles={customStyles}
                formatOptionLabel={(option, { context }) => {
                  return context === "menu" ? option.label : option.flag;
                }}
                className="z-[200]"
              />
            )}
          />
        </div>
        <div className="flex flex-3 items-center">
          <span className="text-neutral-500 mr-8 text-paragraph-small ">
            {freshDialCode}
          </span>
          <Controller
            name={phoneName}
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
                    className="grow outline-none text-paragraph-small text-neutral-900 placeholder:text-neutral-500"
                  />
                )}
              </MaskedInput>
            )}
          />
        </div>
      </div>
      {errors.phone && (
        <span className="text-paragraph-xsmall font-semibold text-danger-500 mb-16">
          Hva er telefonnummeret ditt?
        </span>
      )}
    </>
  );
};

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "none",
    paddingTop: "0px",
  }),
  option: (styles) => ({ ...styles }),
  menu: (styles) => ({ ...styles, width: "375px" }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  indicatorContainer: () => ({
    paddingRight: "0px",
  }),
  valueContainer: (provided) => ({
    ...provided,
    paddingLeft: "0px",
    paddingRight: "0px",
  }),
};
