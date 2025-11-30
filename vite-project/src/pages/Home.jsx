import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Hero1 from '../components/Hero1'
import Footer from '../components/Footer'
import About from '../components/About'
import Transition from '../components/Transition'
function Home() {
  return (
    <div className=' bg-[#101010]'>
      <Navbar/>
      <Hero1/>
      <Hero/>
      <About/>
      <Transition/>
      <Footer/>

    </div>
  )
}

export default Home
