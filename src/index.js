import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <h1>Hello REACT!!s!</h1>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
const hour = new Date().getHours();
const openHour = 1;
const closeHour = 22;
const isOpen = hour >= openHour && hour <= closeHour;
// const isOpen = hour >= openHour && hour <= closeHour;
console.log(isOpen);

function Header() {
  return (
    <header className="header">
      <h1>fast react pizza co.</h1>
    </header>
  );
}
function Menu() {
  return (
    isOpen && (
      <main className="menu">
        <h2>our menu</h2>
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      </main>
    )
  );

  function Pizza({ pizzaObj }) {
    return (
      <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <h3>{pizzaObj.name}</h3>
        <p> {pizzaObj.ingredients} </p>
        <span>{pizzaObj.soldOut ? "Sold out" : pizzaObj.price}</span>
      </li>
    );
  }
}
function Footer() {
  return (
    isOpen && (
      <footer className="footer">
        {new Date().toLocaleTimeString()} We're currently Open
      </footer>
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export default App;
