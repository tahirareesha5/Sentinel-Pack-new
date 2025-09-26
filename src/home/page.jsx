import React from 'react'
import Header from '../components/home/Header';
import Image from '../components/home/Image';
import Card from '../components/home/Card';
import About from '../components/home/About';
import Products from '../components/home/Products';
import Kit from '../components/home/Kit';
import Banner from '../components/home/Banner';
import Footer from '../components/home/Footer';

function page () {
    return (
        <>
        <Header />
        <Image />
        <Card />
        <About />
        <Products />
        <Kit />
        <Banner />
        <Footer />
        </>
    )
}

export default page ;
