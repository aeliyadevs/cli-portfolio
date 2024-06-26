import { ReactNode, useEffect, useRef, useState } from "react";
import resume from "../assets/resume-aeliyadevs-2024.pdf";
import Bio from "./Bio";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";
import Exit from "./Exit";
import Default from "./Default";

const PromptComponent = () => {
  const commands = [
    {
      name: "bio",
      description: "My short introduction",
    },
    {
      name: "skills",
      description: "My skills",
    },
    {
      name: "exp",
      description: "My work experiences",
    },
    {
      name: "edu",
      description: "My educational qualifications",
    },
    {
      name: "projects",
      description: "My projects",
    },
    {
      name: "contact",
      description: "My contact informations",
    },
    {
      name: "resume",
      description: "View or download resume",
    },
    {
      name: "clear",
      description: "Clear screen",
    },
    {
      name: "Exit",
      description: "Exit",
    },
  ];

  ////////////////////////////////
  // end of data definition
  ///////////////////////////////

  const [command, setCommand] = useState<string>("");
  const [output, setOutput] = useState<Array<string>>([]);
  const [outputSection, setOutputSection] = useState<Array<ReactNode>>([]);

  const [userActice, setUserActive] = useState(true);

  const promptRef = useRef<HTMLDivElement>(null);

  const HandleEnerKeyPress = () => {
    switch (command) {
      case "help":
        setOutput([...output, command]);
        setOutputSection([
          ...outputSection,
          <>
            <div className="prompt-line">
              <span id="prompt">
                <span className="welcome">Welcome</span>@aeliyadevs:-$
              </span>
              <span className="path">~/</span>
              <input type="text" value={command} disabled={true} />
            </div>
            <div className="output-content">
              {commands.map((command, index) => (
                <div key={index} className="item">
                  <div className="item-name">{command.name}</div>
                  <div>{command.description}</div>
                </div>
              ))}
            </div>
          </>,
        ]);
        break;

      case "bio":
        setOutputSection([...outputSection, <Bio command={command} />]);
        break;

      case "skills":
        setOutputSection([...outputSection, <Skills command={command} />]);
        break;

      case "exp":
        setOutputSection([...outputSection, <Experiences command={command} />]);
        break;

      case "edu":
        setOutputSection([...outputSection, <Education command={command} />]);
        break;

      case "projects":
        setOutputSection([...outputSection, <Projects command={command} />]);
        break;

      case "contact":
        setOutput([...output, command]);
        setOutputSection([...outputSection, <Contact command={command} />]);
        break;

      case "resume":
        setOutput([...output, command]);
        setOutputSection([...outputSection, <Resume command={command} />]);
        break;

      case "clear":
        setOutput([]);
        setOutputSection([]);
        break;

      case "":
        setOutputSection([
          ...outputSection,
          <>
            <div className="prompt-line">
              <span id="prompt">
                <span className="welcome">Welcome</span>@aeliyadevs:-$
              </span>
              <span className="path">~/</span>
              <input type="text" value={command} disabled={true} />
            </div>
          </>,
        ]);
        break;

      case "exit":
        setOutputSection([...outputSection, <Exit command={command} />]);
        setUserActive(false);
        break;

      default:
        setOutput([...output, command]);
        setOutputSection([...outputSection, <Default command={command} />]);
        break;
    }
  };

  useEffect(() => {
    if (promptRef.current) {
      promptRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [outputSection]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div id="output">
        {outputSection.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <div ref={promptRef}>
        {userActice && (
          <div id="prompt-line" className="prompt-line">
            <span id="prompt">
              <span className="welcome">Welcome</span>@aeliyadevs:-$
            </span>
            <span className="path">~/</span>
            <input
              type="text"
              value={command}
              autoFocus={true}
              onChange={(e) => {
                setCommand(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  HandleEnerKeyPress();
                  setCommand("");
                }
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};
export default PromptComponent;
