// reducers.js
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  FINISH_TODO,
} from "@/redux/actions/actionTypes";

const initialState = {
  todoLists: [] as string[],
  taskDone: [] as string[],
};

const rootReducer = (state = initialState, action: any) => {
  console.log(state.todoLists);
  console.log(action.type);

  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoLists: [...state.todoLists, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todoLists: state.todoLists.filter(
          (_, index) => index !== action.payload
        ),
      };
    case EDIT_TODO:
      return {
        ...state,
        todoLists: state.todoLists.map((todo, index) =>
          index === action.payload.index ? action.payload.value : todo
        ),
      };
    case FINISH_TODO:
      return {
        ...state,
        taskDone: [...state.taskDone, state.todoLists[action.payload]],
        todoLists: state.todoLists.filter(
          (_, index) => index !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
