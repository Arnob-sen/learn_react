import React from "react";
import SingleComment from "./SingleComment";
const UserCard=(props)=>
{
    return(
        <div className='ui card'>
            <div className='content'>
                <div className='header'>{props.name}</div>
                <div className='description'>
                    {props.children}
                
                </div>

            </div>
            <div className='ui bottom button'>
                <i className='add icon'></i>
                add friend
            </div>

        </div>
    )

}
export default UserCard;