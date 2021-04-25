import game from "../reducers/game";
import * as types from "./actionTypes";
import { fall } from "./bird";
import { running, generate } from "./pipe";

let gameLoop;
let pipeMoving;

export function deleteInterval() {
    clearInterval(gameLoop);
    clearInterval(pipeMoving);
}

export function start() {
    return (dispatch, getState) => {
        const { status } = getState().game;

        if (status !== "playing") {
            gameLoop = setInterval(() => {
                dispatch(fall());
            }, 100);

            pipeMoving = setInterval(() => {
                dispatch(running());

                check(dispatch, getState);

                if (getState().pipe.x === -50) {
                    dispatch(generate());
                }
            }, 40);

            dispatch({ type: "START" });
        }
    };
}

const check = (dispatch, getState) => {
    const state = getState();

    const birdX1 = 120;
    const birdY1 = state.bird.y - 26;

    const birdX2 = 120 + 38;
    const birdY2 = state.bird.y;

    const pipeLeft = state.pipe.x;
    const pipeRight = pipeLeft + 52;

    const topBottom = state.pipe.topHeight;
    const bottomTop = topBottom + 100;

    if (birdY2 > 512 - 108) {
        dispatch({ type: types.GAME_OVER });
    }

    if (pipeLeft === 80) {
        console.log("Before");
        dispatch({ type: types.SCORE });
        console.log("After");
    }

    if (
        pipeLeft <= birdX2 &&
        birdX2 <= pipeRight &&
        (birdY2 <= topBottom - 50 || birdY2 >= bottomTop)
    ) {
        setTimeout(() => {
            alert("You are die.");
            dispatch({ type: types.GAME_OVER });
        }, 30);
    }
};
