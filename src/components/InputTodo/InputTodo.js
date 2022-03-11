import React, { useState } from "react";
import classes from "./InputTodo.module.css";

import { useDispatch, useSelector } from "react-redux";

import * as todoActionsTypes from "../../redux/todo/todoActions";


const InputTodo = ({createTask,setCreateTask}) => {

  const [todoBody, setTodoBody] = useState(null);
  const dispatch = useDispatch();

  const add = () => {
      if ( !todoBody) {
      alert("please enter [About] and [Todo]");
      return;
    }
    dispatch(todoActionsTypes.todoAdd({ todoBody }));
    setCreateTask(!createTask);
};

 
  return (
    <div className={classes.InputTodoContainer}>
      <div>
        <input
          type="text"
          className={classes.Input}
          placeholder="Todo"
          onChange={(e) => {
            setTodoBody(e.target.value);
          }}
          id="todoBody"
        />
      </div>
      <button
      className={classes.AddButton}
        onClick={() => {
          add();
        }}
      >
        Add
      </button>
    </div>
  );
};

export default InputTodo;
