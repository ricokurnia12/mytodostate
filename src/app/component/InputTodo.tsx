'use client'
import React ,{useState}from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '@/redux/actions/todoActions';

const InputTodo = () => {
  const dispatch= useDispatch()
  const [inputTodo,setInputTodo]= useState<string | undefined>()
  const handleAddTodo = ()=>{
    dispatch(addTodo(inputTodo))
      }
  return (
    <div className="flex items-center justify-center w-full">
      <input
        onChange={(e)=>setInputTodo(e.target.value)}
        className="h-12 w-full  px-4 me-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        type="text"
        placeholder="Large input"
      />
      <button
        onClick={handleAddTodo}
        className="h-12 px-6 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
      >
        Submit
      </button>
    </div>
  );
};

export default InputTodo;
