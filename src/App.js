import logo from './logo.svg';
import './App.css';

/**
 * 
 * @returns Home page
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
			Let's not learn React because we already know it!
        </a>
      </header>
    </div>
  );
}

export default App;
