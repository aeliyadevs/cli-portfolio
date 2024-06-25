import { useState } from "react";

const PromptComponent = () => {
  const [command, setCommand] = useState<string>("");
  const [output, setOutput] = useState<Array<string>>([]);
  const contactInfo = [
    {
      name: "Phone",
      description: "9876543210",
    },
    {
      name: "email",
      description: "aeliyadevs@gmail.com",
    },
    {
      name: "facebook",
      description: "https://facebook.com",
    },
    {
      name: "linkedin",
      description: "https://linkedin.com",
    },
    {
      name: "github",
      description: "https://github.com",
    },
  ];
  const commands = [
    {
      name: "bio",
      description: "Know me well",
    },
    {
      name: "skills",
      description: "My skills",
    },
    {
      name: "experiences",
      description: "My work experiences",
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
      name: "exit",
      description: "Exit from terminal mode",
    },
    {
      name: "clear",
      description: "Clear screen",
    },
  ];

  const HandleEnerKeyPress = () => {
    switch (command) {
      case "help":
        setOutput([...output, command]);
        console.log(output);
        break;

      case "bio":
        console.log(command);
        break;

      case "clear":
        setOutput([]);
        break;

      default:
        setOutput([...output, command]);
        break;
    }
  };
  return (
    <>
      <div id="output">
        {output.map((item, index) => (
          <div id="prompt-line" key={index}>
            <span id="prompt">Welcome@aeliyadevs:-$</span>
            <span className="path">~/</span>
            <input type="text" value={item} disabled={true} />
          </div>
        ))}
      </div>
      <div id="prompt-line">
        <span id="prompt">Welcome@aeliyadevs:-$</span>
        <span className="path">~/</span>
        <input
          type="text"
          value={command}
          autoFocus={true}
          onChange={(e) => {
            setCommand(e.target.value);
            console.log(e.target.value);
          }}
          onKeyDown={(e) => {
            console.log(e.key);
            if (e.key === "Enter") {
              HandleEnerKeyPress();
              setCommand("");
            }
          }}
        />
      </div>
    </>
  );
};
export default PromptComponent;
