"use client";
import { hasCookie } from "cookies-next";
import React from "react";
import { IoExitOutline, IoPersonCircleSharp } from "react-icons/io5";

export const IconAuth = ({
  logout,
  setLogin,
}: {
  logout: () => void;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [authSvg, setAuthSvg] = React.useState<any>();
  const logged = hasCookie("@UserToken");
  
  React.useEffect(() => {
    const hasBeenLogged = () => {
      if (logged) {
        setAuthSvg(<IoExitOutline title="Logout" className="svg-up" onClick={logout} />);
      } else {
        setAuthSvg(
          <IoPersonCircleSharp
            title="Login"
            className="svg-up"
            onClick={() => setLogin(true)}
          />
        );
      }
    };
    hasBeenLogged();
  }, [logged]);

  return <div>{authSvg}</div>;
};
