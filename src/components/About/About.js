import "./About.css";
import back from "../../assets/icons8-backend-development-64.png";
import web from "../../assets/icons8-web-design-100.png";
import full from "../../assets/icons8-full-stack-64.png";

const About = () => {
  return (
    <section id="about">
      <span className="heading">What I do</span>
      <span id="Paragraph">
        I am a skilled and passionate web designer with experience in creating
        visually appealing nd user-friendly websites.I am proficient in HTML,CSS
        and JavaScript,as well as Backened.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img className="skillBarImg" src={back} />
          <div className="skillBarText">
            <h2>Backened Design</h2>
            <p>This is a demo text,you can write your own content here.</p>
          </div>
        </div>

        <div className="skillBar">
          <img className="skillBarImg" src={web} />

          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>
              This demo text can be changed while making the production ready
              websites.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img className="skillBarImg" src={full} />
          <div className="skillBarText">
            <h2>FullStack Developer</h2>
            <p>You can write anything related to fullstack.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
