import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import StripeCheckoutFormOld from "../components/StripeCheckoutFormOld";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Petter() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const options = {
    clientSecret,
    appearance,
    fonts,
  };

  return (
    <div className="">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <StripeCheckoutFormOld />
        </Elements>
      )}
    </div>
  );
}

const appearance = {
  theme: "stripe",
  labels: "floating",
};
const fonts = {
  family: "Inter",
  src: "/public/fonts/inter-v12-latin-regular.woff2",
  weight: 400,
};
