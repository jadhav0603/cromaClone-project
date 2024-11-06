/* eslint-disable no-unused-vars */
import React from 'react'
import './css/app.css'
import './css/homePage.css'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import BankOffer from './components/BankOffers'
import WhatsHot from './components/whatsHot'
import LimitedTimeDeals from './components/LimitedTimeDeals'
import Brands from './components/Brands'
import Footer from './components/Footer'




function App() {
  return (
    <div className='body'>
      <Navbar/>
      <Slider />
      <BankOffer/>
      <WhatsHot/>
      <LimitedTimeDeals/>
      <Brands/>
      <Footer/>
    </div>
  
  )
}

export default App