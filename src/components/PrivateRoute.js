import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ChefsDashbaord from './ChefsDashboard';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route { ...rest } render={() => {
      if (localStorage.getItem('token')) {
        return <ChefsDashbaord />
      } else {
        return <Redirect to="/" />
      }
    }} />
  );
};

export default PrivateRoute;