
const AppleBasket = ({appleCount,basketName}) => {
  return (
    <div className="basket-1">
       <h1>
        <span>{appleCount}</span> apple
       </h1>
       <p>{basketName}</p>
    </div>
  )
}

export default AppleBasket