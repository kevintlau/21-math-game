import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

  const [card1, setcard1] = useState(0);
  const [card2, setcard2] = useState(0);
  const [card3, setcard3] = useState(0);
  const [card4, setcard4] = useState(0);
  const [formula, setformula] = useState("test");

  let deck = [];

  for (let i = 1; i < 11; i++) {
    for (let j = 0; j < 4; j++) {
      deck.push(i);
    }
  }
  for (let k = 0; k < 3; k++) {
    for (let l = 0; l < 4; l++) {
      deck.push(10);
    }
  }

  let nCards = 4;
  
  function generateCards() {
    let tempDeck = deck;
    setcard1(deck[Math.floor(Math.random()*deck.length)]);
    setcard2(deck[Math.floor(Math.random()*deck.length)]);
    setcard3(deck[Math.floor(Math.random()*deck.length)]);
    setcard4(deck[Math.floor(Math.random()*deck.length)]);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {card1} <br />
          {card2} <br />
          {card3} <br />
          {card4} <br />

          <button onClick={generateCards}>Generate cards</button>
          <br /> <br />

          <input value={formula} onChange={e => setformula(e.target.value)} />
          <br />
          <button onClick={() => alert(eval(formula))}>Evaluate!</button>
          <br />

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

export default App;
