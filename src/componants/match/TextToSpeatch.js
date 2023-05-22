import React, { useState } from "react";

const TextToSpeech = () => {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleSpeak = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "mr-IN"; // Set the language code for Marathi (mr-IN)
      speechSynthesis.speak(utterance);
    } else {
      console.error("Text-to-speech not supported in this browser.");
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text to speak..."
      />
      <button onClick={handleSpeak}>Speak</button>
    </div>
  );
};

export default TextToSpeech;
