export default function FeaturedImages() {
  const images = [
    "https://via.placeholder.com/400x300?text=Interior",
    "https://via.placeholder.com/400x300?text=Dish+1",
    "https://via.placeholder.com/400x300?text=Dish+2"
  ];

  return (
    <div className="featured-images">
      {images.map((src, index) => (
        <img key={index} src={src} alt="Café Fausse" />
      ))}
    </div>
  );
}
