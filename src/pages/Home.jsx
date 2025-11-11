import React from "react";
import Banner from "../Components/Banner";
import FeatureSection from "../Components/FeatureSection";
import Gallery from "../Components/Gallery";
import NewsLetter from "../Components/NewsLetter";

const Home = () => {
  return (
    <div className="min-h-[500px] w-11/11 mx-auto">
      <div>
        <Banner></Banner>
        <FeatureSection></FeatureSection>
        <Gallery />
        <NewsLetter />
      </div>
    </div>
  );
};

export default Home;
