import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function pipe(state = initialState.pipe, action) {
    switch (action.type) {
        case types.RUNNING:
            if (!state.pipes.length) {
                return state;
            }

            return { ...state, x: state.x - 10 };

        case types.GENERATE:
            const topHeight = Math.round(Math.random() * 200) + 40;

            return {
                ...state,
                pipes: [...state.pipes, { topHeight }],
            };

        case types.GAME_OVER:
            return initialState.pipe;

        default:
            return state;
    }
}

export default pipe;
