import "./App.scss";
import logo from "./assets/react.svg";
import closeIcon from "./assets/close.svg";
function App() {
  const header = `
 ______   _______   _        _   _    _   ______
| ___  | | ______| | |      | | | |  | | | ___  |
| |__| | | |_____  | |      | | | |__| | | |__| |
| ___  | | ______| | |      | | |____  | | ___  |
| |  | | | |_____  | |____  | |    __| | | |  | |
|_|  |_| |_______| |______| |_|    |___| |_|  |_| 

------------------------------------- DEVS - 2024`;
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
            <img src={closeIcon} alt="" />
          </div>
        </div>
        <div className="prompt-body">
          <pre>{header}</pre>
          <br />
          <span className="prompt">Welcome@aeliyadevs</span>:-${" "}
          <span className="path">~/ </span>{" "}
          <input type="text" autoFocus={true}></input>
        </div>
      </div>
    </div>
  );
}

export default App;
