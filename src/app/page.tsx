// Home.js
import React from 'react';

import InputTodo from "./component/InputTodo";
import ListDone from "./component/ListDone";
import ListTodo from "./component/ListTodo";

export default function Home() {




  

  return (
   
      <main className="flex min-h-screen flex-col items-center justify-start gap-4 p-24">
      <InputTodo />
      <div className="grid grid-cols-12 w-full gap-4">
        <ListTodo
    

        />
        <ListDone  />
      </div>
    </main>

  );
}


