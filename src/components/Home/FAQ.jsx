import React, { useState } from "react";
import BlueArrow from "/Blue Arrow.svg";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0); // first item active

  const faqData = [
    {
      title: "How does Machine Movers work?",
      desc: "Lorem ipsum dolor sit amet consectetur. At et consequat nunc nullam. Mattis ac arcu sodales id quam urna.",
    },
    {
      title: "Lorem Ipsum Dolor Sitor",
      desc: "Lorem ipsum dolor sit amet consectetur. At et consequat nunc nullam. Mattis ac arcu sodales id quam urna.",
    },
    {
      title: "How does Machine Movers work?",
      desc: "Lorem ipsum dolor sit amet consectetur. At et consequat nunc nullam. Mattis ac arcu sodales id quam urna.",
    },
    {
      title: "Lorem Ipsum Dolor Sitor",
      desc: "Lorem ipsum dolor sit amet consectetur. At et consequat nunc nullam. Mattis ac arcu sodales id quam urna.",
    },
    {
      title: "How does Machine Movers work?",
      desc: "Lorem ipsum dolor sit amet consectetur. At et consequat nunc nullam. Mattis ac arcu sodales id quam urna.",
    },
  ];

  return (
    <section className="template home-faq">
      <header className="template-heading">
        <h2>
          Our Fleet of Heavy-Duty <br className="desktop" /> Machines
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. At et consequat nunc nullam.
          Mattis ac arcu sodales id quam urna.
        </p>
      </header>

      <div className="home-faq-container">
        {faqData.map((item, index) => (
          <React.Fragment key={index}>
            <div
              className={`home-faq-set ${
                activeIndex === index ? "active-home-faq-set" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="home-faq-set-text">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <img src={BlueArrow} alt="Blue Arrow" />
            </div>

            {index !== faqData.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
