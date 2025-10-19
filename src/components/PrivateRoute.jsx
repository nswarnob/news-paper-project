import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../pages/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading}=use(AuthContext)

 const location = useLocation(user)

    if(loading){
        return <Loading></Loading>;
    }
    if(user && user?.email){
      return children;
    }
    return <Navigate state={location.pathname} to={'/category/1'} ></Navigate>
}

export default PrivateRoute;