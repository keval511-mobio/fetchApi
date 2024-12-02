 import React, { useState } from 'react'
 
import { Adding } from './action/Action'
import { useDispatch, useSelector } from 'react-redux'
 
 function Table() {
   
    
const dispatch = useDispatch()
const daata = useSelector((state)=> state.daata )

    const[data,setData]=useState( '')

const dataAdded=()=>{
    dispatch(Adding(data))
    setData("")
}
     
   return (
     <>
     <input type="text" name="" value={data} onChange={(e)=>setData(e.target.value)} id="" />
     <button onClick={dataAdded}>AddTodo</button>
{
    daata.map((value,index)=>{
        return(
            <ul key={index}>
                <li>{value}</li>
            </ul>
        )
    }) 
}
     
     </>
   )
 }
 
 export default Table