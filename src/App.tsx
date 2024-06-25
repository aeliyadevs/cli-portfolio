import "./App.scss";
import logo from "./assets/react.svg";
import closeIcon from "./assets/close.svg";
import maximize from "./assets/maximize.svg";
import minimize from "./assets/minimize.svg";
import PromptComponent from "./components/PromptComponent";

function App() {
  const header = ` ______
|  __  | :::::::::::::::::::::::::::::::::::::::
| |  | |  ______   _        _   _    _   ______
| |__| | |  ____| | |      | | | |  | | |  __  |
|  __  | | |____  | |      | | | |__| | | |__| |
| |  | | |  ____| | |      | | |____  | |  __  |
| |  | | | |____  | |____  | |  ____| | | |  | |
|_|  |_| |______| |______| |_| |______| |_|  |_| 

::::::::::::::::::::::::::::::::::::::::::::::::`;

  const FullScreen = () => {
    document.body.requestFullscreen();
  };
  const ExitFullScreen = () => {
    document.exitFullscreen();
  };
  return (
    <div className="background">
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
              <img src={maximize} alt="" />
            </button>
            <button>
              <img src={closeIcon} alt="" />
            </button>
          </div>
        </div>
        <div className="prompt-body">
          <div>
            <pre>{header}</pre>
            Portfolio CLI <br />
            <br />
            Welcome to Portfolio CLI [Version 1.0.1] <br />© Aeliyadevs 2024.
            All rights reserved. <br />
            <br />
            For a list of available commands, type 'help'.
          </div>
          <br />
          <PromptComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
