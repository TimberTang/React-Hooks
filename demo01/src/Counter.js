import React, { useState, Component } from 'react'


function Counter() {
  let [count, setCount] = useState(0)
  return (
    <div>
      <p>you click me {count} times</p>
      <button onClick={() => {setCount(count+1)}}>Click me</button>
    </div>
  )
}

// export default Counter

class Example extends Component {
    render() {
      return (
        <p>aaa</p>
      )
    }
}
export default Example
