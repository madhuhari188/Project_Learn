import { Component,React } from "react";
import { withAuth0 } from "@auth0/auth0-react";



class Profile extends Component{


    render(){
        const { user,isAuthenticated } = this.props.auth0;
        return (
           <> {isAuthenticated&&(
               <>
               <div className="container">
               <div className="card d-flex align-items-center">
               <div className="card-body d-flex flex-column align-items-center">
               <img className="rounded-circle" src={user.picture} alt={user.name}/>
               <h5 className="card-title">User Name:{user.name}</h5>
               <p className="card-subtitle mb-2 text-muted">Mail:{user.email}</p>
               </div></div></div></>
             )}</>
        )
    }
}

export default withAuth0(Profile)