// src/pages/AboutUsPage.jsx
import React from "react";

export default function AboutUsPage() {
  return (
    <div className="about-page">
      <h1>About Café Fausse</h1>

      <section className="history">
        <h2>Our History</h2>
        <p>
          Founded in 2010 by Chef Antonio Rossi and restaurateur Maria Lopez,
          Café Fausse blends traditional Italian flavors with modern culinary
          innovation.
        </p>
        <p>
          Our mission is to provide an unforgettable dining experience that
          reflects both quality and creativity.
        </p>
      </section>

      <section className="founders">
        <h2>Meet the Founders</h2>

        <div className="founder">
          <h3>Chef Antonio Rossi</h3>
          <p>
            Antonio brings decades of experience in Italian fine dining,
            specializing in authentic flavors and innovative techniques.
          </p>
        </div>

        <div className="founder">
          <h3>Maria Lopez</h3>
          <p>
            Maria is a passionate restaurateur focused on hospitality,
            atmosphere, and unforgettable guest experiences.
          </p>
        </div>
      </section>

      <section className="mission">
        <h2>Our Commitment</h2>
        <p>
          We believe in excellent food, unforgettable dining, and locally sourced
          ingredients that support our community.
        </p>
      </section>
    </div>
  );
}
