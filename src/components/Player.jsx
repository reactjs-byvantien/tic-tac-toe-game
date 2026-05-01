import { useState } from "react";
const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    // setIsEditing(isEditing ? false : true);
    // setIsEditing(!isEditing);
    // because react schedule state update, you can not use the current value of isEditing
    setIsEditing((editing) => !editing);
  };

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" required defaultValue={name} />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
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
