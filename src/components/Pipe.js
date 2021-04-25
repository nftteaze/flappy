import React from "react";

import TopPipeImg from "../images/pipe-top.png";
import BottomPipeImg from "../images/pipe-bottom.png";
import { connect } from "react-redux";

const Pipe = ({ x, pipes }) => {
    const topPipeStyle = (topHeight, x, i) => ({
        position: "absolute",
        top: 0,
        left: x + i * 200,
        width: 52,
        height: topHeight,
        background: `url(${TopPipeImg})`,
        backgroundPosition: "bottom",
        transition: "left 300ms",
    });

    const bottomPipeStyle = (topHeight, x, i) => ({
        position: "absolute",
        top: topHeight + 100,
        left: x + i * 200,
        width: 52,
        height: 512 - topHeight - 100,
        background: `url(${BottomPipeImg})`,
        transition: "left 300ms",
    });

    return (
        <div style={{ position: "relative" }}>
            {pipes.map(({ topHeight }, i) => (
                <div key={`pipe-${i}`} style={{ position: "relative" }}>
                    <div style={topPipeStyle(topHeight, x, i)} />
                    <div style={bottomPipeStyle(topHeight, x, i)} />
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = ({ pipe }) => ({
    x: pipe.x,
    pipes: pipe.pipes,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Pipe);
