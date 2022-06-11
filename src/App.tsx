import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Options from "./components/Options/Options";
import Reps from "./components/Reps/Reps";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Options />
      <Reps />
    </div>
  );
}

export default App;
