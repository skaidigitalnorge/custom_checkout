import { Select } from "./Select";
import countries from "../../data/countries.json";
import { useState } from "react";

export const InputCountry = ({}) => {
  const [hasSelectedCountry, setHasSelected] = useState(false);

  return (
    <div className="flex p-12 border border-neutral-200 rounded-project">
      <div className="pr-12 mr-12 border-r-2 border-neutral-200">
        <Select name="phone" labelText="">
          {countries.map((country, index) => {
            return (
              <option key={index} value={country.dial_code}>
                {country.flag}
              </option>
            );
          })}
        </Select>
      </div>
      <div className="flex flex-3">
        {" "}
        <span className="text-neutral-500 mr-8">+47</span>
        <input type="tel" className="grow" />{" "}
      </div>
    </div>
  );
};
