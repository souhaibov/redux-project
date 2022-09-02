import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [
    {
      id: Math.random(),
      title: "todo item 1",
      description: "description 1",
      isDone: false,
    },
    {
      id: Math.random(),
      title: "todo item 2",
      description: "description 2",
      isDone: false,
    },
    {
      id: Math.random(),
      title: "todo item 3",
      description: "description 3",
      isDone: true,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.todoList.push(action.payload);  
    },
    deleteTask: (state, action) => {
      state.todoList=state.todoList.filter((t) => t.id !== action.payload.id);  
    },
    doneTask: (state, action) => {
     let i=state.todoList.findIndex((el) => el.id === action.payload.id);  
     state.todoList[i]={
      ...state.todoList[i], isDone:!state.todoList[i].isDone,
    };
    },
    editTask: (state, action) => {
      
     state.todoList = state.todoList.map((el)=>el.id === action.payload.id ? action.payload :el)
      //  let i=state.todoList.findIndex((el) => el.id === action.payload.id);  
      //  state.todoList[i]={
      //  title:action.payload.title,
      //  description:action.payload.description,
    //  };
     },
  },
});

// Action creators are generated for each case reducer function
export const { addTask , deleteTask , doneTask , editTask } = todoSlice.actions;

export default todoSlice.reducer;
