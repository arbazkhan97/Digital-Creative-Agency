import React from 'react'
import NavigationBar from "../components/HomeComponents/NavigationBar";

import HeroSection from "../components/ServicesComponents/HeroSection";

import ServicesSection from "../components/HomeComponents/ServicesSection"; 

import Footer from "../components/HomeComponents/Footer";



export default function Services(){

    return(
        <>
        
        <NavigationBar/>
        <HeroSection/>
        <ServicesSection/>
        <Footer/>
        
        </>
        
    )
}