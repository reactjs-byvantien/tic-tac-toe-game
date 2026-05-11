import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
function App() {
  const [activePlayer, setActivePlayer] = useState("x");
  const handleSelectSquare = () => {
    setActivePlayer((currentPlayer) => (currentPlayer === "x" ? "o" : "x"));
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
          activePlayerSymbol={activePlayer}
        />
      </div>
      LOG
    </main>
  );
}

export default App;
