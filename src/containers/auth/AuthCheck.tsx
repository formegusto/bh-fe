import React from "react";
import { ConnectedProps } from "react-redux";
import client from "src/api/client";
import AuthConnector from "src/store/auth/connector";

interface Props extends ConnectedProps<typeof AuthConnector> {}
function AuthCheck({ auth, check, user }: Props) {
  React.useEffect(() => {
    if (auth && !user) {
      sessionStorage.setItem("auth", auth);
      client.interceptors.request.use(
        (config) => {
          config.headers = {
            ...config.headers,
            authorization: auth,
          };

          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
      check();
    }
  }, [auth, check, user]);

  return <></>;
}

export default AuthConnector(AuthCheck);
