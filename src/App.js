import logo from "./logo.png";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Weather />
      </header>
    </div>
  );
}

export default App;
