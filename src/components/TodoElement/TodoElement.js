import React from 'react'
import classes from "./TodoElement.module.css";

import * as todoActions from "../../redux/todo/todoActions";
import {useDispatch} from "react-redux"

const TodoElement = ({task,id}) => {
    const dispatch=useDispatch();
    const remove=(id)=>{
        dispatch(todoActions.todoRemove(id));
    }
  return (
    <div className={classes.TodoElementContainer}>
        <div>{task.todoBody}</div>
        <div className={classes.TodoElementStatus}>
            <div className={classes.Remove} onClick={()=>{remove(id)}} >
                Remove
            </div>
        </div>
    </div>
  )
}

export default TodoElement