const baseUrl = "https://api.klarna.com/";

const username = process.env.KLARNA_USERNAME;
const password = process.env.KLARNA_CREDENTIAL;

const auth = "Basic " + btoa(`${username}:${password}`);

export async function initiatePaymentKlarna() {
  const URL = baseUrl + `payments/v1/sessions/`;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "no-cors",
      Authorization: auth,
    },
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });
    return data;
  } catch (error) {
    console.error("Error initiatePaymentKlarna: ", error);
  }
}
