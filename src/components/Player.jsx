import { useState } from "react";
const Player = ({ initialName, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    // setIsEditing(isEditing ? false : true);
    // setIsEditing(!isEditing);
    // because react schedule state update, you can not use the current value of isEditing
    setIsEditing((editing) => !editing);
  };
  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      {/* <span>
        {isEditing ? <input type="text" required /> : name}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button
        onClick={() => {
          setIsEditing(true);
        }}
      >
        Edit
      </button> */}
    </li>
  );
};
export default Player;
