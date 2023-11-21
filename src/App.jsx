import "./App.css";
import Counter from "./components/Counter/Counter";
import Greeting from "./components/Greeting/Greeting";

function App() {
  return (
    <div>
      <Counter counter={0} step={1} />
      <Counter counter={2} step={2} />
      <Counter counter={3} step={3} />
      <Greeting name={name} />
    </div>
  );
}

export default App;
