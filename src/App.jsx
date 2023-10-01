import { useState } from 'react'
import reactLogo from './assets/react.svg'
import bannerImg from './assets/images/banner.png';
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './component/banner';
import Project from './component/project';
import Contact from './component/contact';
import Navbar from './component/navbar';
import Social from './component/social';
import ScrollDown from './component/scrollDown';

function App() {




  return (
    <>
      <Navbar/>
      <Banner/>
      <Project/>
      <Contact/>
      <Social/>
      <ScrollDown/>
    </>
  )
}

export default App
