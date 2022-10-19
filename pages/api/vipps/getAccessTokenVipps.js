import { clientId, clientSecret, subscriptionKey } from "../../../lib/vipps";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  try {
    const data = await fetch("https://apitest.vipps.no/accessToken/get", {
      method: "POST",
      headers: {
        client_id: clientId,
        client_secret: clientSecret,
        "Ocp-Apim-Subscription-Key":
          process.env.NEXT_PUBLIC_VIPPS_SUBSCRIPTION_KEY_PRIMARY,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const jsonData = await data.json();
    res.status(200).json(jsonData);
  } catch (error) {
    console.error(error);
    return res.status(error.status || 500).end(error.message);
  }
}
