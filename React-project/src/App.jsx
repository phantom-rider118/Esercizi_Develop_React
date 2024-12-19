import "./App.css";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <>
      <div className="App">
        <Welcome name="Mario" age={25} />
      </div>
    </>
  );
}

export default App;
