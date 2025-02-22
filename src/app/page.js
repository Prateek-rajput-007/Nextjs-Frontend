import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/heroSection'
import GetStarted from './components/GetStarted'
import More from './components/More'
import Stories from './components/Stories'
import Footer from './components/Footer'
import GetInTouch from './components/GetinTouch'
import Pricing from './components/Pricing'
const page = () => {
  return (
    <div>
    <Navbar/>
    <HeroSection/>
    <GetStarted/>
    <More/>
    <Stories/>
    <Pricing/>
    <GetInTouch/>
    <Footer/>
    </div>
  )
}

export default page