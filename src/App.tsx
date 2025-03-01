import { useState } from "react";
import PaymentForm from "./components/PaymentForm";
import { formatCurrency } from "./utils/NumberFormatter";
import { currencies, products } from "./utils/products";

const App = () => {
  const [productsState, setProductsState] = useState(products);
  const [currency, setCurrency] = useState(currencies[0]);

  const handleAddProduct = () => {
    const newProduct = {
      id: (productsState.length + 1).toString(),
      name: "New Product",
      price: Math.floor(Math.random() * 1000 + 1),
      currency: "NGN",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    };
    setProductsState([...productsState, newProduct]);
  };

  const handleRemoveProduct = (id: string) => {
    setProductsState(productsState.filter((product) => product.id !== id));
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
    productsState.forEach((product) => {
      product.currency = e.target.value;
    });
    setProductsState([...productsState]);
  };
  return (
    <main className="site-main  site-section">
      <div className="wrapper grid lg:grid-cols-5">
        <section className="site-section lg:col-span-2">
          <div className="wrapper">
            <div className="section-header mb-8">
              <h1 className="text-4xl font-bold"> Pay Stores</h1>
              <p>Pay with crypto</p>
            </div>
            <ul className="product-list flex flex-col gap-6">
              {productsState.map((product) => (
                <li
                  key={product.id}
                  className="product-item card flex flex-wrap gap-4"
                >
                  <div className="product-image w-20 h-20">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="product-info grow">
                    <div className="flex w-full justify-between items-center gap-4">
                      <h2 className="text-2xl font-bold">{product.name}</h2>
                      <button
                        className="btn danger sm"
                        onClick={() => handleRemoveProduct(product.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 icon"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                    <p>
                      {formatCurrency(product.price, {
                        currency: product.currency,
                      })}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="py-4">
              <button className="btn primary" onClick={handleAddProduct}>
                Add Product
              </button>
            </div>
          </div>
        </section>
        <section className="site-section lg:col-span-3">
          <div className="wrapper">
            <div className="section-header mb-8">
              <div className="flex justify-between items-center gap-8">
                <h1>Checkout</h1>
                <select
                  className="form-input w-fit"
                  value={currency}
                  onChange={handleCurrencyChange}
                >
                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
              <p>Fill the form to pay</p>
            </div>
            <div>
              <PaymentForm
                amount={productsState
                  .map((p) => p.price)
                  .reduce((a, b) => a + b)}
                currency={currency}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default App;
