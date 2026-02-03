import React, { useEffect, useRef, useState } from "react";
import Arrow from "../../assets/Home/Banner/Arrow.svg";
import GalleryImg1 from "../../assets/Home/Banner/Gallery Image 1.png";
import GalleryImg2 from "../../assets/Home/Banner/Gallery Image 2.png";
import GalleryImg3 from "../../assets/Home/Banner/Gallery Image 3.png";
import GalleryImg4 from "../../assets/Home/Banner/Gallery Image 4.png";

const galleryData = [
  {
    img: GalleryImg1,
    title: "MOVING MACHINES ON EPOXY",
    desc: "Epoxy painted floors are our specialty",
  },
  {
    img: GalleryImg2,
    title: "We Shift The Machines Using",
    desc: "Rollers and Hydralic Jacks",
  },
  {
    img: GalleryImg3,
    title: "Container Loading / Unloading",
    desc: "De-Stepping is our Speciality",
  },
  {
    img: GalleryImg4,
    title: "PICK -N",
    desc: "Carry Cranes",
  },
];

function Banner() {
  const galleryRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [galleryWidth, setGalleryWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (galleryRef.current) {
        setGalleryWidth(galleryRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const slideStyle = {
    transform: `translateX(-${currentIndex * galleryWidth}px)`,
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentIndex < galleryData.length - 1)
      setCurrentIndex((prev) => prev + 1);
  };

  return (
    <section className="home-banner">
      <header>
        <h1>
          Heavy Lifting Solutions
          <br className="desktop" /> for Every Industry
        </h1>
        <p>
          South India’s complete service partner for container loading, machine
          movement, and recovery operations.
        </p>
      </header>

      <div className="home-banner-gallery" ref={galleryRef}>
        <div className="home-banner-gallery-slide" style={slideStyle}>
          {galleryData.map((item, index) => (
            <img key={index} src={item.img} alt={item.title} />
          ))}
        </div>

        <div className="home-banner-gallery-text">
          <span>{galleryData[currentIndex].title}</span>
          <p>{galleryData[currentIndex].desc}</p>
        </div>

        <button
          className="home-banner-gallery-button home-banner-gallery-button-left"
          onClick={handlePrev}
          style={{
            opacity: currentIndex === 0 ? 0.3 : 1,
            cursor: currentIndex === 0 ? "default" : "pointer",
          }}
        >
          <img
            src={Arrow}
            style={{ transform: "rotate(180deg)" }}
            alt="Arrow Icon"
          />
        </button>

        <button
          className="home-banner-gallery-button home-banner-gallery-button-right"
          onClick={handleNext}
          style={{
            opacity: currentIndex === galleryData.length - 1 ? 0.3 : 1,
            cursor:
              currentIndex === galleryData.length - 1 ? "default" : "pointer",
          }}
        >
          <img src={Arrow} alt="Arrow Icon" />
        </button>

        <div className="home-banner-gallery-indicators">
          {galleryData.map((_, index) => (
            <div
              key={index}
              className={`home-banner-gallery-indicator ${
                index === currentIndex
                  ? "active-home-banner-gallery-indicator"
                  : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Banner;
