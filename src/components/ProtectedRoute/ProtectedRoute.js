import React from 'react'
import {useSelector} from "react-redux"
import {Route,Redirect} from "react-router-dom";

const ProtectedRoute = ({component:Component,...rest}) => {
    const user=useSelector(state=>state.userData.user);
    console.log(user,Component);
  return (
      <Route {...rest} render={
          ()=>user?<Component/>:<Redirect to="/" />
      } />
  )
}

export default ProtectedRoute