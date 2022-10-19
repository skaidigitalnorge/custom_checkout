import { merchantSerialNumber, subscriptionKey } from "../../../lib/vipps";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  const { body } = req;
  const { phoneNumber, total, orderId } = body;

  const URL = `https://apitest.vipps.no/ecomm/v2/payments/`;

  const totalInCents = total * 100;
  const fakeOrderId = "2222224";

  const requestBody = {
    customerInfo: {
      mobileNumber: phoneNumber || "99164412",
    },
    merchantInfo: {
      callbackPrefix: `${process.env.DOMAIN}/api/vipps/callback`,
      fallBack: `${process.env.DOMAIN}/ordre-${orderId || fakeOrderId}`,
      merchantSerialNumber: merchantSerialNumber,
    },
    transaction: {
      amount: totalInCents || 6900,
      orderId: orderId || fakeOrderId,
      transactionText: "Dette er en ordre lagd fra Ragnsan sin PC",
      skipLandingPage: false,
    },
  };

  try {
    const response = await fetch(URL, {
      endpoint: URL,
      method: "POST",
      headers: {
        Authorization: `${req.headers.authorization}`,
        "Ocp-Apim-Subscription-Key": subscriptionKey,
        "Merchant-Serial-Number": merchantSerialNumber,
        "Content-Type": "application/json",
        "Vipps-System-Name": "shopify",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(requestBody),
    });

    const jsonRes = await response.json();

    res.status(200).send(jsonRes);
  } catch (error) {
    console.error("Error - ", error);

    res.status(error.status || 500).end(error.message);
  }
}
