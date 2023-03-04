import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/haleytoye/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code{" "}
          </a>
          by{" "}
          <a
            href="https://www.shecodes.io/graduates/53070-haley-toye"
            target="_blank"
            rel="noreferrer"
          >
            Haley Toye{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
