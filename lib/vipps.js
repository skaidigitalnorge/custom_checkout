import { v4 as uuidv4 } from "uuid";

export const baseUrl = "https://apitest.vipps.no";

export const clientId = process.env.VIPPS_CLIENT_ID;
export const clientSecret = process.env.VIPPS_CLIENT_SECRET;
export const subscriptionKey = process.env.VIPPS_SUBSCRIPTION_KEY_PRIMARY;
export const merchantSerialNumber = process.env.VIPPS_MERCHANT_SERIAL_NUMBER;

const accessToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiIwMDAwMDAwMi0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9lNTExNjUyNi01MWRjLTRjMTQtYjA4Ni1hNWNiNDcxNmJjNGIvIiwiaWF0IjoxNjY1NjUwNDkxLCJuYmYiOjE2NjU2NTA0OTEsImV4cCI6MTY2NTY1NDM5MSwiYWlvIjoiRTJaZ1lGRHZGMHd1Vm5qNzYvbTBFRVllMCtCN0FBPT0iLCJhcHBpZCI6IjEyY2FhOGIyLTIwM2QtNDZhNi1iOTdkLThhZDIzNTY1YmJhMCIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2U1MTE2NTI2LTUxZGMtNGMxNC1iMDg2LWE1Y2I0NzE2YmM0Yi8iLCJyaCI6IjAuQVNBQUptVVI1ZHhSRkV5d2hxWExSeGE4U3dJQUFBQUFBQUFBd0FBQUFBQUFBQUFnQUFBLiIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJFVSIsInRpZCI6ImU1MTE2NTI2LTUxZGMtNGMxNC1iMDg2LWE1Y2I0NzE2YmM0YiIsInV0aSI6ImtVSkFjdnJGSTB5ZzhSYWM3Rll5QUEiLCJ2ZXIiOiIxLjAifQ.ltQ4BbK40midnpiw-W-rUfUlK8IBQWDqPrQDy9nQ1UVphQyvT8VUkUPWHN4mQGspI-Qcmq23_HYht4ShB-FrKz2GBXK1j8dRD_V3YeQxMAFOgEStnLqC1isu5xpyddgs2T5II_zKqVu1a7dEwfPK2fyfgfsuMLXk5HvP7RuO5qp3BMu59EtQhPbmJk-WZNFjpzGqetEgHlp3eAmjUhD_dLpIppp5CVFeXH3KxzO5d3pk1BNf_nAldReDTIj5Nn63jNrUfKXQLrnYoFks6JE334oUasCjJDZ_uJE7P5rGSxCC0lhBtbOn5x5YBLThcfRUna6300U7W0ocyMZ0GmYgvg";

export async function getAccessTokenVipps() {
  const URL = `${baseUrl}/accessToken/get`;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      client_id: clientId,
      client_secret: clientSecret,
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": subscriptionKey,
      "Merchant-Serial-Number": merchantSerialNumber,
      "Access-Control-Allow-Origin": "*",
    },
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });
    return data;
  } catch (error) {
    throw new Error("Query not fetched. Error", error);
  }
}

export const getAuthVipps = async () => {
  const data = await fetch("/api/vipps/getAccessTokenVipps", {
    method: "POST",
  });

  const JSONdata = await data.json();

  const session = typeof window ? localStorage.getItem("Authorization") : null;

  if (session === null) {
    localStorage.setItem(
      "Authorization",
      `${JSONdata.token_type} ${JSONdata.access_token}`
    );
  } else if (session != null) {
    localStorage.removeItem("Authorization");
    localStorage.setItem(
      "Authorization",
      `${JSONdata.token_type} ${JSONdata.access_token}`
    );
  }
};

export const initiatePaymentVipps = async (phoneNumber, total, orderId) => {
  const response = await fetch("/api/vipps/initiatePaymentVipps", {
    method: "POST",
    headers: {
      Authorization: localStorage.getItem("Authorization"),
    },
    body: JSON.stringify({
      phoneNumber: phoneNumber,
      total: total,
      orderId: orderId,
    }),
  });

  const result = await response.json();
  console.log("result til initiatePaymentVipps", result);

  return result;
};

export async function initiatePaymentVippsOld(orderId, total, phoneNumber) {
  const URL = `${baseUrl}/ecomm/v2/payments`;

  const totalInCents = total * 100;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": subscriptionKey,
      "Merchant-Serial-Number": merchantSerialNumber,
      "Vipps-System-Name": "shopify",
      "Access-Control-Allow-Origin": "*",
    },
    body: {
      merchantInfo: {
        authToken: uuidv4(),
        callbackPrefix:
          "https://example.com/vipps/callbacks-for-payment-update-from-vipps",
        fallBack:
          "https://example.com/vipps/fallback-result-page-for-both-success-and-failure/acme-shop-123-order123abc",
        merchantSerialNumber: merchantSerialNumber,
      },
      customerInfo: {
        mobileNumber: phoneNumber || "99164412",
      },
      transaction: totalInCents || 6900,
      orderId: orderId || "123123",
      transactionText: "Dette er en ordre lagd fra Ragnsan sin PC",
      skipLandingPage: false,
    },
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });

    return data;
  } catch (error) {
    throw new Error("Query not fetched. Error", error);
  }
}

export async function capturePaymentVipps(orderId) {
  const URL = `${baseUrl}/ecomm/v2/payments/${orderId}/capture`;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": subscriptionKey,
      "X-Request-Id": uuidv4(),
      merchantSerialNumber: merchantSerialNumber,
    },
    body: {
      merchantInfo: {
        merchantSerialNumber: merchantSerialNumber,
      },
      transactionText: "We have captured this payment via the API",
    },
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });

    return data;
  } catch (error) {
    throw new Error("Query not fetched. Error", error);
  }
}

export async function cancelPaymentVipps(orderId) {
  const URL = `${baseUrl}/ecomm/v2/payments/${orderId}/cancel`;

  const options = {
    endpoint: URL,
    method: "PUT",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": subscriptionKey,
      merchantSerialNumber: merchantSerialNumber,
    },
    body: {
      merchantInfo: {
        merchantSerialNumber: merchantSerialNumber,
      },
      transactionText: "We have cancelled this payment via the API",
    },
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });

    return data;
  } catch (error) {
    throw new Error("Query not fetched. Error", error);
  }
}

export async function refundPaymentVipps(orderId) {
  const URL = `${baseUrl}/ecomm/v2/payments/${orderId}/refund`;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": subscriptionKey,
      "X-Request-Id": uuidv4(),
      merchantSerialNumber: merchantSerialNumber,
    },
    body: {
      merchantInfo: {
        merchantSerialNumber: merchantSerialNumber,
      },
      transactionText: "We have refunded this payment via the API",
    },
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });

    return data;
  } catch (error) {
    throw new Error("Query not fetched. Error", error);
  }
}

// TODO Står at man ikke kan capture payment før man har sendt varen. Hva betyr det her spesifikt? Spørre Petter
// TODO Undersøke om det er vits å bruke staticShippingDetails i merchantInfo på initiatePayment
