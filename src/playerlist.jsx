import React from "react";
import players from "./players.js";
import Player from "./player.jsx";

const PlayersList = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        FIFA Player Cards
      </h1>
      <div className="container">
        {players.map((play) => (
          <Player key={play.id} player={play} />
        ))}
      </div>
    </div>
  );
};
export default PlayersList;
