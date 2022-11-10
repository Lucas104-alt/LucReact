import logo from './logo.svg';
import './App.css';
import PrimerComponemte from './Componets/PrimerComponemte';
import SegundoComponente from './Componets/SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          LucReact
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <PrimerComponemte/>
        <SegundoComponente/>
      </header>
    </div>
  );
}

export default App;
