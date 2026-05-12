import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning_combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "x";
  if (gameTurns.length > 0 && gameTurns[0].player === "x") {
    currentPlayer = "o";
  }
  return currentPlayer;
}
function App() {
  // const [activePlayer, setActivePlayer] = useState("x");
  // const [hasWinner, setHasWinner] = useState(false);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  console.log(gameTurns);

  let gameBoard = initialGameBoard;
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

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
        {winner && <p>You won, {winner}!</p>}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          board={gameBoard}
          // activePlayerSymbol={activePlayer}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
