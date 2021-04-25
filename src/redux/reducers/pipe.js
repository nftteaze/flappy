import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function pipe(state = initialState.pipe, action) {
    switch (action.type) {
        case types.RUNNING:
            if (state.x < -100) {
                return { ...state, x: 400 };
            }

            return { ...state, x: state.x - 5 };

        case types.GENERATE:
            const topHeight = Math.round(Math.random() * 200) + 40;

            return {
                ...state,
                topHeight,
            };

        case types.GAME_OVER:
            return initialState.pipe;

        default:
            return state;
    }
}

export default pipe;
