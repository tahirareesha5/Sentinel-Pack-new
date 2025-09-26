import React from "react";
import Header from "../components/home/Header";
import Productbg from "../components/product/Productbg";
import Categories from "../components/extrapage/categories";
import Banner from "../components/home/Banner";
import Footer from "../components/home/Footer";

function Extrapage() {
  return (
    <>
      <Header />
      <Productbg />
      <Categories />
      <Banner />
      <Footer />
    </>
  );
}

export default Extrapage;