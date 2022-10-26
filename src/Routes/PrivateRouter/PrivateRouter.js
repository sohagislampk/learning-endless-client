import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }

    return children;


};

export default PrivateRouter;