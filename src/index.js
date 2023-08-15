import React from "react";
import {StrictMode} from 'react';
import  ReactDOM  from "react-dom";
import { createRoot } from 'react-dom/client';
function getButton()
{
  return 'hi babe'
  
}
const App=function()//function base component..we can also use ()=> instate of fucntion
{
  const buttonText="CLICK ME!";
  const style={backgroundColor:'red', color:'white'}
  
  return(
    <div>
      <label for="name" className="label" >entire email</label>
      <input id="name" type="text" />
      <button style={style}>
        {/* submit */}
        {/* {buttonText} */}
        submit
        {/* {getButton()} */}
        </button>
    </div>
  )
}
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  
    <App />
  
    
  
);