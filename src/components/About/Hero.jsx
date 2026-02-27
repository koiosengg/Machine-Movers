import React from "react";
import Sample from "../../assets/About/Banner/About Video.mp4";

function Hero() {
  return (
    <section className="home-banner other-banner">
      <header>
        <h1>
          A Legacy of 25 Years in
          <br className="desktop" /> Machinery Movement
        </h1>
        <p>
          Delivering trusted industrial machinery shifting, heavy equipment
          relocation, and turnkey installation services across India with safety
          and precision
        </p>
      </header>

      <div className="home-banner-gallery">
        <div className="home-banner-gallery-slide">
          <video src={Sample} muted autoPlay loop playsInline />
        </div>
      </div>
    </section>
  );
}

export default Hero;
