import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fly } from "../redux/actions/bird";
import { start } from "../redux/actions/game";

import Bird from "./Bird";
import Pipe from "./Pipe";
import Foreground from "./Foreground";

import BgImg from "../images/bg.png";

const Game = ({ status, start, fly }) => {
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.keyCode === 32) {
                fly();
            }

            if (status !== "playing") {
                start();
            }
            console.log({ status });
        };
        document.addEventListener("keypress", handleKeyPress);
    }, []);

    const gameStyle = {
        position: "relative",
        width: 288,
        height: 512,
        background: `url(${BgImg})`,
        // overflow: "hidden",
    };

    return (
        <div style={gameStyle}>
            <Bird />
            <Foreground />
            <Pipe />
        </div>
    );
};

const mapStateToProps = ({ game }) => ({ status: game.status });

const mapDispatchToProps = { start, fly };

export default connect(mapStateToProps, mapDispatchToProps)(Game);
