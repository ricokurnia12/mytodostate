'use client'
import { log } from "console";
import InputTodo from "./component/InputTodo";
import ListDone from "./component/ListDone";
import ListTodo from "./component/ListTodo";
import { useState,useEffect } from "react";

export default function Home() {
  const [myTodoLists, setMyTodoList] = useState<string[]>([]);

  const [inputTodo,setInputTodo] = useState('')
  const [myTaskDone,setMyTaskDone] = useState<any>([])

  const handleAddTodo=()=>{
setMyTodoList([...myTodoLists, inputTodo])
  }

  const handleDelTodo = (i: number) => {
    const updatedTodoLists = myTodoLists.filter((_, index) => index !== i);
    setMyTodoList(updatedTodoLists);
  };
  
const handleEditTodo = (i:number,value:string)=>{
myTodoLists[i]=value
console.log(myTodoLists);

}

const handleFinishTodo = (i:number)=>{
  setMyTaskDone([...myTaskDone,myTodoLists[i]])
  const updatedTodoLists = myTodoLists.filter((_, index) => index !== i);
  setMyTodoList(updatedTodoLists);
}

  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-4 p-24">
    <InputTodo  inputChange={(e)=>setInputTodo(e.target.value)} submit={handleAddTodo}/>
<div className="grid grid-cols-12 w-full gap-4">


<ListTodo handleDone={handleFinishTodo} handleEdit={handleEditTodo} handleDelete={handleDelTodo} data={myTodoLists}/>
<ListDone data={myTaskDone}/>
</div>
    </main>
  );
}
