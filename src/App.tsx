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
  const character: Array<string> = [
    ` ______
|  __  |
| |  | | 
| |__| | 
|  __  | | 
| |  | | |  _
| |  | | | |____  
|_|  |_| |______| 
            
::::::::::::::`,
    ` ______
|  __  | ::::::
| |  | |  ______   _      
| |__| | |  ____| | |     
|  __  | | |____  | |      
| |  | | |  ____| | |      
| |  | | | |____  | |____  
|_|  |_| |______| |______| |_
                          
::::::::::::::::::::::::::`,
    ` ______
|  __  | ::::::::::::::::::
| |  | |  ______   _        _   
| |__| | |  ____| | |      | | | |  
|  __  | | |____  | |      | | | |__| 
| |  | | |  ____| | |      | | |____  | |
| |  | | | |____  | |____  | |  ____| | | | 
|_|  |_| |______| |______| |_| |______| |_|  |
                                                 |
::::::::::::::::::::::::::::::::::::::::::::::::::`,
    ` ______
|  __  | :::::::::::::::::::::::::::::::::::::::::
| |  | |  ______   _        _   _    _   ______  |
| |__| | |  ____| | |      | | | |  | | |  __  | |
|  __  | | |____  | |      | | | |__| | | |__| | |
| |  | | |  ____| | |      | | |____  | |  __  | |
| |  | | | |____  | |____  | |  ____| | | |  | | |
|_|  |_| |______| |______| |_| |______| |_|  |_| |
                                                 |
::::::::::::::::::::::::::::::::::::::::::::::::::`,
  ];

  const animationRef = useRef<HTMLPreElement>(null);
  const customCharacterAnimation = () => {
    let index = 0;
    const animate = setInterval(() => {
      if (animationRef.current) {
        if (index < character.length) {
          animationRef.current.textContent = character[index];
          index++;
          if (index === character.length) {
            index = 0;
          }
        } else {
          clearInterval(animate);
        }
      }
    }, 500);
  };

  useEffect(() => {
    customCharacterAnimation();
  }, []);

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
          <pre ref={animationRef}></pre>
          <Welcome completed={MarkCompleted} />
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
