import * as todoTypes from "./todoTypes";

export const todoAdd=(todoData)=>({type:todoTypes.TODO_ADD_ITEMS,payLoad:todoData});

export const todoRemove=(todoId)=>({type:todoTypes.TODO_REMOVE_ITEMS,payLoad:todoId});