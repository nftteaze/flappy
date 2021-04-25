import * as types from "./actionTypes";
import { fall } from "./bird";
import { running, generate } from "./pipe";

let gameLoop;
let pipeGenerator;

export function start() {
    return (dispatch, getState) => {
        const { status } = getState().game;

        if (status !== "playing") {
            gameLoop = setInterval(() => {
                dispatch(fall());
                dispatch(running());
            }, 100);
        }

        setInterval(() => {
            dispatch(generate());
        }, 5000);

        dispatch({ type: "START" });
    };
}
