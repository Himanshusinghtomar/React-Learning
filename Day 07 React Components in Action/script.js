import { createRoot } from "react-dom/client";
import "./style.css";
import React from "react";

function Card(props) {
  const { title, image, price, brand } = props;

  return (
    <div className="card">
      <img src={image} />
      <div className="card-data">
        <h2>{title}</h2>
        <h4>{brand}</h4>
        <p>${price}</p>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return (
            <Card
              key={product.id}
              title={product.title}
              image={product.thumbnail}
              brand={product.brand}
              price={product.price}
            />
          );
        })}
      </div>
    );
  });

//react component is a element which type is function and it returns react jsx
//
// root.render({
//   $$typeof: Symbol.for('react.element'),
//   type: Card,
//   ref: null,
//   props:{
// title: "Hello",
// key: 1,
// image: "url",
// price: 12345,
// brand: "Himasnhu"
//   }
// })

// root.render(React.createElement(Card, {

//   title: "Hello",
//   key: 1,
//   image: "url",
//   price: 12345,
//   brand: "Himasnhu"

// }))
