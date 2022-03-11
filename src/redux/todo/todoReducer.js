import * as todoTypes from "./todoTypes"

const initialTodoState={
    todoList:[]
}

const todoReducer=(prevState=initialTodoState,action)=>{
    switch(action.type)
    {
        case todoTypes.TODO_ADD_ITEMS : {
            const newTodoList=[...prevState.todoList];
            newTodoList.push(action.payLoad);
            return {
                todoList: newTodoList
            }
        };
        case todoTypes.TODO_REMOVE_ITEMS:{
            let newTodoList=[...prevState.todoList];
            newTodoList=newTodoList.filter((todo,index)=>{
                return +index!==+action.payLoad;
            })
            return {
                todoList:newTodoList
            }
        };
        default : return {...prevState};
    }
}

export default todoReducer;