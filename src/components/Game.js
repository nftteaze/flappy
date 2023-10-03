import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fly } from "../redux/actions/bird";
import { start, deleteInterval, resetScore } from "../redux/actions/game";

import Bird from "./Bird";
import Pipe from "./Pipe";
import Foreground from "./Foreground";
import Score from "./Score";
import UserForm from "./UserForm";

import BgImg from "../images/bg.png";

const Game = ({ status, start, fly, username, resetScore }) => {
    if (status === "game-over") {
        deleteInterval();
        resetScore();
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

        // Clean up event listeners when the component unmounts
        return () => {
            document.removeEventListener("keypress", handleKeyPress);
            document.removeEventListener("click", handleKeyPress);
        };
    }, [username, status, fly, start]);

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
            </div>
        </>
    );
};

const mapStateToProps = ({ game, db }) => ({
    status: game.status,
    username: db.username,
});

const mapDispatchToProps = { start, fly, resetScore };

export default connect(mapStateToProps, mapDispatchToProps)(Game);
