import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({
  component: Component,
  auth,
  requireAdmin = false,
  ...rest
}) {
  if (auth.pending) {
    return <div>Loading...</div>;
  }

  let valid = true;

  if (!auth.valid || (requireAdmin && !auth.user.isAdmin)) {
    valid = false;
  }

  return (
    <Route
      {...rest}
      render={props =>
        valid ? (
          <Component {...props.match.params} {...props} {...rest} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
}
