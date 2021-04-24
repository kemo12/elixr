import React,{useState} from 'react'
import Hero from './components/Hero';
import Navbar from "./components/Navbar";
import GlobalStyle from './globalStyles';
import {SliderData} from "./data/SliderData";
import Dropdown from './components/Dropdown';
import Infosection from './components/InfoSection';
import { InfoData } from './data/InfoData';
function App() {
  const [isOpen,setIsOpen]=useState(false);
  
  const toggle=()=>{
    setIsOpen(!isOpen);
  }

  return (
    <>
   <GlobalStyle/>
   <Navbar toggle={toggle}/>
   <Dropdown isOpen={isOpen} toggle={toggle}/>
   <Hero slides={SliderData}/>
   <Infosection {...InfoData }/>
   </>
  );
}

export default App;
    