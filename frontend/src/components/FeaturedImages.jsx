// src/components/FeaturedImages.jsx
export default function FeaturedImages() {
  const images = [
    "/images/interior.jpg",
    "/images/dish1.jpg",
    "/images/dish2.jpg"
  ];

  return (
    <div className="featured-images">
      {images.map((src, index) => (
        <img key={index} src={src} alt="Café Fausse" />
      ))}
    </div>
  );
}
