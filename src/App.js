import React, { useState } from "react";
import "./styles.css";

const flagLib = {
  "🇮🇳": "India",
  "🇦🇫": "Afghanistan",
  "🇦🇺": "Australia",
  "🇧🇩": "Bangladesh",
  "🇧🇷": "Brazil",
  "🇧🇹": "Bhutan",
  "🇨🇦": "Canada",
  "🇨🇭": "Switzerland",
  "🇩🇪": "Germany",
  "🇪🇬": "Egypt",
  "🇫🇷": "France",
  "🇬🇧": "United Kingdom",
  "🇮🇹": "Italy",
  "🇱🇰": "Sri Lanka",
  "🇺🇸": "United States",
  "🇷🇺": "Russia",
  "🇮🇱": "Israel",
  "🇲🇾": "Malaysia"
};

const flags = Object.keys(flagLib);

export default function App() {
  const [country, setCountry] = useState("Country name will appear here..");

  function flagInputHandler(event) {
    let country = flagLib[event.target.value];
    if (country === undefined) {
      country = "This flag is not present in our database";
    }
    setCountry(country);
  }

  function flagClickHandler(flag) {
    setCountry(flagLib[flag]);
  }

  return (
    <div className="App">
      <h1>Fun With Flags</h1>
      <h2>Enter flag or Choose any flag below to know country name</h2>
      <input
        onChange={flagInputHandler}
        placeholder="Put flag here to know the country"
      />
      <div id="output" className="output">
        {country}
      </div>

      <ul className="non-bullets">
        {flags.map((flag) => {
          return (
            <li
              onClick={() => flagClickHandler(flag)}
              className="list-item"
              key={flag}
            >
              <a href="#output">{flag}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
