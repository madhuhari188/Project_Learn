import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const Post = (props) =>{
    return(
        <div>
            <h3 className="card-title">{props.title}</h3>
            <h6 className="card-text">
                {props.description}
            </h6>
        </div>
    )
}

export default Post