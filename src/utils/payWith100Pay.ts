import { shop100Pay } from "@100pay-hq/checkout";
const PAY_API_KEY = import.meta.env.VITE_100PAY_API_KEY;
const payWith100Pay = (data: { [key: string]: string }) => {
  shop100Pay.setup({
    ref_id: "" + Math.floor(Math.random() * 1000000000 + 1),
    api_key: PAY_API_KEY,
    customer: {
      name: data.name,
      phone: data.phone,
      email: data.email,
    },
    billing: {
      amount: parseFloat(data.amount),
      currency: data.currency, // or any other currency supported by 100pay
      description: "Test Payment",
      country: "USA",
      vat: 10, //optional
      pricing_type: "fixed_price", // or partial
    },
    metadata: {
      is_approved: "yes",
      order_id: "OR2", // optional
    },
    call_back_url: "http://localhost:8000/verifyorder/",
    onClose: () => {
      alert("You just closed the crypto payment modal.");
    },
    onPayment: (reference) => {
      alert(`New Payment detected with reference ${reference}`);
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
