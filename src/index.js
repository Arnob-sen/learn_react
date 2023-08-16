import React from "react";
import {StrictMode} from 'react';
import  ReactDOM  from "react-dom";
import { createRoot } from 'react-dom/client';
import pic1 from './image/OIP.jpeg'
import SingleComment from "./SingleComment";
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
    <SingleComment /> 
    <SingleComment /> 
    <SingleComment />   {/* decleare how to component */}
     
       
    
     </div>
  )
}
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  
    <App />
  
    
  
);