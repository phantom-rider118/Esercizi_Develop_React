import "./App.css";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <>
      <div className="App">
        <Welcome name="John" age={30} />
      </div>
    </>
  );
}

export default App;
