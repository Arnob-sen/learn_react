import React from "react";
import {StrictMode} from 'react';
import  ReactDOM  from "react-dom";
import { createRoot } from 'react-dom/client';
import pic1 from './image/OIP.jpeg'
function getButton()
{
  return 'hi babe'
  
}
const App=function()//function base component..we can also use ()=> instate of fucntion
{
  const buttonText="CLICK ME!";
  const style={backgroundColor:'red', color:'white'}
  
  return(
    <div className='ui comment'>
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
    
     </div>
  )
}
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  
    <App />
  
    
  
);