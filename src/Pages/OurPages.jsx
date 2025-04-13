import React from "react";
import NavigationBar from "../components/HomeComponents/NavigationBar";

import Header from "../components/OurPagesComponents/Header";

import TeamSection from "../components/OurPagesComponents/TeamSection";
import ContactForm from "../components/OurPagesComponents/ContactForm";
import Footer from "../components/HomeComponents/Footer";


export default function OurPages(){
    return(
        
        <>

        <NavigationBar/>
        <Header />
        <TeamSection />
        <ContactForm />
        <Footer />
       
        
        
        
        </>
    )
}