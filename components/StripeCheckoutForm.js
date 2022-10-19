import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";

export default function StripeCheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    console.log("this my client secert", clientSecret);

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleStripeCheckout = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return; // Stripe.js has not yet loaded. // Make sure to disable form submission until Stripe.js has loaded.
    }
    setIsLoading(true);

    const { error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Jenny Rosen",
        },
      },
    });

    // const { error } = await stripe.confirmPayment({
    //   elements,
    //   confirmParams: {
    //     return_url: "http://localhost:3000/test",
    //     receipt_email: email,
    //     shipping: {
    //       address: { city: "NY" },
    //       name: "Shipping user",
    //     },
    //     payment_method_data: {
    //       billing_details: {
    //         name: "Billing user",
    //       },
    //     },
    //   },
    // });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }
    setIsLoading(false);
  };

  // const handleStripeCheckout = async (event) => {
  //   event.preventDefault();

  //   if (!stripe || !elements) {
  //     return;
  //   }

  //   const result = await stripe.confirmCardPayment(clientSecret, {
  //     payment_method: {
  //       card: elements.getElement(CardElement),
  //       billing_details: {
  //         name: "Jenny Rosen",
  //       },
  //     },
  //   });

  //   if (result.error) {
  //     // Show error to your customer (for example, insufficient funds)
  //     console.log(result.error.message);
  //   } else {
  //     if (result.paymentIntent.status === "succeeded") {
  //       // Show a success message to your customer
  //       // There's a risk of the customer closing the window before callback
  //       // execution. Set up a webhook or plugin to listen for the
  //       // payment_intent.succeeded event that handles any business critical
  //       // post-payment actions.
  //     }
  //   }
  // };

  return (
    <div>
      {/* <form className="w-500" id="payment-form" onSubmit={handleSubmit}> */}
      <CardElement
        className="rounded-project border border-neutral-200 focus-within:border-primary-500 h-48 pt-14 px-12 mt-8"
        options={cardElementOpts}
      />
      <button
        disabled={isLoading || !stripe || !elements}
        id="submit"
        type="submit"
        onClick={handleStripeCheckout}
      >
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
      {/* </form> */}
    </div>
  );
}

const iframeStyles = {
  base: {
    color: "#404040",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    iconColor: "#404040",
    "::placeholder": {
      color: "#737373",
    },
  },
  invalid: {
    iconColor: "#EF4444",
    color: "#EF4444",
  },
  complete: {
    iconColor: "#4338ca",
  },
};

const cardElementOpts = {
  iconStyle: "solid",
  style: iframeStyles,
  hidePostalCode: true,
};
