import logo from './logo_bnc.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="250" />
        <p>
          A comunidade dev que todos querem estar.
        </p>
        <a
          className="App-link"
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youtube Channel
        </a>
      </header>
    </div>
  );
}

export default App;
