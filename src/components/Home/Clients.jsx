import React from "react";
import ClientLogo1 from "../../assets/Home/Clients/Client Logo 1.png";
import ClientLogo2 from "../../assets/Home/Clients/Client Logo 2.png";
import ClientLogo3 from "../../assets/Home/Clients/Client Logo 3.png";
import ClientLogo4 from "../../assets/Home/Clients/Client Logo 4.png";
import ClientLogo5 from "../../assets/Home/Clients/Client Logo 5.png";
import ClientLogo6 from "../../assets/Home/Clients/Client Logo 6.png";
import ClientLogo7 from "../../assets/Home/Clients/Client Logo 7.png";
import ClientLogo8 from "../../assets/Home/Clients/Client Logo 8.png";
import ClientLogo9 from "../../assets/Home/Clients/Client Logo 9.png";
import ClientLogo10 from "../../assets/Home/Clients/Client Logo 10.png";
import ClientLogo11 from "../../assets/Home/Clients/Client Logo 11.png";
import ClientLogo12 from "../../assets/Home/Clients/Client Logo 12.png";

function Clients() {
  return (
    <section className="template clients">
      <div className="home-clients">
        <header className="template-heading">
          <h2>
            Serving 200+ <br className="desktop" />
            Reputed Organizations
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. At et consequat nunc nullam.
            Mattis ac arcu sodales id quam urna.
          </p>
        </header>
        <div className="home-clients-container">
          <img src={ClientLogo1} alt="EMMVEE" />
          <img src={ClientLogo2} alt="Tata Power Solar" />
          <img src={ClientLogo3} alt="Collins Areospace" />
          <img src={ClientLogo4} alt="Shell" />
          <img src={ClientLogo5} alt="Molex" />
          <img src={ClientLogo6} alt="Toyota" />
          <img src={ClientLogo7} alt="Bosch" />
          <img src={ClientLogo8} alt="Philips" />
          <img src={ClientLogo9} alt="L & T" />
          <img src={ClientLogo10} alt="SFO Technologies" />
          <img src={ClientLogo11} alt="LPSC" />
          <img src={ClientLogo12} alt="Goodrich" />
        </div>
      </div>
      <a href="#" className="tertiary-button">
        <p>View all</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <mask
            id="mask0_516_786"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_516_786)">
            <path
              d="M8.42 20L7 18.58L13.58 12L7 5.42L8.42 4L16.42 12L8.42 20Z"
              fill="#030F27"
            />
          </g>
        </svg>
      </a>
    </section>
  );
}

export default Clients;
