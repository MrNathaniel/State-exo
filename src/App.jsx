import { useState } from "react";
import image from "./img/calculator.png";
import title from "./img/title.png";
import Compteur from "./img/Compteur.png";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <img src={image} />
      <img src={title} />

      <div>
        <button onClick={() => setCounter(counter - 1)}> - </button>

        <button onClick={() => setCounter(counter + 1)}> + </button>

        <button onClick={() => setCounter(0)}> Reset </button>
      </div>

      <div>{counter}</div>
    </>
  );
}

export default App;
