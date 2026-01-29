import React, { useEffect, useRef, useState } from "react";
import ServicesImage1 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Services Image 1.png";
import ServicesImage2 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Services Image 2.png";
import ServicesImage3 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Services Image 3.png";
import ServicesImage4 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Services Image 4.png";
import ServicesImage5 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Services Image 5.png";

function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const servicesText = [
    "SHIFTING of all types of industrial machinery",
    "skilled rigging and handling",
    "precision alignment after shifting",
    "safe and damage free movement",
    "expertise in factory relocation and internal plant shifting",
  ];

  const servicesImages = [
    ServicesImage1,
    ServicesImage2,
    ServicesImage3,
    ServicesImage4,
    ServicesImage5,
  ];

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % servicesText.length);
    }, 4000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
    startTimer(); // restart timer from clicked item
  };

  return (
    <section className="template blue-template">
      <header className="template-heading">
        <h2>Our Services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. At et consequat nunc nullam.
          Mattis ac arcu sodales id quam urna.
        </p>
      </header>

      <div className="services-services">
        {/* TEXT */}
        <div className="services-services-text">
          {servicesText.map((text, index) => (
            <h3
              key={index}
              className={
                index === activeIndex ? "active-services-services" : ""
              }
              onClick={() => handleClick(index)}
            >
              {text}
            </h3>
          ))}
        </div>

        {/* IMAGES */}
        <div className="services-services-imgs">
          {servicesImages.map((img, index) => (
            <div
              key={index}
              className={`services-services-img ${
                index === activeIndex ? "active-services-services-img" : ""
              }`}
            >
              <img src={img} alt={`Services Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
