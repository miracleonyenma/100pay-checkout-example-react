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
                  <div className="product-info">
                    <h2 className="text-2xl font-bold">{product.name}</h2>
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
                amount={products.map((p) => p.price).reduce((a, b) => a + b)}
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
