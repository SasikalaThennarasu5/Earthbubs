import React from "react";
import HomeHero from "../components/HomeHero";
import ParentsTrust from "../components/ParentsTrust";
import FeaturedCategories from "../components/FeaturedCategories";
import BestSellers from "../components/BestSellers";
import StrollersHome from "../components/StrollersHome";
import FeedingBottlesHome from "../components/FeedingBottlesHome";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import PampersHome from "../components/PampersHome";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <FeaturedCategories />
      <ParentsTrust />
      <BestSellers />
      <StrollersHome />
      <FeedingBottlesHome />
      <PampersHome />
      <Testimonials />
      <FAQ />

    </div>
  );
}
