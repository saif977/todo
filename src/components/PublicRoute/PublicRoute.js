import React, { Component } from 'react'
import {Route} from "react-router-dom";

const PublicRoute = ({component:Component,...rest}) => {
  return (
    <Route {...rest} render={()=><Component />} />
  )
}

export default PublicRoute