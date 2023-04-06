import Button from "./Button";
import leftArrow from "../assets/images/arrow.png";
import rightArrow from "../assets/images/right-arrow.png";
import AppleBasket from "./AppleBasket";
import "./AppleCounter.css";
import { createRoot } from "react-dom/client";


const root = createRoot(document.querySelector("#root"));

const totalAppleCount = 10;
let rightAppleCount = 0;
let leftAppleCount = totalAppleCount - rightAppleCount;
const AppleCounter = () => {
  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      rightAppleCount--;
      leftAppleCount++;
      root.render(<AppleCounter/>)
    }
  };

  const rightClickHandler = () => {
    if (leftAppleCount > 0) {
      leftAppleCount--;
      rightAppleCount++;
      root.render(<AppleCounter/>)
    }
    
  };
  return (
    <>
      <section>
        <AppleBasket appleCount={leftAppleCount} basketName="Basket1" />
        <Button
          imageUrl={leftArrow}
          title="Left Arrow"
          clickHandler={leftClickHandler}
        />
        <Button
          imageUrl={rightArrow}
          title="Right Arrow"
          clickHandler={rightClickHandler}
        />
        <AppleBasket appleCount={rightAppleCount} basketName="Basket2" />
      </section>
      <p style={{ textAlign: "center", marginTop: "32px" }}>
        <button
          onClick={() => {
            root.render(<AppleCounter/>)
          }}
        >
          Re-Render
        </button>
      </p>
    </>
  );
};

export default AppleCounter;
