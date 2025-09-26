import React from 'react'
import Header from '../components/home/Header';
import Productbg from  '../components/product/Productbg'
import Backar from '../components/product/Backar';
import Cardpro from '../components/product/Cardpro';
import Description from '../components/product/Description';
import Related from '../components/product/Related';
import Banner from '../components/home/Banner';
import Footer from '../components/home/Footer';

function page () {
    return (
        <>
        <Header />
        <Productbg />
        <Backar />
        <Cardpro />
        <Description />
        <Related />
        <Banner />
        <Footer />
        </>
    )
}

export default page ;

