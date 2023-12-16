import React from "react";
import HeroSection from "../../components/hero-section";
import FeaturedSection from "../../components/featured";
import CategorySection from "../../components/category-section";
import CallToAction from "../../components/call-to-action";
const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <HeroSection />
      <CategorySection />
      <FeaturedSection />
      <CallToAction />
    </div>
  );
};

export default HomePage;
