import "./Intro.css";
import bg from "../../assets/WhatsApp Image 2023-11-20 at 23.04.09 (1).png";
import briefcase from "../../assets/briefcase.png";
import cv from "../../assets/jaya.pdf";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Jaya</span> <br />
          Website Designer
        </span>
        <p className="introPara">
          I am a skilled web designer with experience in <br />
          creating visually appealing and user friendly websites.
        </p>
        <a href={cv} download={cv}>
          <button className="btn">
            <img src={briefcase} alt="Hire Me" className="btnImg" />
            Hire me
          </button>
        </a>
      </div>
      <div>
        <img src={bg} alt="Profile" className="bg" />
      </div>
    </section>
  );
};

export default Intro;
