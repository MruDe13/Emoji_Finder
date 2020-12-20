import React, { useState } from "react";
import "./styles.css";

function Title() {
  return <h1>EM😉Jiii</h1>;
}

const emojiDictionary = {
  "😀": "Laughing",
  "😘": "Face Blowing Kiss",
  "😂": "Face with Tears of Joy",
  "🤗": "Hugging Face",
  "🤭": "Face with Hand Over Mouth",
  "🤑": "Money-Mouth Face",
  "🤔": "Thinking Face",
  "🥰": "in Love",
  "😚": "Kissing Face with Closed Eyes",
  "😋": "Face Savoring Food",
  "😛": " Face with Tongue",
  "😜": "Winking Face with Tongue",
  "😝": "Squinting Face with Tongue"
};
const allemoji = Object.keys(emojiDictionary);

export default function App() {
  var [emojimeaning, emojifinder] = useState("");
  function findmeaning(event) {
    var userinput = event.target.value;

    var emojimeaning = emojiDictionary[userinput];
    if (emojimeaning === undefined) {
      var emojimeaning =
        "The emote you entered is not in our databse. Please try a different emote.";
    }
    emojifinder(emojimeaning);
  }

  function findmeaningonClick(item) {
    var emojimeaning = emojiDictionary[item];
    emojifinder(emojimeaning);
  }

  return (
    <div className="App">
      <Title />
      <input
        placeholder="Enter Your Emoji Here"
        maxLength="2"
        onChange={findmeaning}
      ></input>
      <div className="output">{emojimeaning}</div>
      <ul>
        {allemoji.map(function (item) {
          return (
            <li
              style={{
                display: "inline",
                padding: "1rem",
                fontSize: "50px"
              }}
              key={item}
              onClick={() => findmeaningonClick(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
