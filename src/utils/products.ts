const currencies = ["NGN", "USD", "EUR", "GBP"];

const products = [
  {
    id: "1",
    name: "T-Shirt",
    price: 100,
    currency: currencies[0],
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: "2",
    name: "Sneakers",
    price: 500,
    currency: currencies[0],
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    name: "Hat",
    price: 200,
    currency: currencies[0],
    image:
      "https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export { products, currencies };
