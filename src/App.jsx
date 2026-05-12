import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning_combinations";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "x";
  if (gameTurns.length > 0 && gameTurns[0].player === "x") {
    currentPlayer = "o";
  }
  return currentPlayer;
}
function App() {
  // const [activePlayer, setActivePlayer] = useState("x");
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  console.log(gameTurns);

  const handleSelectSquare = (rowIndex, colIndex) => {
    // const currentPlayer = activePlayer;

    // setActivePlayer(currentPlayer === "x" ? "o" : "x");

    // setGameTurns((prevTurns) => [
    //   {
    //     square: { row: rowIndex, col: colIndex },
    //     player: currentPlayer,
    //   },
    //   ...prevTurns,
    // ]);
    // setActivePlayer((currentActivePlayer) =>
    //   currentActivePlayer === "x" ? "o" : "x",
    // );

    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };
  console.log("objectify then:", gameTurns);
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="x"
            isActive={activePlayer === "x"}
          />
          <Player
            initialName="Player 2"
            symbol="o"
            isActive={activePlayer === "o"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
          // activePlayerSymbol={activePlayer}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
