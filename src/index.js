import React from "react";
import {StrictMode} from 'react';
import  ReactDOM  from "react-dom";
import { createRoot } from 'react-dom/client';
import pic1 from './image/OIP.jpeg'
import SingleComment from "./SingleComment";
import pic2 from './image/R.jpeg'
import pic3 from './image/Wallpapers-pexels-photo.jpg'
import UserCard from "./UserCard";
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
      <UserCard>
        <div>
          hello my name is sarah and i live in india
        </div>
      </UserCard>
      <UserCard>

      
    <SingleComment 
    name='sarah'
     date='today at 5.00Pm'
     text='its amazing'
     picture={pic1}
     /> 
     </UserCard>
     <UserCard>
    <SingleComment
     name='jack'
      date='today at 6.00Pm'
       text='so nice'
       picture={pic2}/> 
       </UserCard>
       <UserCard>
    <SingleComment name='alex' date='today at 7.00Pm' text='thats great' picture={pic3}/>   {/* decleare how to component */}
    </UserCard>
       
    
     </div>
  )
}
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  
    <App />
  
    
  
);