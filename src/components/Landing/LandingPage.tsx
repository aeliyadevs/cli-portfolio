import "./LandingPage.scss";

interface ComponentProps {
  updateMode: () => void;
}
const LandingPage: React.FC<ComponentProps> = ({ updateMode }) => {
  return (
    <div className="landing-section">
      <img className="watermark" src="./assets/logo-white.png" alt="" />
      <div className="content">
        <p>Hi! I am</p>
        <p className="name">Aeliya Tamang</p>
        <p>Thanks for visiting my portfolio!</p>
        <p>
          I'm a web developer passionate about creating engaging user
          experiences.
          <br /> This CLI(terminal) style portfolio showcases my skills and
          projects.
        </p>
        <button className="btn-link" onClick={() => updateMode()}>
          Try Terminal Mode
        </button>
        <p>
          Feel free to reach out via{" "}
          <a href="mailto:aeliyadevs@gmail.com" target="_blank">
            aeliyadevs@gmail.com
          </a>{" "}
          or contact on{" "}
          <a href="https://wa.me/9779803079279" target="_blank">
            WhatsApp
          </a>{" "}
          or dial <a href="tel:9779803079279">+977 9803079279</a>
        </p>
        <ul className="socials">
          <li>
            <a href="https://www.facebook.com/aeliya.tamang/" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/aeliya-tamang-808762136"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/aeliyadevs/" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default LandingPage;
