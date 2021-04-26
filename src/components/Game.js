import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fly } from "../redux/actions/bird";
import { start, deleteInterval } from "../redux/actions/game";

import Bird from "./Bird";
import Pipe from "./Pipe";
import Foreground from "./Foreground";
import Score from "./Score";

import BgImg from "../images/bg.png";

const Game = ({ status, start, fly }) => {
    if (status === "game-over") {
        deleteInterval();
    }

    useEffect(() => {
        const handleKeyPress = (e) => {
            console.log(e);
            if (e.keyCode === 32 || e.type === "click") {
                fly();
            }

            if (status !== "playing") {
                start();
            }
        };
        document.addEventListener("keypress", handleKeyPress);
        document.addEventListener("click", handleKeyPress);
    }, []);

    const gameStyle = {
        position: "relative",
        margin: "auto",
        width: 288,
        height: 512,
        background: `url(${BgImg})`,
        overflow: "hidden",
    };

    return (
        <div style={gameStyle}>
            <Bird />
            <Foreground />
            <Pipe />
            <Score />
        </div>
    );
};

const mapStateToProps = ({ game }) => ({ status: game.status });

const mapDispatchToProps = { start, fly };

export default connect(mapStateToProps, mapDispatchToProps)(Game);
