const apiVersion = process.env.SHOPIFY_API_VERSION;
const domain = process.env.SHOPIFY_DOMAIN;

const adminApiKey = process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN;

async function shopifyQuery(query, data) {
  const URL = `https://${domain}/admin/api/${apiVersion}/graphql.json`;

  const variables = data ?? null;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Access-Token": adminApiKey,
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "no-cors",
    },
    body: JSON.stringify({ query, variables }),
  };
  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });

    return data;
  } catch (error) {
    throw new Error("Query not fetched", error);
  }
}

export async function getOrder(orderId) {
  const query = `{
        order(id: "gid://shopify/Order/${orderId}") {
          id
          billingAddress {
            address1
            address2
            city
            company
            country
            firstName
            id
            lastName
            phone
            province
            provinceCode
            zip
          }
          createdAt
          confirmed
          closedAt
          currencyCode
          displayAddress {
            address1
            address2
            city
            company
            country
            firstName
            id
            lastName
            phone
            province
            provinceCode
            zip
          }
          displayFulfillmentStatus
          displayFinancialStatus
          estimatedTaxes
          fulfillable
          id
          fullyPaid
          lineItems(first: 50) {
            edges {
              node {
                id
                name
                image {
                  url
                  altText
                }
                discountedUnitPriceSet {
                  shopMoney {
                    amount
                    currencyCode
                  }
                }
                originalUnitPriceSet {
                  shopMoney {
                    amount
                    currencyCode
                  }
                }
                taxLines {
                  title
                  ratePercentage
                  priceSet {
                    shopMoney {
                      amount
                      currencyCode
                    }
                  }
                }
                quantity
          
                title
        
                originalTotalSet {
                  shopMoney {
                    amount
                    currencyCode
                  }
                }
                discountedTotalSet {
                  shopMoney {
                    amount
                    currencyCode
                  }
                }
                variantTitle
              }
            }
          }
          processedAt
          cancelledAt
          shippingAddress {
            address1
            address2
            city
            company
            country
            firstName
            id
            lastName
            phone
            province
            provinceCode
            zip
          }
          subtotalPriceSet {
            shopMoney {
              amount
            }
          }
          totalShippingPriceSet {
            shopMoney {
              amount
            }
          }
          totalTaxSet {
            shopMoney {
              amount
            }
          }
          totalPriceSet {
            shopMoney {
              amount
            }
          }
          originalTotalPriceSet {
            shopMoney {
              amount
            }
          }
          unpaid
          updatedAt
          name
        }
      }}`;

  const response = await shopifyQuery(query).catch((error) => {
    console.error("lib/ShopifyAdmin error - ", error);
  });
  const result = response?.data?.order || {};

  return result;
}

export async function createDraftOrder(data) {
  const mutation = `
    mutation draftOrderCreate($input: DraftOrderInput!) {
       draftOrderCreate(input: $input) {
         draftOrder {
           id
           order {
             id
           }
           status  
         }
         userErrors {
           field
           message
         }
       },
   }
 `;

  const response = await shopifyQuery(mutation, data).catch((error) => {
    console.error("lib/ShopifyAdmin error - ", error);
  });
  const result = response || {};
  return result;
}

export async function updateDraftOrder(id, data) {
  const mutation = `
    mutation draftOrderUpdate($id: ID!, $input: DraftOrderInput!) {
       draftOrderUpdate(id: $id, input: $input) {
         draftOrder {
           customAttributes
         }
         userErrors {
           field
           message
         }
       },
   }
 `;

  const response = await shopifyQuery(mutation, data).catch((error) => {
    console.error("lib/ShopifyAdmin error - ", error);
  });
  const result = response || {};
  return result;
}

export async function completeDraftOrder(id) {
  const mutation = `
    mutation draftOrderComplete($id: ID!){
        draftOrderComplete(id: $id){
            draftOrder{

            }
            userErrors{
                field
                message
            }
        }
    }
    `;

  const response = await shopifyQuery(mutation, id).catch((error) => {
    console.error("lib/ShopifyAdmin error - ", error);
  });
  const result = response || {};
  return result;
}

export function formatDraftOrderInput(validatedItems, user) {
  //   const discount = parseFloat(customer[0]?.discount * 100);

  const lineItems = validatedItems.map((item) => {
    return {
      variantId: item.id,
      quantity: item.quantity,
      // appliedDiscount: {
      //   title: "Wholesale",
      //   value: discount,
      //   valueType: "PERCENTAGE",
      // },
    };
  });

  const input = {
    input: {
      customerId: user?.shopifyId,
      email: user?.customerEmail ? user?.customerEmail : "",
      lineItems: lineItems,
      note: user?.note ? user.note : "",

      shippingAddress: {
        firstName: user?.firstName ? user?.firstName : "",
        lastName: user?.lastName ? user?.lastName : "",
        phone: user?.phoneNumberDelivery ? user?.phoneNumberDelivery : "",
        address1: user?.address1Delivery ? user?.address1Delivery : "",
        address2: user?.address2Delivery ? user?.address2Delivery : "",
        zip: user?.postalCodeDelivery ? user?.postalCodeDelivery : "",
        city: user?.cityDelivery ? user.cityDelivery : "",
        provinceCode: user?.countyDelivery ? user?.countyDelivery : "",
        country: user?.countryDeliveryAddress
          ? user?.countryDeliveryAddress
          : "",
        countryCode: "NO",
        company: user?.company ? user?.company : "",
      },
      billingAddress: {
        firstName: user?.firstName ? user?.firstName : "",
        lastName: user?.lastName ? user?.lastName : "",
        phone: user?.phoneNumberDeliveryAddress
          ? user?.phoneNumberDeliveryAddress
          : "",
        address1: user?.address1Invoice ? user?.address1Invoice : "",
        address2: user?.address2Invoice ? user?.address2Invoice : "",
        zip: user?.postalCodeInvoice ? user?.postalCodeInvoice : "",
        city: user.cityInvoice ? user.cityInvoice : "",
        provinceCode: user?.countyInvoiceAddress ? user?.countyInvoice : "",
        country: user?.countryInvoiceAddress ? user?.countryInvoiceAddress : "",
        countryCode: "NO",
        company: user?.company ? user?.company : "",
      },

      //   paymentTerms: {
      //     paymentTermsTemplateId: "gid://shopify/PaymentTermsTemplate/3",
      //     paymentSchedules: {
      //       dueAt: invoiceDateToISOString,
      //       issuedAt: todayToISOString,
      //     },
      //   },
      sourceName: "",
      tags: formatTags(user),
      taxExempt: false,
      useCustomerDefaultAddress: false,
    },
  };

  return input;
}

// *Roadmap
// Lage draft order når man trykker på fullfør bestilling
// Når man får callback, oppdatere draftOrder med betalingsinfo
// Når man har gjort det, fullfør draftOrder AKA gjøre om til ekte ordre
