import React from 'react'
import {Route} from 'react-router-dom';
import fakeAuth from '../Auth';
import {Redirect} from 'react-router-dom'
export default function ProtectedRoute({component:Component,...rest}) {
    return (
        <Route {...rest} render={(props) => (
            fakeAuth.isAuthenticated === true
              ? <Component {...props} />
              : <Redirect to='/login' />
          )} />
    )
}
