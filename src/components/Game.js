import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fly } from "../redux/actions/bird";
import { start, deleteInterval, resetScore } from "../redux/actions/game";
import { addScore, getScores } from "../redux/actions/leaderboard";

import Bird from "./Bird";
import Pipe from "./Pipe";
import Foreground from "./Foreground";
import Score from "./Score";
import Leaderboard from "./Leaderboard";
import UserForm from "./UserForm";

import BgImg from "../images/bg.png";

const Game = ({
    status,
    start,
    fly,
    username,
    score,
    addScore,
    getScores,
    resetScore,
}) => {
    if (status === "game-over") {
        deleteInterval();
        addScore();
        resetScore();
        getScores();
    }

    useEffect(() => {
        const handleKeyPress = (e) => {
            if ((e.keyCode === 32 || e.type === "click") && username !== null) {
                fly();
            }

            if (status !== "playing" && username !== null) {
                start();
            }
        };
        document.addEventListener("keypress", handleKeyPress);
        document.addEventListener("click", handleKeyPress);
    }, [username]);

    const gameStyle = {
        position: "relative",
        width: 288,
        height: 512,
        background: `url(${BgImg})`,
        overflow: "hidden",
        borderRadius: 10,
    };

    return (
        <>
            <div style={{ position: "absolute", display: "flex" }}>
                <div style={gameStyle}>
                    <Bird />
                    <Foreground />
                    <Pipe />
                    <Score />
                    {status === "" && !username && <UserForm />}
                </div>
                <Leaderboard />
            </div>
        </>
    );
};

const mapStateToProps = ({ game, db }) => ({
    status: game.status,
    score: game.score,
    username: db.username,
});

const mapDispatchToProps = { start, fly, getScores, addScore, resetScore };

export default connect(mapStateToProps, mapDispatchToProps)(Game);
