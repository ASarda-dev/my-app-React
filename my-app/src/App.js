import logo from "./logo.svg";
import "./App.css";
import Saludar from "./components/Saludar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar name="Albert Sarda Ruiz" edad="32" />
        <Saludar name="Eva Garcia" edad="34" />
      </header>
    </div>
  );
}

export default App;
