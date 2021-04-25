import React, { useState, useEffect } from "react";

import TopPipeImg from "../images/pipe-top.png";
import BottomPipeImg from "../images/pipe-bottom.png";
import { connect } from "react-redux";

const Pipe = ({ x, topHeight }) => {
    const topPipeStyle = {
        position: "absolute",
        top: 0,
        left: x,
        width: 52,
        height: topHeight,
        background: `url(${TopPipeImg})`,
        backgroundPosition: "bottom",
    };

    const bottomPipeStyle = {
        position: "absolute",
        top: topHeight + 100,
        left: x,
        width: 52,
        height: 512 - topHeight - 100,
        background: `url(${BottomPipeImg})`,
    };

    return (
        <div style={{ position: "relative" }}>
            <div style={topPipeStyle} />
            <div style={bottomPipeStyle} />
        </div>
    );
};

const mapStateToProps = ({ pipe }) => ({
    x: pipe.x,
    topHeight: pipe.topHeight,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Pipe);
