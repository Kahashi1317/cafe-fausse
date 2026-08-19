// src/pages/GalleryPage.jsx
import React, { useState } from "react";

export default function GalleryPage() {
  const images = [
    "https://via.placeholder.com/600x400?text=Interior+1",
    "https://via.placeholder.com/600x400?text=Interior+2",
    "https://via.placeholder.com/600x400?text=Dish+1",
    "https://via.placeholder.com/600x400?text=Dish+2",
    "https://via.placeholder.com/600x400?text=Event+1"
  ];

  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <div className="page gallery-page">
      <h1>Gallery</h1>

      <section className="image-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Café Fausse"
            onClick={() => setLightboxImage(src)}
            className="gallery-image"
          />
        ))}
      </section>

      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <img src={lightboxImage} alt="Large view" className="lightbox-image" />
        </div>
      )}

      <section className="awards">
        <h2>Awards</h2>
        <ul>
          <li>Culinary Excellence Award — 2022</li>
          <li>Restaurant of the Year — 2023</li>
          <li>Best Fine Dining Experience — Foodie Magazine, 2023</li>
        </ul>
      </section>

      <section className="reviews">
        <h2>Customer Reviews</h2>
        <blockquote>
          "Exceptional ambiance and unforgettable flavors." — Gourmet Review
        </blockquote>
        <blockquote>
          "A must-visit restaurant for food enthusiasts." — The Daily Bite
        </blockquote>
      </section>
    </div>
  );
}
