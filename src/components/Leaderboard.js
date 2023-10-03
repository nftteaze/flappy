import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "./Leaderboard.css";

const Leaderboard = ({ status, scores }) => {
    let [sortedScores, setSortedScores] = useState([]);
    useEffect(() => {
        console.log("this is called");
        setSortedScores(
            scores
                .sort((a, b) => b.score - a.score)
                .filter((e, index) => index % 2 === 0)
                .slice(0, 5)
        );
    }, [scores]);

    return (
        <>
            <div class="container">
                <div class="leaderboard">
                    <div class="head">
                        <i class="fas fa-crown"></i>
                        <h1>&nbsp;Highest Scores </h1>
                    </div>
                    <div class="body">
                        <ol>
                            {sortedScores?.map((score, id) => {
                                return (
                                    <li key={`scores-${id}`}>
                                        <mark>{score.username}</mark>
                                        <small>{score.score}</small>
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = ({ game, db }) => ({
    status: game.status,
    scores: db.scores,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);