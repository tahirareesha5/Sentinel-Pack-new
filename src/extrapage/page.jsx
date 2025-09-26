import React from "react";
import Header from "../components/home/Header";
import Productbg from "../components/product/Productbg";
import Banner from "../components/home/Banner";
import Footer from "../components/home/Footer";
import Categories from "../components/extrapage/categories";

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