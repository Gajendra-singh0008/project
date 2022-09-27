import React, { useState } from 'react'

const Radiobutton = ({data}) => {
  const[value,setValue]=useState()
  return (
    <>
    <form onChange={(e)=>{setValue(data.filter((d)=>d.name===e.target.value))}}>
    <h2>Radiobutton</h2>
    <p>Please Select Person</p>
    {
      data.map((d)=>(
        <div>
        <input type='radio'name='name' value={d.name} id='d.name' />
        <label for= {d.name}>{d.name}</label>
        </div>
      ))
    }
  {
    value && (
      <p>
        {value[0].name} is {value[0].age} years old
      </p>
    )
  }
    </form>
    </>
  )
}

export default Radiobutton