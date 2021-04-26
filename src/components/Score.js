import React from "react";
import { connect } from "react-redux";

const Score = ({ score }) => {
    return (
        <div
            style={{
                position: "absolute",
                top: 50,
                left: 115,
                zIndex: 10,
                width: 100,
                height: 100,
            }}
        >
            <span
                style={{
                    fontFamily: "Zen Dots",
                    fontSize: 50,
                    color: "white",
                }}
            >
                {score}
            </span>
        </div>
    );
};

const mapStateToProp = ({ game }) => ({
    score: game.score,
});

export default connect(mapStateToProp, null)(Score);
