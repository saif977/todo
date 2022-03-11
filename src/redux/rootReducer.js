import {combineReducers} from "redux";

import todoReducer from "./todo/todoReducer";
import userReducer from "./user/userReducer";

const rootReducer=combineReducers({
    userData:userReducer,
    todo:todoReducer
})

export default rootReducer;