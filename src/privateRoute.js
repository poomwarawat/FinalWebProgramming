import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            localStorage.getItem('key') ? <Component {...props} /> : <Redirect to="/" />
        )} />
    )
}

export default PrivateRoute