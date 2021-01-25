import React, { useState } from 'react'

function Example7 () {
  const [xiaohong, setXiaoHong] = useState('小红在等待')
  const [zhiling, setZhiLing] = useState('志玲在等待')
  return (
    <>
        <button onClick={()=>{setXiaoHong(new Date().getTime())}}>
            小红
        </button>
        <button onClick={()=>{setXiaoHong(new Date().getTime()+'志玲在等待')}}>
            玲
        </button>
		<ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
    </>
  )
}

function ChildComponent({name, children}){
	function changeXiaohong() {
    console.log('小红像我们走来了');
    return name + ',小红像我们走来了'
  }
  const action  = changeXiaohong(name)
	return (
		<>
			<div>{action}</div>
			<div>{children}</div>
		</>
	)
}


export default Example7