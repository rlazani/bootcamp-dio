//import logo from './logo.svg';
import './App.css';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

function sum(a, b) {
  return a + b;
}


function primeiroJS() {
  return (
    <div className="teste">
      Bruno Carneiro - introdução react
      <h1>Soma: {sum(5 ,5)}</h1>
    </div>
  )
}

const App = () => {

  return (
    <div className="App">
      {primeiroJS()}
    </div>
  )
}




export default App;

