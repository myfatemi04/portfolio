import { useCallback, useRef, useState } from "react";
// import "./burn.css";

function App() {
  const [text, _setText] = useState("");
  const [burning, setBurning] = useState(false);
  const [burnProgress, setBurnProgress] = useState(0);
  const textareaRef = useRef(null);

  const setText = useCallback(
    (text) => {
      _setText(text);
      if (textareaRef.current) {
        textareaRef.current.value = text;
      }
    },
    [_setText]
  );

  const burn = useCallback(
    (text) => {
      setBurning(true);
      const timerId = setInterval(() => {
        setBurnProgress((progress) => {
          if (progress >= text.length) {
            clearInterval(timerId);

            setTimeout(() => {
              setBurning(false);
              setText("");
              setBurnProgress(0);
            }, 3000);

            return progress;
          }

          return progress + 1;
        });
      }, 300);
    },
    [setText]
  );

  return (
    <div className="App">
      <link rel="stylesheet" href="burn.css" />
      <header className="App-header">
        {!burning && <h1>🔥🕊✌️</h1>}
        {burning ? (
          <div className="flame">
            {text.split("").map((char, index) => {
              if (char === "\n") {
                return <br />;
              }
              if (index < burnProgress) {
                return (
                  <div key={index} className="lit">
                    <div></div>
                    <div></div>
                    {/* <div></div>
                    <div></div> */}
                    <span className="placeholder">{char}</span>
                    <span className={["even", "odd"][index % 2]}>{char}</span>
                  </div>
                );
              } else {
                return <span key={index}>{char}</span>;
              }
            })}
          </div>
        ) : (
          <textarea
            placeholder="Type something and watch it burn..."
            ref={textareaRef}
            onChange={(e) => {
              function expandtext(expand) {
                expand.style.height = "auto";
                expand.style.height = expand.scrollHeight + "px";
              }
              setText(e.target.value);
              expandtext(e.target);
            }}
            rows={1}
            cols={45}
            style={{
              fontSize: "2rem",
              backgroundColor: "inherit",
              color: "inherit",
              marginBottom: "1rem",
            }}
            spellCheck={false}
          />
        )}
        {!burning && text.length > 0 && (
          <button className="flame-button" onClick={() => burn(text)}>
            Burn
          </button>
        )}
      </header>
    </div>
  );
}

export default App;
