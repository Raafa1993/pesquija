import React from "react";
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from "react-router-dom";

import { useAuth } from "../hooks/Auth";

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
                pathname: isPrivate ? "/" : "/pesquisa",
              state: { form: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;


{/*Login mandaria para a home mas por enquanto está indo direto para a pesquisa <Redirect
  to={{
    pathname: isPrivate ? "/" : "/home",
    state: { form: location },
  }}
/> */}