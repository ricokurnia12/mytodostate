import React, { useState, useRef, useEffect } from 'react';

interface ListTodoProps {
  data: any;
  handleDelete: (i: number) => void;
  handleEdit: (i: number, value: string) => void;
handleDone:(i:number)=>void
  }

const ListTodo: React.FC<ListTodoProps> = ({ data, handleDelete, handleEdit,handleDone }) => {
  const [editable, setEditable] = useState<number | undefined>();
  const [updateValue, setUpdateValue] = useState<string | undefined>();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEditable = (i: number) => {
    setEditable(i);
  };

  useEffect(() => {
    if (editable !== undefined && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editable]);

  return (
    <div className="col-span-8 border rounded-sm shadow-sm bg-white bg-opacity-25 w-full p-4">
      <h1 className="text-center text-2xl">Todolist anda</h1>
      {data.length < 1 ? (
        <h1>Belum ada todo</h1>
      ) : (
        data.map((el: any, i: number) => (
          <div key={i} className="mb-2 bg-white text-gray-800 w-11/12 mx-auto flex items-center justify-between shadow-sm rounded-sm px-4">
            <input
              className={`${i === editable ? 'hidden' : 'block'}`}
              type='text'
              disabled
              value={el}
            />
            <input
              ref={i === editable ? inputRef : null}
              onChange={(e) => setUpdateValue(e.target.value)}
              className={`${i === editable ? 'block' : 'hidden'}`}
              type='text'
              defaultValue={el}
            />
            <div>
              <button
                onClick={() => {
                  handleEdit(i, updateValue || '');
                  setEditable(undefined);
                }}
                className={`${i === editable ? '' : 'hidden'} h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800`}
              >
                Update
              </button>
              <button onClick={()=>handleDone(i)} className="h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                Done
              </button>
              <button
                onClick={() => handleEditable(i)}
                className="h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(i)}
                className="h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
              >
                Hapus
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ListTodo;
