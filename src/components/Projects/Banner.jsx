import React from "react";
import Sample from "../../assets/Projects/Banner/Projects Video.mp4";

function Banner() {
  return (
    <section className="home-banner other-banner">
      <header>
        <h1>
          Projects That Built
          <br className="desktop" />
          Our Reputation
        </h1>
        <p>
          South India’s complete service partner for container loading, machine
          movement, and recovery operations.
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

export default Banner;
