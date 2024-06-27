import "./App.scss";
import logo from "./assets/react.svg";
import closeIcon from "./assets/close.svg";
import minimize from "./assets/minimize.svg";
import square from "./assets/square.svg";
import PromptComponent from "./components/PromptComponent";
import MobilePopup from "./components/MobilePopup";
import Welcome from "./components/Welcome";
import { useEffect, useRef, useState } from "react";

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
  const headerTypingRef = useRef<HTMLPreElement>(null);

  const typingEffect = () => {
    let textArray = header.split("");

    let index = 0;
    let typedText = "";

    if (headerTypingRef.current) {
      const typingStart = setInterval(() => {
        if (headerTypingRef.current) {
          if (index < textArray.length) {
            typedText += textArray[index];
            headerTypingRef.current.innerHTML = typedText;
            index++;
          } else {
            clearInterval(typingStart);
            index = 0;
            setHeaderTypingCompleted(true);
          }
        }
      }, 1);
    }
  };

  useEffect(() => {
    typingEffect();
  }, []);

  const [headerTypingCompleted, setHeaderTypingCompleted] =
    useState<boolean>(false);
  const [typingCompleted, setTypingCompleted] = useState<boolean>(false);
  const MarkCompleted = () => {
    setTypingCompleted(true);
  };

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
          <pre ref={headerTypingRef}></pre>
          {headerTypingCompleted && (
            <>
              <Welcome completed={MarkCompleted} />
            </>
          )}
          <br />
          {typingCompleted && (
            <>
              <PromptComponent />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
