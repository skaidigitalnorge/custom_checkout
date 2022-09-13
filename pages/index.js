import { useState } from "react";
import { Container } from "../components/Container/Container";
import { Input } from "../components/FormFields/Input";
import { InputCountry } from "../components/FormFields/InputCountry";
import { RadioButton } from "../components/FormFields/RadioButton";
import { Toggle } from "../components/FormFields/Toggle";
import { Grid } from "../components/Grid/Grid";
import { GridItem } from "../components/Grid/GridItem";
import { FormHeading } from "../components/Typography/FormHeading";

export default function Home() {
  const [addFieldAddress2, setAddFieldAddress2] = useState(false);

  const handleAddAddress2 = () => {
    setAddFieldAddress2(true);
  };

  const CardInput = () => {
    return (
      <div className="flex flex-col">
        <div className="flex max-w-[100%]">
          <input type="text" />
        </div>
      </div>
    );
  };

  return (
    <Container>
      <Grid>
        <GridItem size="four-eight-twelve" className="mb-56">
          <FormHeading className="mb-24">Hva er e-posten din?</FormHeading>
          <div className="flex flex-col gap-y-16">
            <Input icon name="email">
              E-post*
            </Input>
          </div>
        </GridItem>
        <GridItem size="four-eight-twelve" className="mb-56">
          <FormHeading className="mb-24">
            Hvor skal vi sende varene?
          </FormHeading>
          <div className="flex flex-col gap-y-16">
            <Input name="name">Fullt navn*</Input>
            <Input name="country">Land*</Input>
            <Input
              name="email"
              hasButton
              buttonText="Legg til lei.nr. o.l."
              onClick={handleAddAddress2}
            >
              Gateadresse*
            </Input>
            {addFieldAddress2 && <Input name="address2">Address2*</Input>}
            <Input name="zip">Postnummer*</Input>
            <Input name="city">Sted*</Input>
            <InputCountry />
            <Input name="country">Telefonummer*</Input>
            <Toggle name="createAccount">
              Lagre infoen min til neste gang
            </Toggle>
          </div>
        </GridItem>

        <GridItem size="four-eight-twelve" className="mb-56">
          <FormHeading className="mb-24">
            Hvordan skal vi sende dem?
          </FormHeading>
          <div className="flex flex-col gap-y-16">
            <RadioButton
              name="shipping"
              value="storeDelivery"
              labelHeading="Hente pakke"
              labelSubheading="Til et leveringssted i nærheten av deg"
              rightHeading="kr 49"
              rightSubheading={posten_logo}
            />
            <RadioButton
              name="shipping"
              value="homeDelivery"
              labelHeading="Hjemlevering"
              labelSubheading="Vi setter den utenfor døra di"
              rightHeading="kr 249"
              rightSubheading={posten_logo}
            />
            <Toggle name="sameAddress">
              Samme leverings- og faktureringsadresse
            </Toggle>
          </div>
        </GridItem>

        <GridItem size="four-eight-twelve" className="mb-56">
          <FormHeading className="mb-24">Hvordan vil du betale?</FormHeading>
          <div className="flex flex-col gap-y-16">
            <RadioButton
              name="payment"
              value="card"
              labelHeading="Med kort"
              labelSubheading="Sikker betaling via Stripe"
              rightHeading="logoer her"
            >
              <CardInput />
            </RadioButton>
            <RadioButton
              name="payment"
              value="vipps"
              labelHeading="Med Vipps"
              labelSubheading="Du blir videresendt til Vipps-menyen etterpå"
              rightHeading={klarna_logo}
            />
            <RadioButton
              name="payment"
              value="klarnaLater"
              labelHeading="Senere med Klarna"
              labelSubheading="Du blir videresendt til Klarna-menyen etterpå"
              rightHeading={klarna_logo}
            />
          </div>
        </GridItem>
      </Grid>
    </Container>
  );
}

const klarna_logo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="26.67"
    width="40"
    viewBox="-67.935 -25.275 588.77 151.65"
  >
    <path d="M79.7 0H57.4c0 18.3-8.4 35-23 46l-8.8 6.6 34.2 46.6h28.1L56.4 56.3C71.3 41.5 79.7 21.5 79.7 0zM0 0h22.8v99.2H0zm94.5 0H116v99.2H94.5zm210.1 28.7c-8.2 0-16 2.5-21.2 9.6v-7.7H263v68.6h20.7v-36c0-10.4 7-15.5 15.4-15.5 9 0 14.2 5.4 14.2 15.4v36.2h20.5V55.6c0-16-12.7-26.9-29.2-26.9zM181 30.6V35c-5.8-4-12.8-6.3-20.4-6.3-20 0-36.2 16.2-36.2 36.2 0 20 16.2 36.2 36.2 36.2 7.6 0 14.6-2.3 20.4-6.3v4.4h20.5V30.6zm-18.7 51.9c-10.3 0-18.6-7.9-18.6-17.6 0-9.7 8.3-17.6 18.6-17.6s18.6 7.9 18.6 17.6c0 9.7-8.3 17.6-18.6 17.6zm71-43v-8.9h-21v68.6h21.1v-32c0-10.8 11.7-16.6 19.8-16.6h.2v-20c-8.3 0-16 3.6-20.1 8.9zm164.3-8.9V35c-5.8-4-12.8-6.3-20.4-6.3-20 0-36.2 16.2-36.2 36.2 0 20 16.2 36.2 36.2 36.2 7.6 0 14.6-2.3 20.4-6.3v4.4h20.5V30.6zm-18.7 51.9c-10.3 0-18.6-7.9-18.6-17.6 0-9.7 8.3-17.6 18.6-17.6s18.6 7.9 18.6 17.6c.1 9.7-8.3 17.6-18.6 17.6zM434 32.6c0-1-.7-1.6-1.8-1.6h-1.9v5.2h.9v-1.9h1l.8 1.9h1l-.9-2.1c.6-.3.9-.8.9-1.5zm-1.8.8h-1v-1.6h1c.6 0 .9.3.9.8s-.2.8-.9.8z" />
    <path d="M431.9 28.8c-2.7 0-4.9 2.2-4.9 4.9.1 2.7 2.2 4.9 4.9 4.9s4.9-2.2 4.9-4.9-2.2-4.9-4.9-4.9zm0 8.9c-2.2 0-3.9-1.8-3.9-4s1.8-4 3.9-4c2.2 0 3.9 1.8 3.9 4s-1.8 4-3.9 4zm8.1 37.2c-7.1 0-12.9 5.8-12.9 12.9 0 7.1 5.8 12.9 12.9 12.9 7.1 0 12.9-5.8 12.9-12.9 0-7.2-5.8-12.9-12.9-12.9z" />
  </svg>
);

