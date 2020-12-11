import React from 'react';
import {
  Route as ReactDOMRoute,
  Redirect,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...restProps
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...restProps}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
            <Redirect
              to={{
                pathname: isPrivate ? '/login' : '/user/myaccount',
                state: { from: location },
              }}
            />
          );
      }}
    />
  );
};

export default Route;
