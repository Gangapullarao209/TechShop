import React from 'react'
import Navbar from '../components/Navbar'
import Mycarousel from '../components/Mycarousel'
import ProductCarousel from '../components/ProductCarousel'
import productsData  from '../Assets/productsData'
import FeaturedItems from './FeaturedItems'
import OurAdvantages from '../components/OurAdvantages'
import Footer from '../components/Footer'
 
 

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Mycarousel />
         <ProductCarousel products={productsData}/>
       <FeaturedItems />
       <OurAdvantages/>
       <Footer/>
         
    </div>
  )
}