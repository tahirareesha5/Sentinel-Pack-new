import React from 'react'
import Header from '../components/home/Header';
import Aboutcont from '../components/about/Aboutcont';
import Company from '../components/about/Company'
import Vision from '../components/about/Vision'
import Mission from '../components/about/Mission'
import Banner from '../components/home/Banner';
import Footer from '../components/home/Footer';
function page () {
    return (
        <>
        <Header />
        <Aboutcont />
         <Company />
         <Vision />
         <Mission />
         <Banner />
        <Footer />
        </>
    )
}

export default page ;
