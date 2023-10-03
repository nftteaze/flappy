import React from "react";
import "./Leaderboard.css"; // Import Leaderboard styles

const Leaderboard = () => {
  // Sample leaderboard data
  const leaderboardData = [
    { name: "Player 1", score: 100 },
    { name: "Player 2", score: 90 },
    { name: "Player 3", score: 80 },
    // Add more leaderboard data as needed
  ];

  return (
    <div className="container">
      <div className="leaderboard">
        <div className="head">
          <h1>Leaderboard</h1>
        </div>
        <div className="body">
          <ol>
            {leaderboardData.map((player, index) => (
              <li key={index}>
                <mark>{player.name}</mark>
                <span>{player.score}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="blog">
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          Blog Post
        </a>
      </div>
    </div>
  );
};

export default Leaderboard;
