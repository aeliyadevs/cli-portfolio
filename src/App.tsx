import "./App.scss";
import closeIcon from "./assets/close.svg";
import minimize from "./assets/minimize.svg";
import square from "./assets/square.svg";
import PromptComponent from "./components/PromptComponent";
import MobilePopup from "./components/MobilePopup";
import Welcome from "./components/Welcome";
import { useEffect, useRef, useState } from "react";

function App() {
  const character: Array<string> = [
    `      ______________________________________
     |  __________________________________  |
     | | ................................ | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | !__________________________________| |
     !______________________________________!
    |                                        |
   |  [][][][][][][][][][][][][][][][][][][]  |
  |  [][][][][][][][][][][][][][][][][][][][]  |
 |  [][][][][][][][____________][][][][][][][]  |
  |____________________________________________|
    ==========================================`,

    `      ______________________________________
     |  __________________________________  |
     | | ................................ | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::: Hello! :::::::::::: | |
     | !__________________________________| |
     !______________________________________!
    |                                        |
   |  [][][][][][][][][][][][][][][][][][][]  |
  |  [][][][][][][][]##[][][][][][][][][][][]  |
 |  [][][][][][][][____________][][][][][][][]  |
  |____________________________________________|
    ==========================================`,

    `      ______________________________________
     |  __________________________________  |
     | | ................................ | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::: Hello! :::::::::::: | |
     | | :::::::::: I'm Aeliya :::::::::: | |
     | !__________________________________| |
     !______________________________________!
    |                                        |
   |  [][][][][][][][][][][][]##[][][][][][]  |
  |  [][][][][][][][][][][][][][][][][][][][]  |
 |  [][][][][][][][____________][][][][][][][]  |
  |____________________________________________|
    ==========================================`,

    `      ______________________________________
     |  __________________________________  |
     | | ................................ | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::: Hello! :::::::::::: | |
     | | :::::::::: I'm Aeliya :::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | !__________________________________| |
     !______________________________________!
    |                                        |
   |  [][][][][][][][][][][][][][][][][][][]  |
  |  [][][][][][][][][][][][][][][][][][][][]  |
 |  [][][][][][][][_____##_____][][][][][][][]  |
  |____________________________________________|
    ==========================================`,

    `      ______________________________________
     |  __________________________________  |
     | | ................................ | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::: Hello! :::::::::::: | |
     | | :::::::::: I'm Aeliya :::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::: I am a :::::::::::: | |
     | !__________________________________| |
     !______________________________________!
    |                                        |
   |  [][][][][][][][][][][][]##[][][][][][]  |
  |  [][][][][][][][][][][][][][][][][][][][]  |
 |  [][][][][][][][____________][][][][][][][]  |
  |____________________________________________|
    ==========================================`,

    `      ______________________________________
     |  __________________________________  |
     | | ................................ | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::: Hello! :::::::::::: | |
     | | :::::::::: I'm Aeliya :::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::: I am a :::::::::::: | |
     | | ::::::::::: DESIGNER ::::::::::: | |
     | !__________________________________| |
     !______________________________________!
    |                                        |
   |  [][][][][][][][][][][][][][][][][][][]  |
  |  [][][][]##[][][][][][][][][][][][][][][]  |
 |  [][][][][][][][____________][][][][][][][]  |
  |____________________________________________|
    ==========================================`,

    `      ______________________________________
     |  __________________________________  |
     | | ................................ | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::: Hello! :::::::::::: | |
     | | :::::::::: I'm Aeliya :::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::: I am a :::::::::::: | |
     | | ::::::::::: DESIGNER ::::::::::: | |
     | | :::::::::::: and  a :::::::::::: | |
     | !__________________________________| |
     !______________________________________!
    |                                        |
   |  [][][][][][][][][][][][][][][][][][][]  |
  |  [][][]##[][][][][][][][][][][][][][][][]  |
 |  [][][][][][][][____________][][][][][][][]  |
  |____________________________________________|
    ==========================================`,

    `      ______________________________________
     |  __________________________________  |
     | | ................................ | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::: Hello! :::::::::::: | |
     | | :::::::::: I'm Aeliya :::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::: I am a :::::::::::: | |
     | | ::::::::::: DESIGNER ::::::::::: | |
     | | :::::::::::: and  a :::::::::::: | |
     | | ::::::::: DEVELOPER /> ::::::::: | |
     | !__________________________________| |
     !______________________________________!
    |                                        |
   |  [][][][][][][][][][][][][][][][][][][]  |
  |  [][][][]##[][][][][][][][][][][][][][][]  |
 |  [][][][][][][][____________][][][][][][][]  |
  |____________________________________________|
    ==========================================`,

    `      ______________________________________
     |  __________________________________  |
     | | ................................ | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::: Hello! :::::::::::: | |
     | | :::::::::: I'm Aeliya :::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::: I am a :::::::::::: | |
     | | ::::::::::: DESIGNER ::::::::::: | |
     | | :::::::::::: and  a :::::::::::: | |
     | | ::::::::: DEVELOPER /> ::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | !__________________________________| |
     !______________________________________!
    |                                        |
   |  [][][][][][][][][][][][][][][][][][][]  |
  |  [][][][][][][][][][][][][][][][][][][][]  |
 |  [][][][][][][][_____##_____][][][][][][][]  |
  |____________________________________________|
    ==========================================`,

    `      ______________________________________
     |  __________________________________  |
     | | ................................ | |
     | | :::::::::::: Hello! :::::::::::: | |
     | | :::::::::: I'm Aeliya :::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::: I am a :::::::::::: | |
     | | ::::::::::: DESIGNER ::::::::::: | |
     | | :::::::::::: and  a :::::::::::: | |
     | | ::::::::: DEVELOPER /> ::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | | :::::::::::::::::::::::::::::::: | |
     | !__________________________________| |
     !______________________________________!
    |                                        |
   |  [][][][][][][][][][][][][][][][][][][]  |
  |  [][][][][][][][][][][][][][][][][][][][]  |
 |  [][][][][][][][_____##_____][][][][][][][]  |
  |____________________________________________|
    ==========================================`,
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
    }, 700);
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
      {/* <div className="banner">
        <img src="../assets/logo-white.png" alt="" />
      </div> */}
      <div className="prompt-window">
        <div className="header">
          <div className="header-title">
            <div className="logo">
              <img src="../assets/logo.png" alt="" />
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
          <div className="watermark">
            <img className="" src="../assets/logo-white.png" alt="" />
          </div>
          <div className="char-animation">
            <pre ref={animationRef}></pre>
          </div>
          <div className="prompt-input">
            <Welcome completed={MarkCompleted} />

            {typingCompleted && (
              <>
                <PromptComponent />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
