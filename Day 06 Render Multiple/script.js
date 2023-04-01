import { createRoot } from "react-dom/client";
import "./style.css";

function Card(key, title, img, price, brand) {
  return (
    <div className="card" key={key}>
      <img src={img} />
      <div className="card-data">
        <h2>{title}</h2>
        <h4>{brand}</h4>
        <p>${price}</p>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then((data) => {
//     console.log(data)
//     const container2 = data.products.map((product) => {

//        return Card(product.id,product.title,product.thumbnail,product.price,product.brand)

//     })

//     console.log(container2)
//     root.render(<div className="container">{container2}</div>)
// });

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return Card(
            product.id,
            product.title,
            product.thumbnail,
            product.brand,
            product.price
          );
        })}
      </div>
    );
  });
