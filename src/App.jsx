import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
function App() {
  const [activePlayer, setActivePlayer] = useState("x");
  const [gameTurns, setGameTurns] = useState([]);
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
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === "x" ? "o" : "x",
    );
    setGameTurns((prevTurns) => {
      let currentPlayer = "x";
      if (prevTurns.length > 0 && prevTurns[0].player === "x") {
        currentPlayer = "o";
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };
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
      <Log />
    </main>
  );
}

export default App;
