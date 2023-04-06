import Button from "./Button"
import leftArrow from '../assets/images/arrow.png'
import rightArrow from '../assets/images/right-arrow.png'
import AppleBasket from "./AppleBasket"

import './AppleCounter.css'

const AppleCounter = () => {
  return (
    <section>
        <AppleBasket appleCount={10} basketName="Basket1"/>
        <Button imageUrl={leftArrow} title="Left Arrow"/>
        <Button imageUrl={rightArrow} title="Right Arrow"/>
        <AppleBasket appleCount={0} basketName="Basket2"/>

    </section>
  )
}

export default AppleCounter