const vipps_logo = (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 163.5 66.1"
    style="enable-background: new 0 0 163.5 66.1"
    xmlSpace="preserve"
  >
    <path
      className="st0"
      style={{ fill: "#ff5b24" }}
      d="M28,22l5.1,14.9l5-14.9H44l-8.8,22.1h-4.4L22,22H28z"
    />
    <path
      className="st1"
      style={{ fill: "none" }}
      d="M141.4,38.1l14.9-5.1l-14.9-5v-6l22.1,8.8v4.4L141.4,44V38.1z"
    />
    <path
      className="st1"
      style={{ fill: "none" }}
      d="M28,44l5.1,14.9l5-14.9H44l-8.8,22.1h-4.4L22,44H28z"
    />
    <path
      className="st1"
      style={{ fill: "none" }}
      d="M38.1,22.1L33,7.2l-5,14.9h-6L30.9,0h4.4l8.8,22.1H38.1z"
    />
    <path
      className="st1"
      style={{ fill: "none" }}
      d="M22.1,28L7.2,33.1l14.9,5.1v5.9L0,35.3v-4.4L22.1,22V28z"
    />
    <path
      className="st0"
      style={{ fill: "#ff5b24" }}
      d="M57.3,40.6c3.7,0,5.8-1.8,7.8-4.4c1.1-1.4,2.5-1.7,3.5-0.9s1.1,2.3,0,3.7c-2.9,3.8-6.6,6.1-11.3,6.1
	c-5.1,0-9.6-2.8-12.7-7.7c-0.9-1.3-0.7-2.7,0.3-3.4s2.5-0.4,3.4,1C50.5,38.3,53.5,40.6,57.3,40.6z M64.2,28.3c0,1.8-1.4,3-3,3
	s-3-1.2-3-3s1.4-3,3-3C62.8,25.3,64.2,26.6,64.2,28.3z"
    />
    <path
      className="st0"
      style={{ fill: "#ff5b24" }}
      d="M78.3,22v3c1.5-2.1,3.8-3.6,7.2-3.6c4.3,0,9.3,3.6,9.3,11.3c0,8.1-4.8,12-9.8,12c-2.6,0-5-1-6.8-3.5v10.6h-5.4
	V22H78.3z M78.3,33c0,4.5,2.6,6.9,5.5,6.9c2.8,0,5.6-2.2,5.6-6.9c0-4.6-2.8-6.8-5.6-6.8C81,26.2,78.3,28.3,78.3,33z"
    />
    <path
      className="st0"
      style={{ fill: "#ff5b24" }}
      d="M104.3,22v3c1.5-2.1,3.8-3.6,7.2-3.6c4.3,0,9.3,3.6,9.3,11.3c0,8.1-4.8,12-9.8,12c-2.6,0-5-1-6.8-3.5v10.6h-5.4
	V22H104.3z M104.3,33c0,4.5,2.6,6.9,5.5,6.9c2.8,0,5.6-2.2,5.6-6.9c0-4.6-2.8-6.8-5.6-6.8C106.9,26.2,104.3,28.3,104.3,33z"
    />
    <path
      className="st0"
      style={{ fill: "#ff5b24" }}
      d="M132.3,21.4c4.5,0,7.7,2.1,9.1,7.3l-4.9,0.8c-0.1-2.6-1.7-3.5-4.1-3.5c-1.8,0-3.2,0.8-3.2,2.1
	c0,1,0.7,2,2.8,2.4l3.7,0.7c3.6,0.7,5.6,3.1,5.6,6.3c0,4.8-4.3,7.2-8.4,7.2c-4.3,0-9.1-2.2-9.8-7.6l4.9-0.8c0.3,2.8,2,3.8,4.8,3.8
	c2.1,0,3.5-0.8,3.5-2.1c0-1.2-0.7-2.1-3-2.5l-3.4-0.6c-3.6-0.7-5.8-3.2-5.8-6.4C124.2,23.5,128.7,21.4,132.3,21.4z"
    />
  </svg>
);

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
