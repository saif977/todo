import { useState } from "react";
import classes from "./Todo.module.css";

import { useDispatch, useSelector } from "react-redux";

import TodoElement from "../TodoElement/TodoElement";
import InputTodo from "../InputTodo/InputTodo";

const Todo = () => {
  const [createTask, setCreateTask] = useState(false);
  const tasks = useSelector((state) => state.todo.todoList);

  console.log(tasks);
  const AllTodos = tasks.map((task, index) => {
    return <TodoElement key={index} id={index} task={task} />;
  });
  console.log(tasks.length);

  return (
    <div className={classes.TodoContainer}>
      <div className={classes.TodoHeader}>
        <span className={classes.TodoHeaderText}>My Tasks</span>
      </div>
      <div className={classes.TasksContainer} onClick={()=>{setCreateTask(false)}} >{tasks.length?AllTodos:<div className={classes.Empty}>No tasks found</div>}</div>
      {createTask ? (
        <InputTodo createTask={createTask} setCreateTask={setCreateTask} />
      ) : null}

      <div
        className={classes.CreateTask}
        onClick={() => {
          setCreateTask(!createTask);
        }}
      >
        create task
      </div>
    </div>
  );
};

export default Todo;
