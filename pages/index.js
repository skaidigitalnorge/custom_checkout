import { FormProvider, useForm } from "react-hook-form";

import { AddressInfo } from "../components/CheckoutForm/AddressInfo";
import { EmailInfo } from "../components/CheckoutForm/EmailInfo";
import { PaymentInfo } from "../components/CheckoutForm/PaymentInfo";
import { ShippingInfo } from "../components/CheckoutForm/ShippingInfo";
import { Container } from "../components/Container/Container";
import { Input } from "../components/FormFields/Input";
import { RadioButton } from "../components/FormFields/RadioButton";
import { SubmitButton } from "../components/FormFields/SubmitButton";
import { Toggle } from "../components/FormFields/Toggle";
import { Grid } from "../components/Grid/Grid";
import { GridItem } from "../components/Grid/GridItem";
import { LineItem } from "../components/LineItem/LineItem";
import { UpsellItem } from "../components/LineItem/UpsellItem";
import { OrderSummary } from "../components/OrderSummary/OrderSummary";
import { FormHeading } from "../components/Typography/FormHeading";

// TODO Fikse at state håndteres riktig med react hook form med custom components
// TODO Fikse focus og hover states for inputs
// TODO Fikse country selector for telefonnummer
// TODO Legge inn alle ikoner som skal være der, på en nice måte
// TODO Må normalize og fjerne spacing på telefonnummer når vi skal submitte dem
// TODO Adde input og autofyll for selskap
// TODO Legge inn ikon på payment method som samsvarer med hva slag kort du har, dynamisk
// TODO Finne ut hvordan man kan sørge for at kan ha hover effect, men at den ikke overrider focus effect på alle inputs

export default function Home() {
  const methods = useForm({
    defaultValues: {
      shipping: "storeDelivery",
      payment: "card",
    },
  });

  const watch = methods.watch;

  const watchEmail = watch("email");
  const watchPhone = watch("phone");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container c="mt-96">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Grid>
            <GridItem size="four-eight-four" className="mb-56 lg:col-start-2">
              <input type="submit" />
              <EmailInfo />
              {watchEmail != undefined && <AddressInfo />}
              {watchPhone != undefined && watchPhone != "" && (
                <>
                  <ShippingInfo />
                  <PaymentInfo />
                  <SubmitButton>Fullfør bestilling</SubmitButton>
                </>
              )}
            </GridItem>
            <GridItem size="four-eight-four" className="lg:col-start-8">
              <div className="flex flex-col gap-y-24">
                <LineItem />
                <LineItem />
                <div className="my-56">
                  <UpsellItem />
                </div>
                <OrderSummary />
              </div>
            </GridItem>
          </Grid>
        </form>
      </FormProvider>
    </Container>
  );
}
