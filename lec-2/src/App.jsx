import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div>
      <h1 className="text-blue-500 bg-green-500 text-5xl">Hello World</h1>
      </div>
    </>
  );
}

export default App;
