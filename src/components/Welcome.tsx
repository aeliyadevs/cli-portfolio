import { useEffect, useRef } from "react";

interface ComponentProps {
  completed: Function;
}

const Welcome: React.FC<ComponentProps> = ({ completed }) => {
  const textTypingRef = useRef<HTMLParagraphElement>(null);

  const typingEffect = () => {
    const myParagraph =
      "PORTFOLIO CLI <br /> Welcome to my CLI Portfolio [Version 1.0.0] <br /> Copyright © Aeliyadevs 2024. All rights reserved. <br > ... <br /> For a list of available commands, type 'help'.";
    let textArray = myParagraph.split("");

    let index = 0;
    let typedText = "";

    if (textTypingRef.current) {
      const typingStart = setInterval(() => {
        if (textTypingRef.current) {
          if (index < textArray.length) {
            typedText += textArray[index];
            textTypingRef.current.innerHTML = typedText;
            index++;
          } else {
            clearInterval(typingStart);
            index = 0;
            completed();
          }
        }
      }, 5);
    }
  };

  useEffect(() => {
    typingEffect();
  }, []);

  return (
    <>
      <p ref={textTypingRef} id="welcomeText"></p>
    </>
  );
};
export default Welcome;
