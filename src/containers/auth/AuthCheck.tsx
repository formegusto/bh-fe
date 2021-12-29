import React from "react";
import { ConnectedProps } from "react-redux";
import client from "src/api/client";
import AuthConnector from "src/store/auth/connector";

interface Props extends ConnectedProps<typeof AuthConnector> {}
function AuthCheck({ auth, check, user, error, id }: Props) {
  React.useEffect(() => {
    if (auth && !user) {
      sessionStorage.setItem("auth", auth);
      console.log("새로 로그인 하면 바꿔드림", auth);
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

    if (!auth && !user) {
      if (error) {
        sessionStorage.removeItem("auth");
      }
      // client.interceptors.request.use(
      //   (config) => {
      //     config.headers = {
      //       ...config.headers,
      //       ...(id && {
      //         "session-cert-id": id.toString(),
      //         ...REQUEST_ENC_HEADER,
      //       }),
      //     };

      //     return config;
      //   },
      //   (err) => {
      //     return Promise.reject(err);
      //   }
      // );
    }
  }, [auth, check, user, error, id]);

  return <></>;
}

export default AuthConnector(AuthCheck);
