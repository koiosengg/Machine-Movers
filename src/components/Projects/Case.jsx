import React, { useEffect, useRef, useState } from "react";
import EMMVEE from "./Case/EMMVEE";
import TE from "./Case/TE";
import Barani from "./Case/Barani";
import Molex from "./Case/Molex";
import Collins from "./Case/Collins";
import Bhoruka from "./Case/Bhoruka";
import SJS from "./Case/SJS";
import CIE from "./Case/CIE";

function Case() {
  const cases = [EMMVEE, TE, Barani, Molex, Collins, Bhoruka, SJS, CIE];

  const slidesCount = cases.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const containerRef = useRef(null);
  const slideRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (!containerRef.current) return;

      setSlideWidth(containerRef.current.getBoundingClientRect().width);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (!slideRef.current) return;

    slideRef.current.style.transform = `translate3d(-${
      activeIndex * slideWidth
    }px, 0, 0)`;
  }, [activeIndex, slideWidth]);

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === slidesCount - 1;

  const handlePrev = () => {
    if (!isFirst) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (!isLast) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  return (
    <section className="template projects-case">
      <header className="template-heading">
        <h2>Case Studies</h2>
        <p>
          Our commitment to quality and safety has made us a preferred partner
          across the region.
        </p>
      </header>

      <div className="projects-case-container" ref={containerRef}>
        <div className="projects-case-slide" ref={slideRef}>
          {cases.map((CaseComponent, index) => (
            <CaseComponent key={index} />
          ))}
        </div>

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
            {cases.map((_, index) => (
              <div
                key={index}
                className={`home-banner-gallery-indicator ${
                  index === activeIndex
                    ? "active-home-banner-gallery-indicator"
                    : ""
                }`}
                onClick={() => setActiveIndex(index)}
                style={{ cursor: "pointer" }}
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
    </section>
  );
}

export default Case;
