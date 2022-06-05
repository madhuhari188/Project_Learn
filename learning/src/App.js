import React from 'react';
// import {BrowserRouter as Routes, Route,Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Cards from './Components/Cards'
import Forms from './Components/Forms'
import List from './Components/List'
import Profile from './Components/Profile';
import Navmenu from './Components/Navmenu';
import Customer from './Components/Customer';
import AuthButtons from './Components/Auth/AuthButtons';

function App() {
  const {user,isAuthenticated,loginWithRedirect} = useAuth0();
  if(isAuthenticated){
  const name = user.name;
  const email = user.email;
  const pic = user.picture;
  const userId = user.sub.replace(/google-oauth2\|/g,"").replace(/auth0\|/g,"");
  const users = {
    name:name,
    email:email,
    pic:pic,
    userId:userId
  }
  const store = localStorage.setItem('userId',userId);
  axios.post('http://localhost:5000/profile/ad',users)
  .then(res=>console.log(res.data));}
  return (
      <>
    <BrowserRouter>
    <Navmenu/>
    
     <Routes>
       {isAuthenticated&&(
       <>
       <Route exact path="/cards" element={<Cards />}></Route>
       <Route exact path="/profile" element={<Profile />}></Route>
       <Route exact path="/list" element={<List />}></Route>
       <Route exact path="/forms" element={<Forms />}></Route>
       <Route exact path="/customer" element={<Customer/>}></Route>
       </>)}
        <Route path='/'></Route>
     </Routes>
     </BrowserRouter>
      </>
  );
}

export default App;
