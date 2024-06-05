import { useState } from "react"
export default  function Botton(){
    const [count, setCount]= useState(0)
  function handelClick (){
    setCount( a => a + 1)
  }
    return(
        <>
        <button onClick={handelClick}>
            Conuter {count}
        </button>
        </>
    )
}