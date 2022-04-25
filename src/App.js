import React from 'react'
import './App.css';
import Navbar from './component/Navbar'
import Textform from './component/Textform'
// import About from './component/About'
import { useState } from 'react'
export default function App() {
  const[mode,setMode] = useState("light")
  const[text,setText] = useState("Enable darkmode")
  const changeMode =()=>{
    if(mode=='dark'){
      setMode("light");
      document.body.style.color="black";
      document.body.style.backgroundColor="white";
      setText("Enable Darkmode")
    }
    else{
      setMode("dark");
      document.body.style.color="white";
      document.body.style.backgroundColor="#03313e";
      setText("Enable Lightmode");
    }
  }

  return (
    <>
    <Navbar mode={mode} click={changeMode} text={text}/>
    <div className="container">
    <Textform mode={mode}/>
    {/* <About mode={mode}/> */}
    </div>
   </>
  )
}
