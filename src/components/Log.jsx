export default function Log({ turns }) {
  return (
    <ol id="log">
      <h3>Game Log</h3>
      {turns.map((turn) => {
        return (
          <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected {turn.square.row}, {turn.square.col}
          </li>
        );
      })}
    </ol>
  );
}
