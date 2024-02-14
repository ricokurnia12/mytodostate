import React from 'react';

interface InputTodoProps {
  submit: () => void;
  inputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputTodo: React.FC<InputTodoProps> = ({ submit, inputChange }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <input
        onChange={inputChange}
        className="h-12 w-full  px-4 me-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        type="text"
        placeholder="Large input"
      />
      <button
        onClick={submit}
        className="h-12 px-6 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
      >
        Submit
      </button>
    </div>
  );
};

export default InputTodo;
