import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import Table from './Table'

function App() {
  const[data,setData]=useState([])

  const API ="https://fakestoreapi.com/products?limit=5"
 const fetchUser= async (url)=>{
    try {
      const res = await fetch(url)
      const data = await res.json()
       if(data.length>0){
        setData(data)
       }
    } catch (error) {
        console.error(error)

    }
 }
 
 useEffect(()=>{
   fetchUser(API)
  },[])
  
  return (
    <>
    <Table/>
    <br /><br /><br /><br /><br /> <br /><br /><br /><br /> <br /><br /><br /><br /><br /> <br /><br /><br /><br />
       {
        data.map((value,index)=>{
          const{price,title}=value
          return(
        <>
        <div key={index}>
        <span>{title}</span>
        <span>:{price}</span><br />
        </div>
        </>
          )
        })
       }
    </>
  )
}

export default App
