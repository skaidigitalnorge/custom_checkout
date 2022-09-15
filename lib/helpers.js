export const serializeCheckoutData = (data) => {
  const invoiceAddress = !data.sameAddress && {
    name: data.name ?? "",
    address1: data.invoiceAddress1 ?? "",
    address2: data.invoiceAddress2 ?? "",
    zip: data.invoiceZip ?? "",
    city: data.invoiceCity ?? "",
    country: data.invoiceCountry ?? "",
    phone: data.invoiceDialCode + data.invoicePhone.replace(/\s/g, "") ?? "",
  };

  const cardInfo = data.payment === "card" && {
    ccNumber: data.ccNumber,
    ccExp: data.ccExp,
    ccCVC: data.ccCVC,
  };

  return {
    name: data.name ?? "",
    email: data.email ?? "",

    address1: data.address1 ?? "",
    address2: data.address2 ?? "",
    zip: data.zip ?? "",
    city: data.city ?? "",
    country: data.country ?? "",
    phone: data.dialCode + data.phone.replace(/\s/g, "") ?? "",

    payment: {
      type: data.payment,
      cardInfo,
    },

    invoiceAddress,
    createAccount: data.createAccount,
  };
};
