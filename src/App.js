import React, { useState } from 'react'
import  Dropdown from './Component  ass/Dropdown';
import Checkbox from './Component  ass/Checkbox';
import Radiobutton from './Component  ass/Radiobutton';
import './App.css'

const App = () => {
  const data=[
    {name:'max', age:'45'},
    {name:'raj', age:'35'},
    {name:'jai', age:'25'},
  ]

  const[count,setCount]=useState()
  const[counta,setCounta]=useState()
  const[countb,setCountb]=useState()
  return (
    <>
    <h2 className='new'>My First Project</h2>

    <div className='new'>
      <button className='btn0' onClick={()=>{setCount((prev)=>!prev)}}>Dropdown</button>
       <button className='btn1' onClick={()=>{setCounta((prev)=>!prev)}}>Checkbox</button>
       <button className='btn2' onClick={()=>{setCountb((prev)=>!prev)}}>Radiobutton</button>
    </div>
    
    {count && <Dropdown data={data}  />}
    {counta && <Checkbox data={data}  />}
    {countb && <Radiobutton data={data}  />}

    
    </>
  )
}

export default App