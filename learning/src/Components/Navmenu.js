import React, {Component} from "react";
import {Link} from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import AuthButtons from "./Auth/AuthButtons";

 class Navmenu extends Component {
  // constructor(props){
  //   super(props);
  //   // this.props.auth0  = props.withAuth0;
  //   // this.state ={name:''}
  // }
  // componentDidMount(){
  
  //   const uname = user.name;
  //   this.setState({name:uname})
  // }
    render(){
      const { user, isAuthenticated} = this.props.auth0;
        return(
          
            <nav className="navbar navbar-expand-xl navbar-light ">
            <div className="container">
            <Link to="/" className="nav-link">Exercise</Link>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo2" aria-controls="navbarTogglerDemo2" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse show" id="navbarTogglerDemo2">
       <ul className="navbar-nav me-auto mb-2 mb-xl-0">
           <li className="nav-item">
             <Link to="/" className="nav-link">Home</Link>
           </li>
           <li className="nav-item">
           <Link to="/forms" className="nav-link">Forms</Link>
           </li>
           <li className="nav-item">
           <Link to="/cards" className="nav-link">Cards</Link>
           </li>
           <li className="nav-item">
           <Link to="/customer" className="nav-link">Customer</Link>
           </li>
        
         {/* <ul className="dropdown-menu">
         {isAuthenticated&&(<li>
            {user.name} <img src={user.picture} className="rounded-circle" width="50px"></img>
         </li> )}
         <li></li>
          </ul> */}</ul>
          <ul className="navbar-nav ms-auto me-5 mb-2 mb-xl-0">
          {isAuthenticated&&(
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"> <img src={user.picture} className="rounded-circle" width="50px"></img></a>
         <ul className="dropdown-menu">
         <li><a className="dropdown-item" href="/forms">{user.name}</a></li>
         <li><a className="dropdown-item" href="/profile">Go to Profile</a></li>
         <li><a className="dropdown-item" ><AuthButtons/></a></li>
         
    </ul>
  </li>)
  }{!isAuthenticated&&(
    <ul className="navbar-nav ms-auto me-5 mb-2 mb-xl-0">
      <li className="nav-item"><AuthButtons/></li>
    </ul>
  )}
  </ul>
       </div>
     </div>
   </nav>
        );
    }
}
export default withAuth0(Navmenu);