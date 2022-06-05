import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const LoginButton = () => {
  const { loginWithRedirect} = useAuth0();

    

  const sub = () =>{
    loginWithRedirect();
  }

  return <button className="btn btn-primary" onClick={() => sub()}>Log In</button>;
};

export default LoginButton;