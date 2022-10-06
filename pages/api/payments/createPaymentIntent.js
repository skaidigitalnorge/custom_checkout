const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const data = req.body;

  console.log("Data: ", data);

  //todo validate amount on server, so the data isn't corupted client side

  try {
    const paymentIntent = await stripe.paymenyIntent.create({
      amount: "100",
      currency: "NOK",
    });

    res.json({
      paymentIntentId: paymentIntent.id,
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    throw new Error(error);
  }
}
