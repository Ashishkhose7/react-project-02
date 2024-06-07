import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is React Project
        </p>
        <div>
        <p>This is para added from github</p>
        <ul>
          <li>List1</li>
          <li>List2</li>
          <li>List3</li>
        </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
