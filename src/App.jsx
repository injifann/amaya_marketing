import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Service from './components/Service'
import About from './components/About'
import Video from './components/Video'
import Contact  from './components/Contact'
import Footer from './components/Footer'
import WhyUs from './components/Whyus'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Home/>
    <Service/>
    <Video/>
    <WhyUs/>
    <About/>
    <Contact/>
    <Footer/>

    </>
  )
}

export default App
