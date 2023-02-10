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


  function onHandleCardClick(id) {
    setScoreboard(prevState => prevState + 1);
    
    if (clicked.includes(id)) {
      clicked.length !== 12 ? alert('You lost'): alert('You won!');
      resetGame();
    } else {
      clicked.push(id);
      setPokemons(prevState => shuffleArray(prevState));
    }
  }

  function resetGame() {
    if (maxResult < scoreBoard) {
      setMaxResult(scoreBoard);
    }
    setScoreboard(0);
    setClicked([]);
    setPokemons(pokemons);
  }

  return (
    <div className="App">
      <Header score={scoreBoard} max={maxResult} />
      <Main pokemons={pokemons} handleCardClick={onHandleCardClick} />
    </div>
  );
}

export default App;