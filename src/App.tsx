import "./App.scss";
import logo from "./assets/react.svg";
import closeIcon from "./assets/close.svg";
import minimize from "./assets/minimize.svg";
import square from "./assets/square.svg";
import PromptComponent from "./components/PromptComponent";
import MobilePopup from "./components/MobilePopup";

function App() {
  const header = ` ______
|  __  | :::::::::::::::::::::::::::::::::::::::::
| |  | |  ______   _        _   _    _   ______  |
| |__| | |  ____| | |      | | | |  | | |  __  | |
|  __  | | |____  | |      | | | |__| | | |__| | |
| |  | | |  ____| | |      | | |____  | |  __  | |
| |  | | | |____  | |____  | |  ____| | | |  | | |
|_|  |_| |______| |______| |_| |______| |_|  |_| |
                                                 |
::::::::::::::::::::::::::::::::::::::::::::::::::`;

  const welcomeText: Array<string> = [
    "Portfolio CLI",
    "Welcome to my CLI Portfolio [Version 1.0.0]",
    "© Aeliyadevs 2024. All rights reserved.",
    "For a list of available commands, type 'help'.",
  ];

  const FullScreen = () => {
    document.body.requestFullscreen();
  };
  const ExitFullScreen = () => {
    document.exitFullscreen();
  };
  return (
    <div className="background">
      <MobilePopup />
      {/* <MobilePopup /> */}
      <div className="prompt-window">
        <div className="header">
          <div className="header-title">
            <div className="logo">
              <img src={logo} alt="" />
              https://aeliyadevs.com/terminal
            </div>
          </div>
          <div className="controls">
            <button onClick={ExitFullScreen}>
              <img src={minimize} alt="" />
            </button>
            <button onClick={FullScreen}>
              <img src={square} alt="" />
            </button>
            <button>
              <img src={closeIcon} alt="" />
            </button>
          </div>
        </div>
        <div className="prompt-body">
          <>
            <pre>{header}</pre>
            <p id="welcomeText">
              {welcomeText.map((item, index) => (
                <span key={index}>
                  <br />
                  {item}
                  <br />
                </span>
              ))}
            </p>
          </>
          <br />
          <PromptComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
