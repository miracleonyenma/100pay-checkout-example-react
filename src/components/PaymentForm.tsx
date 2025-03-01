import { formatCurrency } from "../utils/NumberFormatter";
import { payWith100Pay } from "../utils/payWith100Pay";

const PaymentForm: React.FC<{ amount: number; currency: string }> = ({
  amount,
  currency,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    payWith100Pay({
      name,
      email,
      phone,
      currency,
      amount: amount.toString(),
    });
  };
  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <div className="wrapper flex flex-col gap-4">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone</label>
          <input
            className="form-input"
            type="tel"
            id="phone"
            name="phone"
            required
          />
        </div>

        <div className="input-group flex flex-col gap-2">
          <label htmlFor="amount">Amount</label>
          <span className="text-xl font-bold">
            {formatCurrency(amount, {
              currency,
              display: "both",
              symbolFirst: false,
            })}
          </span>
        </div>
        <div className="action-cont">
          <button className="btn primary" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;
