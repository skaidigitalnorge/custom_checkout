import { useFormContext } from "react-hook-form";
import { ControlledRadioButton } from "../FormFields/ControlledRadioButton";
import { ControlledToggle } from "../FormFields/ControlledToggle";
import { Toggle } from "../FormFields/Toggle";
import { FormHeading } from "../Typography/FormHeading";
import { InvoiceAddressInfo } from "./InvoiceAddressInfo";

export const ShippingInfo = ({}) => {
  const { watch } = useFormContext();
  const watchPayment = watch("shipping");
  const watchSameAddress = watch("sameAddress");

  return (
    <section className="mb-56">
      <FormHeading className="mb-24">Hvordan skal vi sende dem?</FormHeading>
      <div className="flex flex-col gap-y-16">
        <ControlledRadioButton
          defaultChecked
          isActive={watchPayment === "storeDelivery"}
          name="shipping"
          value="storeDelivery"
          labelHeading="Hente pakke"
          labelSubheading="Til et leveringssted i nærheten av deg"
          rightHeading="kr 49"
          rightSubheading={posten_logo}
        />
        <ControlledRadioButton
          isActive={watchPayment === "homeDelivery"}
          name="shipping"
          value="homeDelivery"
          labelHeading="Hjemlevering"
          labelSubheading="Vi setter den utenfor døra di"
          rightHeading="kr 249"
          rightSubheading={posten_logo}
        />
        <ControlledToggle
          name="sameAddress"
          label="Samme leverings- og faktureringsadresse"
          checked
          defaultValue={true}
        />
        {watchSameAddress === false && <InvoiceAddressInfo />}
      </div>
    </section>
  );
};

const posten_logo = (
  <svg
    width="39.45"
    height="12"
    id="svg3133"
    version="1.1"
    viewBox="0 0 150 40"
  >
    <g
      inkscapeLabel="Layer 1"
      inkscapeGroupmode="layer"
      id="layer1"
      transform="translate(-121.2575,-455.31205)"
    >
      <path
        id="path32"
        style={{
          fill: "#e32d22",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="m 202.79362,481.11442 c -1.645,-0.1 -2.72125,-0.1 -2.655,-1.94875 0.0337,-1.07625 0.31125,-1.8475 3.57125,-1.7475 2.2175,0.0675 2.9125,0.5375 2.9125,2.1175 l 3.495,0 c 0,-3.89875 -2.375,-5.10875 -6.44125,-5.175 -4.36875,-0.0675 -7.26625,0.84 -7.33375,4.90625 -0.10125,5.04125 3.6625,4.90625 7.325,5.1075 1.8825,0.1 3.02375,0.13375 2.9575,2.0825 -0.0337,1.1775 -0.41875,1.91625 -3.67875,1.81625 -2.6875,-0.0675 -3.18,-0.74 -3.18,-2.15125 l -3.4975,0 c 0,4.0325 2.5775,5.1075 6.71125,5.175 4.4025,0.0675 7.34125,-0.97375 7.40875,-5.0075 0.10125,-5.24125 -3.83125,-4.93875 -7.595,-5.175 m 16.05125,7.09125 c -1.84875,-0.035 -2.0725,-0.97 -2.0725,-2.21875 l 0,-8.05 7.4675,0 0,-3.2775 -7.4675,0 0,-5.3 -3.7975,0 0,5.3 -2.21,0 0,3.2775 2.21,0 0,8.05 c 0,3.66375 2.18375,5.31 5.9825,5.31 3.25875,0 5.3275,-1.2425 5.3275,-5.175 l -3.44875,0 c -0.0387,1.04625 -0.2775,2.11625 -1.99125,2.08375 m 30.90875,-13.845 c -2.31875,0 -3.79625,0.73875 -4.7375,1.57875 l 0,-1.28 -3.29375,0 0,16.36875 3.7975,0 0,-7.62875 c 0,-2.85625 -0.30375,-5.67875 3.7975,-5.67875 3.2925,0 2.99,1.5125 2.99,4.67125 l 0,8.63625 3.79875,0 0,-8.93875 c 0,-3.5625 0.26875,-7.72875 -6.3525,-7.72875 m -20.75875,6.82125 c 0,-2.18375 0.335,-3.69625 3.6625,-3.69625 3.52875,0 3.72875,1.345 3.72875,3.69625 l -7.39125,0 z m 3.6625,-6.82125 c -6.5875,0 -7.5275,3.7625 -7.5275,8.66875 0,4.7725 1.0425,8.2675 7.6275,8.2675 3.09125,0 7.1925,-0.7725 7.1925,-5.175 l -3.675,0 c -0.0325,1.84875 -2.00625,2.05 -3.3825,2.05 -3.26125,0 -3.96625,-1.10875 -3.96625,-3.89875 l 11.225,0 c 0,-5.71125 -0.33625,-9.9125 -7.49375,-9.9125 m -45.23875,13.57625 c -3.66375,0 -3.99875,-1.41125 -3.99875,-5.10875 0,-3.69625 0.335,-5.1075 3.99875,-5.1075 3.6625,0 4,1.41125 4,5.1075 0,3.6975 -0.3375,5.10875 -4,5.10875 m 0,-13.57625 c -2.655,0 -4.6375,0.47 -6.04875,1.84875 -1.445,1.37625 -1.7475,3.49375 -1.7475,6.61875 0,3.12625 0.3025,5.2425 1.7475,6.62 1.41125,1.37875 3.39375,1.84875 6.04875,1.84875 2.62125,0 4.6375,-0.47 6.05,-1.84875 1.44375,-1.3775 1.745,-3.49375 1.745,-6.62 0,-3.125 -0.30125,-5.2425 -1.745,-6.61875 -1.4125,-1.37875 -3.42875,-1.84875 -6.05,-1.84875 m -16.39375,13.57625 c -3.26,0 -4.1675,-0.975 -4.1675,-5.07375 0,-4.10125 0.9075,-5.1425 4.1675,-5.1425 2.8225,0 3.4275,1.31 3.4275,5.1425 0,3.83 -0.605,5.07375 -3.4275,5.07375 m 0.605,-13.57625 c -1.74875,-0.0338 -3.73,0.36875 -5.10875,1.57875 l 0,-1.28 -3.4275,0 0,21.6725 3.7975,0 0,-6.48125 c 1.10875,1.1775 2.52,1.44625 4.30125,1.44625 6.34875,0 7.05375,-4.47 7.05375,-8.43375 0,-5.21 -0.7725,-8.43625 -6.61625,-8.5025"
      />
      <path
        id="path36"
        style={{
          fill: "#e32d22",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="m 156.9225,474.6588 c -0.37875,4.78875 -4.3825,8.5575 -9.26875,8.5575 -4.88625,0 -8.89,-3.76875 -9.26875,-8.5575 l -17.1275,0 c 0.39125,9.92875 8.55875,17.85875 18.58375,17.85875 10.02375,0 18.1925,-7.93 18.58375,-17.85875 l -1.5025,0 z"
      />
      <path
        id="path40"
        style={{
          fill: "#bcbdbf",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        d="m 138.385,473.1708 c 0.37875,-4.78875 4.3825,-8.5575 9.26875,-8.5575 4.88625,0 8.89,3.76875 9.26875,8.5575 l 1.5025,0 c -0.39125,-9.92875 -8.56,-17.85875 -18.58375,-17.85875 -10.025,0 -18.1925,7.93 -18.58375,17.85875 l 17.1275,0 z"
      />
    </g>
  </svg>
);
