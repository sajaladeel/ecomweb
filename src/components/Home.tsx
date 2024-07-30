import React from 'react'
import Hero from './Hero/Hero'
import Feature from './Feature/Feature'
import Popularburger from './Popularburger/Popularburger'
import Delivery from './Delivery/Delivery'
import ReservationForm from './ReservationForm/ReservationForm'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Feature/>
      <Popularburger/>
      <Delivery/>
       <ReservationForm/>
       <Footer/>
    </div>
  )
}

export default Home
