import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Post from './Post';


function Cards(){
    const bloggArr = [
        {
            id:'1',
            title:'Welcome Blog 1',
            description:'By Madhusudhanan'
        },
        {
            id:'2',
            title:'Welcome Blog 2',
            description:'By Madhusudhanan'
        },
        {
            id:'3',
            title:'Welcome Blog 3',
            description:'By Madhusudhanan'
        }
    ]

    const bloggCard = bloggArr.map((item,pos)=>{
        return(
            <Post key={pos} title={item.title} description={item.description} id={item.id}/>
        )
    })

    var [toggle,setToggle ]= useState(false)
    // const hideButton = () =>{
    //     showBlog = false;
    //     console.log(showBlog);
    // }

    return(
        <div className='d-flex align-content-center justify-content-evenly'>
            <button onClick={() => setToggle(!toggle)}>Toggle Dropdown Markup</button>
      {toggle && (
        <div> {bloggCard}</div>
      )}
        </div>
    )
}

export default Cards