import "./App.css";
import Preloader from "./components/Preloader/Preloader";
import Weather from "./Pages/Weather";

function App() {
  return (
    <>
      <div className="App">
        <div className="image">
          <header className="App-header">
            <Preloader />
            <Weather />
          </header>
        </div>
      </div>
    </>
  );
}

export default App;
