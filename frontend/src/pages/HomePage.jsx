// src/pages/HomePage.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import ContactInfo from "../components/ContactInfo";
import NavigationLinks from "../components/NavigationLinks";
import FeaturedImages from "../components/FeaturedImages";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />

      <section className="home-content">
        <ContactInfo />
        <NavigationLinks />
        <FeaturedImages />
      </section>

      <Footer />
    </div>
  );
}
