import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  return (
    <div className="background">
      <div className="box">
        <div className="left-box">
          <h3>Store data</h3>
          <label htmlFor="name"> Name </label>
          <input type="text" placeholder="Type your email" />
          <label htmlFor="email"> Email </label>
          <input type="email" placeholder="Type your email" />
          <label htmlFor="number"> Number </label>
          <input type="number" placeholder="Type your number" />
          <button>Store my data</button>
        </div>
        <div className="right-box"></div>
      </div>
    </div>
  );
}

export default App;
