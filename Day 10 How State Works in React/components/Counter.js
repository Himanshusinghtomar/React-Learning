import { useState } from "react";


const Counter = () => {
    const [count , setCount] = useState(0)
    // const myStateArray = useState(0);
    // const count = myStateArray[0];
    // const setCount = myStateArray[1]
  return (
    <div style={{textAlign: 'center'}}>
        <h1>{count}</h1>
        <button onClick={() => {
            setCount(count + 1)
        }}>Increase Counter</button>
    </div>
  )
}

export default Counter;