import { useState } from "react";
import Todo from "./components/Todo";
import InlineComponent from "./components/InlineCOmponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Todo />
      <InlineComponent />
    </div>
  );
}

export default App;
