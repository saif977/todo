import * as userTypes from "./userTypes"

export const userLoginRequest=()=>({type:userTypes.USER_LOGIN_REQUEST});

export const userLoginSucces=(userData)=>({type:userTypes.USER_LOGIN_SUCCESS,payLoad:userData});
