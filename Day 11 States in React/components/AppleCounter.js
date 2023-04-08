import Button from "./Button";
import leftArrow from "../assets/images/arrow.png";
import rightArrow from "../assets/images/right-arrow.png";
import AppleBasket from "./AppleBasket";
import "./AppleCounter.css";
import { createRoot } from "react-dom/client";
import { useState } from "react";


//impretive programming means we have to update our dom by our self
//Declaritive programming means we don't need to change dom


const AppleCounter = () => {
  const totalAppleCount = 10;
  const [rightAppleCount,setRightAppleCount] = useState(0);
  const [leftAppleCount,setLeftAppleCount] = useState(totalAppleCount-rightAppleCount);
  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      setRightAppleCount(rightAppleCount - 1);
      setLeftAppleCount(leftAppleCount+1)
    }
  };

  const rightClickHandler = () => {
    if (leftAppleCount > 0) {
      setLeftAppleCount(leftAppleCount-1)
      setRightAppleCount(rightAppleCount + 1);
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
