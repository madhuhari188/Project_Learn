import { useAuth0 } from "@auth0/auth0-react"
import axios from "axios";
import { useState,useEffect } from "react";

const List =()=>{
    const {user,isAuthenticated} = useAuth0();
    const [userid, setUserid] = useState('');
    // if(isAuthenticated){
    //     var us = user.sub.replace(/google-oauth2\|/g,"").replace(/auth0\|/g,"");}
    //     const id = us;
    //     setUserid(id);
        useEffect(()=>{
            const userid = JSON.parse(localStorage.getItem('profile'));
  if (userid) {
   setUserid(userid);
  }
  console.log(userid);
        })
    
    // useEffect(()=>{
       
      
    //     axios.get('http://localhost:5000/money/list?userId='+id)
    //     .then(response => {
    //         setMoney(response.data);
            
    //     })
    //     .catch((error) =>{
    //         console.log(error);
    //     })
    //     console.log(money)
    // },[])
    // return(
    //     <div>{money.map((value,index)=>(
    //         <div key={value._id}>
    //             <p>{value.title}</p>
    //         </div>
    //     ))}</div>
    // )
}

export default List