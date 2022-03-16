import logo from "./logo.svg";
import "./App.css";
import Saludar from "./components/Saludar";

function App() {
  const user = {
    nombre: "Albert Sarda",
    edad: 32,
    color: "verde",
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo={user} />
        {/* <Saludar name="Eva Garcia" edad="34" /> */}
      </header>
    </div>
  );
}

export default App;
