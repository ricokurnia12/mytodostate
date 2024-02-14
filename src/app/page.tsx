// Home.js
'use client'
import React,{useState} from 'react';
import store from '@/redux/store';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, editTodo, finishTodo } from '@/redux/actions/todoActions';
import InputTodo from "./component/InputTodo";
import ListDone from "./component/ListDone";
import ListTodo from "./component/ListTodo";

function Home({ todoLists, taskDone, addTodo, deleteTodo, editTodo, finishTodo }) {
  const [inputTodo,setInputTodo]= useState<string | undefined>()
  return (
   
      <main className="flex min-h-screen flex-col items-center justify-start gap-4 p-24">
      <InputTodo  submit={() => addTodo(inputTodo)}  inputChange={(e)=>setInputTodo(e.target.value)} />
      <div className="grid grid-cols-12 w-full gap-4">
        <ListTodo
          data={todoLists}
          handleDelete={(index) => deleteTodo(index)}
          handleEdit={(index, value) => editTodo(index, value)}
          handleDone={(index) => finishTodo(index)}
        />
        <ListDone data={taskDone} />
      </div>
    </main>

  );
}

const mapStateToProps = (state) => ({

  
  todoLists: state.todoLists,
  taskDone: state.taskDone,
});

const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  editTodo,
  finishTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
