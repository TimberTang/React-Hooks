import React, { useState, useEffect, useCallback } from 'react'


function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  const onResize = useCallback(() =>  {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }, []) // 缓存方法
  useEffect(() => {
    window.addEventListener('resize', onResize,false)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, []) 
  return size
}

function Example9() {
  const size = useWinSize()
  return (
    <>
      <div>页面size: {size.width } * {size.height}</div>
    </>
  )
}

export default Example9

