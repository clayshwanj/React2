import React from "react";
import PropTypes from "prop-types";

const Player = ({ player }) => {
  const cardStyle = {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    marginBottom: "20px",
    textAlign: "center",
  };

  const imageStyle = {
    borderRadius: "10px",
    maxHeight: "150px",
    objectFit: "cover",
  };

  console.log(player);

  return (
    <div style={{ cardStyle }}>
      <img src={player.image} alt={name} style={{ imageStyle }} />
      <div>
        <div>{player.name}</div>
        <div>
          <strong>Team:</strong> {player.team}
          <br />
          <strong>Nationality:</strong> {player.nationality}
          <br />
          <strong>Jersey Number:</strong> {player.jerseyNumber}
          <br />
          <strong>Age:</strong> {player.age}
        </div>
      </div>
    </div>
  );
};

// Player.propTypes = {
//   name: PropTypes.string,
//   team: PropTypes.string,
//   nationality: PropTypes.string,
//   jerseyNumber: PropTypes.number,
//   age: PropTypes.number,
//   image: PropTypes.string,
// };

export default Player;
