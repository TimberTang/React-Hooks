import React, { useState } from 'react'


function Counter() {
  let [count, setCount] = useState(0)
  return (
    <div>
      <p>you click me {count} times</p>
      <button onClick={() => {setCount(count+1)}}>Click me</button>
    </div>
  )
}

export default Counter