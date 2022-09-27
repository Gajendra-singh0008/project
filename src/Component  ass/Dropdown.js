import React, { useState } from 'react'

const Dropdown = ({data}) => {
  const[value,setValue]=useState(null)
  return (
    <>
    <h2>Dropdown</h2>
    <p>Please Select Person</p>
    <select onChange={(e)=>{setValue(data.filter((d)=>d.name===e.target.value))}}>
      <option>Select me</option>
      {
        data.map((d)=>(
          <option>{d.name}</option>
        ))
      }
    </select>

    {
      value && (
        <p>{value[0].name} is {value[0].age} years old</p>
      )
    }
    </>
  )
}

export default Dropdown