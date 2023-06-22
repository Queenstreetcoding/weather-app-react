import './App.css';
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Delft"/>
        <footer>This app is coded by Cindy Verboog and is <a href="https://github.com/Queenstreetcoding/weather-app-react" target="_blank" rel="noopener noreferrer">open-sourced</a> on GitHub</footer>
      </div>
    </div>
  );
}


