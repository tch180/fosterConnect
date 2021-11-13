import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AdminContext from '../context/Admin/adminContext'

export const DashboardRoute = ({ component: Component, ...rest }) => {
  const adminContext = useContext(AdminContext); 
  const { isAdmin,isAuthenticated, loading} = adminContext

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !isAdmin && !loading ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default DashboardRoute;
