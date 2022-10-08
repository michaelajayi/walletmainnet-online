import React from "react";
import Banner from "./Banner";
import ImageContainer from "./ImageContainer";
import DashboardCards from "./DashboardCards";
import ReadyToStart from "./ReadyToStart";
import Header from "./Header";
import Footer from "./Footer";
import Scroller from "./Forms/Scroller/Scroller";

const Container = () => {
  return (
    <>
      <Header />
      {/* <Scroller /> */}
      <Banner />
      <ImageContainer />
      <DashboardCards />
      <ReadyToStart />
      <Footer />
    </>
  );
};

export default Container;
