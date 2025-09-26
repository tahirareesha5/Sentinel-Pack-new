import React from "react";
import Header from '../components/home/Header';
import Bg from "../components/contact/Bg";
import Text  from "../components/contact/Text";
import Maping from "../components/contact/Maping"
import Footer from '../components/home/Footer';
function page () {
    return (
        <>
        <Header />
        <Bg />
        <Text />
        <Maping />
        <Footer />
        </>
    )
}
export default page;