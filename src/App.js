import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  function handleSubmission(e) {
    console.log(e.target.value);
  }
  return (
    <div className="background">
      <div className="box">
        <div className="left-box">
          <h3>Store data</h3>
          <label htmlFor="name"> Name </label>
          <input type="text" name="email" placeholder="Type your name" />
          <label htmlFor="email"> Email </label>
          <input type="email" name="email" placeholder="Type your email" />
          <label htmlFor="number"> Number </label>
          <input type="number" name="num" placeholder="Type your number" />
          <button onClick={handleSubmission}>Store my data</button>
        </div>
        <div className="right-box">
          <button>Get Data</button>
          <button>Edit Data</button>
        </div>
      </div>
    </div>
  );
}

export default App;
