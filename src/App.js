import logo from './logo.svg';
import './App.css';
import TestComponent from './TestComponent';
import Button from '@material-ui/core/Button';
import 'fontsource-roboto';

function App() {
  return (
    <div className="App">
      <TestComponent />
      <h1>lets build something else</h1>
      <hr />
      <h1>This is an hr, how do I get the image on?</h1>
      <Button variant="outlined" color="secondary">
  Secondary
</Button>
     
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I built this basic react app. 100 days of code.   Day 1 of 100.  
        </p>
        <h1>Bob Saget Raped and Killed a Girl in 1990, but nobody talks about it.</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Not sure what I will make, probably nothing of value.  
        </a>
      </header> */}
    </div>
    
 
  );
  
}

// Lets build a new page next.
export default App;
