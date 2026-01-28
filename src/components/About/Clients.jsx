import React, { useEffect, useRef, useState } from "react";

function Clients() {
  const clientLogos = import.meta.glob("../../assets/Home/Clients/*.png", {
    eager: true,
  });

  const logos = Object.entries(clientLogos)
    .sort((a, b) => {
      const getNumber = (path) => Number(path.match(/\d+/)?.[0] || 0);
      return getNumber(a[0]) - getNumber(b[0]);
    })
    .map(([, module]) => module.default);

  const renderLogosWithDummy = (
    logosSlice,
    totalSlots = 30,
    startIndex = 0,
  ) => {
    const emptyCount = totalSlots - logosSlice.length;

    return (
      <>
        {logosSlice.map((logo, index) => (
          <img
            key={`logo-${startIndex + index}`}
            src={logo}
            alt={`Client Logo ${startIndex + index + 1}`}
          />
        ))}

        {Array.from({ length: Math.max(0, emptyCount) }).map((_, index) => (
          <div
            key={`dummy-${startIndex + index}`}
            className="about-clients-dummy-space"
          />
        ))}
      </>
    );
  };

  const firstSet = logos.slice(0, 30);
  const secondSet = logos.slice(30, 60);
  const thirdSet = logos.slice(60);

  const slidesCount = 3;
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const rightRef = useRef(null);
  const slideRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (rightRef.current) {
        const { width } = rightRef.current.getBoundingClientRect();
        setSlideWidth(width);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${
        activeIndex * slideWidth
      }px)`;
    }
  }, [activeIndex, slideWidth]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slidesCount - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slidesCount - 1 ? 0 : prev + 1));
  };

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === slidesCount - 1;

  return (
    <section className="about-clients">
      <div className="about-clients-left">
        <header className="template-heading">
          <h2>Serving 200+ Reputed Organizations</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. At et consequat nunc nullam.
            Mattis ac arcu sodales id quam urna.
          </p>
        </header>

        <div className="about-clients-left-controls">
          <button
            onClick={!isFirst ? handlePrev : undefined}
            style={{
              opacity: isFirst ? 0.3 : 1,
              cursor: isFirst ? "default" : "pointer",
              pointerEvents: isFirst ? "none" : "auto",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <mask
                id="mask0_583_3864"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="20"
              >
                <rect
                  width="20"
                  height="20"
                  transform="matrix(-1 0 0 1 20 0)"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_583_3864)">
                <path
                  d="M12.9834 16.6666L14.1667 15.4833L8.68341 9.99992L14.1667 4.51659L12.9834 3.33325L6.31675 9.99992L12.9834 16.6666Z"
                  fill="#030F27"
                />
              </g>
            </svg>
          </button>

          <div className="home-banner-gallery-indicators">
            {Array.from({ length: slidesCount }).map((_, index) => (
              <div
                key={index}
                className={`home-banner-gallery-indicator ${
                  index === activeIndex
                    ? "active-home-banner-gallery-indicator"
                    : ""
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <button
            onClick={!isLast ? handleNext : undefined}
            style={{
              opacity: isLast ? 0.3 : 1,
              cursor: isLast ? "default" : "pointer",
              pointerEvents: isLast ? "none" : "auto",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <mask
                id="mask0_583_3864"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="20"
              >
                <rect
                  width="20"
                  height="20"
                  transform="matrix(-1 0 0 1 20 0)"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_583_3864)">
                <path
                  d="M12.9834 16.6666L14.1667 15.4833L8.68341 9.99992L14.1667 4.51659L12.9834 3.33325L6.31675 9.99992L12.9834 16.6666Z"
                  fill="#030F27"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>

      <div className="about-clients-right" ref={rightRef}>
        <div className="about-clients-right-slide" ref={slideRef}>
          <div className="home-clients-container">
            {renderLogosWithDummy(firstSet, 30, 0)}
          </div>

          <div className="home-clients-container">
            {renderLogosWithDummy(secondSet, 30, 30)}
          </div>

          <div className="home-clients-container">
            {renderLogosWithDummy(thirdSet, 30, 60)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
