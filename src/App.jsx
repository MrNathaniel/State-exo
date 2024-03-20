import { useState } from "react";
import image from "./img/calculator.png";
import title from "./img/title.png";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <img src={image} />
      <img src={title} />
      <button onClick={() => setCounter(counter + 1)}></button>

      <button onClick={() => setCounter(counter - 1)}></button>

      <button onClick={() => setCounter(counter === 0)}></button>
    </>
  );
}

export default App;
