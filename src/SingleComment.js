import React from "react";
import pic1 from './image/OIP.jpeg';
const SingleComment=()=>
{
    return(
        <div className="comment">
        <a href="/" className="avatar" >
          <img src={pic1} alt="profile picture" />


        </a>
        
        
        <div className="content">
          <a href="/" className="author">
            sarah

          </a>
          
          <div className="metadata">
            <span className="date">
              today at 5.00pm

            </span>
            

          </div>
          <div className="text">
              its amazing

            </div>

        </div>

       </div>
    
    )
}
export default SingleComment;