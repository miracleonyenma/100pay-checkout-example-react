import { shop100Pay } from "@100pay-hq/checkout";
const PAY_API_KEY = import.meta.env.VITE_100PAY_API_KEY;
const payWith100Pay = ({
  name,
  email,
  phone,
  currency,
  amount,
}: {
  name: string;
  email: string;
  phone: string;
  currency: string;
  amount: number;
}) => {
  shop100Pay.setup({
    ref_id: "" + Math.floor(Math.random() * 1000000000 + 1),
    api_key: PAY_API_KEY,
    customer: {
      user_id: "1", // optional
      name: name,
      phone,
      email,
    },
    billing: {
      amount: amount,
      currency: currency, // or any other currency supported by 100pay
      description: "Test Payment",
      country: "USA",
      vat: 10, //optional
      pricing_type: "fixed_price", // or partial
    },
    metadata: {
      is_approved: "yes",
      order_id: "OR2", // optional
      charge_ref: "REF", // optionalm, you can add more fields
    },
    call_back_url: "http://localhost:8000/verifyorder/",
    onClose: () => {
      alert("You just closed the crypto payment modal.");
    },
    onPayment: (reference) => {
      alert(`New Payment detected with reference ${reference}`);
      /**
       * @dev ⚠️ never give value to the user because you received a callback.
       * Always verify payments by sending a get request to 100Pay Get Crypto Charge endpoint on your backend.
       * We have written a well detailed article to guide you on how to do this. Check out the link below.
       * 👉 https://100pay.co/blog/how-to-verify-crypto-payments-on-100-pay
       * */
    },
    onError: (error) => {
      // handle your errors, mostly caused by a broken internet connection.
      console.log(error);
      alert("Sorry something went wrong pls try again.");
    },
    callback: (response) => {
      console.log(response);
    },
  });
};

export { payWith100Pay };
