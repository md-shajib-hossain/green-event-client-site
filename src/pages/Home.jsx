import React from "react";
import Banner from "../Components/Banner";
import FeatureSection from "../Components/FeatureSection";
import Gallery from "../Components/Gallery";
import NewsLetter from "../Components/NewsLetter";

const Home = () => {
  return (
    <div className=" dark:bg-gray-800">
      <div className="dark:bg-gray-800">
        <Banner></Banner>
        <FeatureSection></FeatureSection>
        <Gallery />
        <NewsLetter />
      </div>
    </div>
  );
};

export default Home;
