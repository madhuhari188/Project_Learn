
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const AuthButtons = () => {
    // const isAuthenticated  = false;
    const {isAuthenticated} = useAuth0();
  
    console.log(isAuthenticated)

        if(isAuthenticated === true){
            return <LogoutButton/>
    }
    else{
        return <LoginButton/>
    }
  };
  
  export default AuthButtons;