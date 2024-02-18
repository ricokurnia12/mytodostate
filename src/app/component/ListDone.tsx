'use client'
import React from 'react'
import { useSelector } from 'react-redux'

const ListDone = () => {
  const data = useSelector(state => state.taskDone);
  return (
    <div className="col-span-4 border rounded-sm shadow-sm bg-white bg-opacity-25  w-full p-4">
<h1 className="text-center text-2xl">Todolist selesai</h1>
{data.length < 1 ? <p>belum ada tugas selesai </p> : data.map((el:any,i:any)=>{
    return(
      
<div key={i} className="bg-green-400 text-gray-800 w-11/12 mx-auto flex items-center justify-between shadow-sm rounded-sm px-4">

<p> {el}</p>

</div>
    )
} )}

</div>
  )
}

export default ListDone