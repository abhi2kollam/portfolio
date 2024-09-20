import { useState, useEffect } from "react";

const texts = ["Hi, I'm Abhilash Pillai", "Hi, I'm a Web Developer", "Hi, I'm a Node.js Developer"];

const TextChange = () => {
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(1);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));
      
      // Forward text writing
      if (isForward) {
        setEndValue((prev) => prev + 1);
        if (endValue === texts[index].length) {
          setIsForward(false); // Start deleting when the full text is displayed
        }
      } 
      // Backward text deletion
      else {
        setEndValue((prev) => prev - 1);
        if (endValue === 0) {
          setIsForward(true);
          setIndex((prev) => (prev + 1) % texts.length); // Move to the next text
        }
      }
    }, 100); // Adjust the speed as desired

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index]);

  return <div className="transition ease duration-300">{currentText}</div>;
};

export default TextChange;
