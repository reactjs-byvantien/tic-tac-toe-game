import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { PLAYERS } from "./constants/UsernamePlayer";
import {
  deriveActivePlayer,
  deriveGameBoard,
  deriveWinner,
} from "./utils/derive";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length == 9 && !winner;

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };
  const handleRestart = () => setGameTurns([]);
  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  };
  const driverObj = driver({
    showProgress: true,
    steps: [
      {
        element: "#players",
        popover: {
          title: "Players",
          description: "Current players here",
        },
      },
      {
        element: "#game-board",
        popover: {
          title: "Game Board",
          description: "Select a square to make your move",
        },
      },
      {
        element: "#log",
        popover: {
          title: "Log",
          description: "View the game log",
        },
      },
      {
        element: "#game-over",
        popover: {
          title: "Game Over",
          description: "See the result and start a new game",
        },
      },
    ],
  });
  driverObj.drive();
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={players.x}
            symbol="x"
            isActive={players.x === "x"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={players.o}
            symbol="o"
            isActive={players.o === "o"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
