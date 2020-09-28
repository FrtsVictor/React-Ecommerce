import React from 'react';
import {
  Route as ReactDOMRoute, Redirect,
} from 'react-router-dom';

import { useAuth } from '../hook/auth';

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();

  return (

    <ReactDOMRoute
      {...rest}
      render={({ location }) => (isPrivate === !!user ? (
        <Component />
      ) : (
        <Redirect to={{
          pathname: isPrivate ? '/' : '/produto',
          state: { from: location },
        }}
        />
      ))}
    />
  );
};

export default Route;
