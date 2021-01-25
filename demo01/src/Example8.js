import React, { useRef, useState, useEffect } from 'react';

function Example8() {
  const inputEl = useRef(null)
  const buttonClick = () => {
    inputEl.current.value = 'timbertang'
    console.log(inputEl);
  }
  const [text , setText] = useState('timber')
  const textRef = useRef(null)
  useEffect(() =>  {
    textRef.current = text
    console.log('textRef.current: ', textRef.current);
  })
  return (
    <>
      <input ref={inputEl} type='text'/>
      <button onClick={buttonClick}>在input上展示文字</button>
      <br /><br />
      <input value = {text} onChange={(e) => {
        setText(e.target.value)
      }}/>
    </>
  )
}
export default Example8