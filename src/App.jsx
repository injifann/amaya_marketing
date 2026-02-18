import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Header from './components/Header'
import Home from './components/Home'
import Service from './components/Service'
import About from './components/About'
import Contact  from './components/Contact'
// import Footer from './components/Footer'
import OurWork from './components/Work'
import Layout from './components/Layout'
import WhyUs from './components/Whyus'
import {Routes,Route} from 'react-router-dom'

function App() {

  function LandingPage()
  {
    return <>
    <Home/>
    <Service/>
    <WhyUs/>
    <About/>
    <Contact/>
    </>
  }
  return (

    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='services' element={<Service/>}/>
        <Route path='work' element={<OurWork/>}/>
        <Route path='why-us' element={<WhyUs/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>

      </Route>
    </Routes>
    
  )
}

export default App
