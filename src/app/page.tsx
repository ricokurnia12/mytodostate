// Home.js
'use client'
import React,{useState} from 'react';
import store from '@/redux/store';
import { useDispatch,useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo, finishTodo } from '@/redux/actions/todoActions';
import InputTodo from "./component/InputTodo";
import ListDone from "./component/ListDone";
import ListTodo from "./component/ListTodo";

export default function Home() {
  const [inputTodo,setInputTodo]= useState<string | undefined>()
  const dispatch = useDispatch()
  const handleAddTodo = ()=>{
dispatch(addTodo(inputTodo))
  }
  const todoLists = useSelector(state=>state.todoLists);

  
  const taskDone = useSelector(state => state.taskDone);
  return (
   
      <main className="flex min-h-screen flex-col items-center justify-start gap-4 p-24">
      <InputTodo submit={handleAddTodo} inputChange={(e)=>setInputTodo(e.target.value)} />
      <div className="grid grid-cols-12 w-full gap-4">
        <ListTodo
          data={todoLists}
          handleDelete={(index) => dispatch(deleteTodo(index))}
          handleEdit={(index, value) => dispatch(editTodo(index, value))}
          handleDone={(index) => dispatch(finishTodo(index))}
        />
        <ListDone data={taskDone} />
      </div>
    </main>

  );
}


