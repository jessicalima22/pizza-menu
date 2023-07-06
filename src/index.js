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
  // const checkHour =
  //   (hourNow >= 18 && hourNow <= 23) || (hourNow >= 0 && hourNow <= 2)
  //     ? alert("Welcome! We're open! 😀🍕")
  //     : alert(`Sorry, we're closed... 😌 ${hourNow}`);

  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1 className="header">Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzas.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>

      <Order />
    </main>
  );
}

//Map creates a new Array, which for each doesnt do

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 3}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hourNow = new Date().getHours();
  const openHour = 18;
  const closeHour = 2;
  const isOpen = hourNow >= 18 || hourNow <= 2;
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online!</p>
          <button className="btn">Order</button>
        </div>
      )}
      {new Date().toLocaleTimeString()}, we're currently open{" "}
    </footer>
  );
}

function Order() {
  return <div className="footer"> {`conditional render`}</div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//strictmode carrega os componentes duas vezes para ser mais fácil encontrar bugs
//e o React verifica se estão sendo usada partes desatualizadas da API React.
//Render before 18
//React.render(<App />, document.getElementById('root'));
