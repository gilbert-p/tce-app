import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../FirebaseAuth";

const PrivateRoute = ({ component: RouteComponent }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      //   {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <h1>You're Logged In</h1>
        ) : (
          <h1>You're not logged in</h1>
        )
      }
    />
  );
};

export default PrivateRoute;
