import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import StripeCheckoutForm from "../../components/StripeCheckoutForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export const CardPaymentForm = ({}) => {
  const [clientSecret, setClientSecret] = useState("");
  const [paymentIntent, setPaymentIntent] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/stripe/createPaymentIntent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: 30000,
        payment_intent_id: "",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.client_secret),
          setPaymentIntent(data.id),
          console.log("I cardpaymentform og client secret er", clientSecret);
      });
  }, []);

  const appearance = {
    theme: "stripe",
    labels: "floating",
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements stripe={stripePromise}>
          <StripeCheckoutForm />
        </Elements>
      )}
    </div>
  );
};
