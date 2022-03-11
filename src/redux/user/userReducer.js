import * as userTypes from "./userTypes";

const initialUserState={
    login:false,
    loader:false,
    user:null
}

const userReducer=(prevState=initialUserState,action)=>{
    switch(action.type)
    {
        case  userTypes.USER_LOGIN_REQUEST: return {
            ...prevState,
            loader:true
        };
        case userTypes.USER_LOGIN_SUCCESS: return {
            ...prevState,
            login:true,
            loader:false,
            user:action.payLoad
        }
        default: return {...prevState}
    }
}

export default userReducer;