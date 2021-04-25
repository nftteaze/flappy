import React from "react";
import { connect } from "react-redux";

import BirdImg from "../images/bird.png";

const Bird = ({ y, r }) => {
    const birdStyle = {
        position: "absolute",
        zIndex: 10,
        top: y,
        left: 120,
        width: 38,
        height: 26,
        background: `url(${BirdImg})`,
        transform: `rotate(${r}deg)`,
        transition: "transform 100ms, top 300ms",
    };

    return <div style={birdStyle} />;
};

const mapStateToProps = ({ bird }) => ({
    y: bird.y,
    r: bird.r,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Bird);
