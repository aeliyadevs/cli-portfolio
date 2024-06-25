import "./App.scss";
import logo from "./assets/react.svg";
import closeIcon from "./assets/close.svg";
// import fullScreen from "./assets/fullscreen.svg";
// import fullScreenExit from "./assets/fullscreen_exit.svg";
import maximize from "./assets/maximize.svg";
import minimize from "./assets/minimize.svg";
import { useEffect, useState } from "react";
import Output from "./components/Output";
import Prompt from "./components/Prompt";
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

DEVS :::::::::::::::::::::::::::::: Version 0.0.1`;

  //   const commands = `
  // bio           Know me
  // skills        My skills
  // experiences   My work experiences
  // projects      My projects
  // contact       My contact informations
  // exit          Exit from terminal mode
  // clear         Clear screen
  // `;

  // const commands = [
  //   {
  //     name: "bio",
  //     description: "Know me well",
  //   },
  //   {
  //     name: "skills",
  //     description: "My skills",
  //   },
  //   {
  //     name: "experiences",
  //     description: "My work experiences",
  //   },
  //   {
  //     name: "projects",
  //     description: "My projects",
  //   },
  //   {
  //     name: "contact",
  //     description: "My contact informations",
  //   },
  //   {
  //     name: "exit",
  //     description: "Exit from terminal mode",
  //   },
  //   {
  //     name: "clear",
  //     description: "Clear screen",
  //   },
  // ];

  // const contactInfo = [
  //   {
  //     name: "Phone",
  //     description: "9876543210",
  //   },
  //   {
  //     name: "email",
  //     description: "aeliyadevs@gmail.com",
  //   },
  //   {
  //     name: "facebook",
  //     description: "https://facebook.com",
  //   },
  //   {
  //     name: "linkedin",
  //     description: "https://linkedin.com",
  //   },
  //   {
  //     name: "github",
  //     description: "https://github.com",
  //   },
  // ];

  const [command, setCommand] = useState("");

  const [output, setOutput] = useState<object>([]);

  // useEffect(() => {
  //   console.log(output);
  // }, [output]);

  function handleCommand(): void {
    switch (command) {
      case "help":
        setOutput(commands);
        break;

      case "contact":
        setOutput(contactInfo);
        break;

      default:
        console.log("Invalid command");
        break;
    }
  }

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
            {/* <pre>{commands}</pre> */}
            {/* {commands.map((item) => (
              <div className="command">
                <div className="command-name">{item.name}</div>
                <div className="command-description">{item.description}</div>
              </div>
            ))} */}
          </div>
          <br />
          <div id="output">
            {/* {output.map((item, index) => (
              <Prompt key={index} data={item} />
            ))} */}
          </div>
          <PromptComponent />
          {/* <span id="prompt">Welcome@aeliyadevs</span>:-${" "}
          <span className="path">~/ </span>{" "}
          <input type="text" autoFocus={true} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
