import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useElements,
} from "@stripe/react-stripe-js";

export const CardPayment = () => {
  const elements = useElements();

  const cardElement = elements.getElement(CardNumberElement);

  const paymentMethod = {
    payment_method: {
      card: elements.getElement(CardNumberElement),
      // billing_details: {},
      // shipping: {},
      // receipt_email: ''
    },
  };

  const handlePaymentTest = async () => {
    try {
      const result = await stripe.confirmCardPayment(
        clientSecret,
        paymentMethod
      );
      if (result.error) {
        throw new Error(result.eroor.message);
      }
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };

  console.log("cardElement", cardElement);
  return (
    <form>
      <CardNumberElement className="my-8" options={CARD_ELEMENT_OPTIONS} />
      <CardExpiryElement className="my-8" options={CARD_ELEMENT_OPTIONS} />
      <CardCvcElement className="my-8" options={CARD_ELEMENT_OPTIONS} />
    </form>
  );
};

// Stripe has a defined style object that you can use to style Elements
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      iconColor: "black",
      color: "black",
      fontSize: "18px",
      fontFamily: "Raleway, sans-serif",
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "black",
      },
    },
    invalid: {
      iconColor: "#fa004f",
      color: "#fa004f",
    },
  },
};
