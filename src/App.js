import './App.css';
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Delft"/>
      </div>
    </div>
  );
}


