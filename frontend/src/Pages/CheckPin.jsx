import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../Pages/Locker.css"

export const CheckPin = () => {
const [password, setPassword] = useState("");
  
  const handleClick = (num) => {
    if (password.length < 6) {
      setPassword((prev) => prev + num);
    }
  };

  const handleClear = () => {
    setPassword("");
  };

  const handleSubmit = () => {
    alert("Entered Password: " + password);
  };

  // 🔥 Keyboard Support
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Numbers (0–9)
      if (/^[0-9]$/.test(e.key)) {
        setPassword((prev) =>
          prev.length < 6 ? prev + e.key : prev
        );
      }

      // Backspace
      if (e.key === "Backspace") {
        setPassword((prev) => prev.slice(0, -1)); 
      }

      // Enter key
      if (e.key === "Enter") {
        handleSubmit();
      }

      // Escape = clear
      if (e.key === "Escape") {
        handleClear();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [password]);

  return (
    <div className="locker-container">
      <div className="locker-box">
        <h2 className="title">Secure Locker</h2>

        <input
          type="password"
          value={password}
          readOnly
          placeholder="Enter Password"
          className="display"
        />

        <div className="keyboard">
          {[1,2,3,4,5,6,7,8,9,"C",0,"✔"].map((key, index) => (
            <button
              key={index}
              className={`key ${key === "✔" ? "enter" : ""} ${key === "C" ? "clear" : ""}`}
              onClick={() => {
                if (key === "C") handleClear();
                else if (key === "✔") handleSubmit();
                else handleClick(key);
              }}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
