import {  useState } from "react";
import "./style.css";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {

  const [pokemons, setPokemons] = useState([
    "pidgey",
    "pidgeotto",
    "pidgeot",
    "rattata",
    "raticate",
    "spearow",
    "fearow",
    "ekans",
    "arbok",
    "pikachu",
    "raichu",
    "sandshrew"
   ]);
        
  const [scoreBoard, setScoreboard] = useState(0);
  const [maxResult, setMaxResult] = useState(0);

  const [clicked, setClicked] = useState([]);
  const [isOver, setIsOver] = useState(false);
  const [status, setStatus] = useState("");

  function shuffleArray(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  const isGameOver = () => {
    if (clicked.length === 12) {
      setStatus("You won!")
      setIsOver(true);
    }
  }

  function onHandleCardClick(id) {
    if (clicked.includes(id)) {
      setStatus("You lost!");
      setIsOver(true);
    } else {
      clicked.push(id);
      setScoreboard(clicked.length);
      isGameOver();
      setPokemons(prevState => shuffleArray(prevState));
    }
  }

  function resetGame() {
    setIsOver(false);
    if (maxResult < scoreBoard) {
      setMaxResult(clicked.length);
    }
    setScoreboard(0);
    setClicked([]);
    setPokemons(pokemons);
  }

  return (
    <div className="App">
      {isOver && <div className="game-over">
        <h2>{status}</h2>
        <button onClick={resetGame} >Restart Game!</button>
      </div>}
      <Header score={scoreBoard} max={maxResult} />
      <Main pokemons={pokemons} handleCardClick={onHandleCardClick} />
    </div>
  );
}

export default App;