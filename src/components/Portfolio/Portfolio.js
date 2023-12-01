import React from "react";
import "./Portfolio.css";
import portfolio1 from "../../assets/portfolio-1.png";
import portfolio2 from "../../assets/portfolio-2.png";
import portfolio3 from "../../assets/portfolio-3.png";
import portfolio4 from "../../assets/portfolio-4.png";
import portfolio5 from "../../assets/portfolio-5.png";
import portfolio6 from "../../assets/portfolio-6.png";
const Portfolio = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect.I aam excited to bring my skills and
        experience to help businesses achieve their goals and create a strong
        online presence.
      </span>

      <div className="worksImgs">
        <img className="worksImg" src={portfolio1} />
        <img className="worksImg" src={portfolio2} />
        <img className="worksImg" src={portfolio3} />
        <img className="worksImg" src={portfolio4} />
        <img className="worksImg" src={portfolio5} />
        <img className="worksImg" src={portfolio6} />
      </div>

      <button className="worksbtn">See More</button>
    </section>
  );
};

export default Portfolio;
