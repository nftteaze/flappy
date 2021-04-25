import initialState from "./initialState";
import * as types from "../actions/actionTypes";
import game from "./game";

const bird = (state = initialState.bird, action) => {
    switch (action.type) {
        case types.FALL:
            return { ...state, y: state.y + 20, r: 0 };
        case types.FLY:
            console.log({ state });
            return { ...state, y: state.y - 100, r: -30 };
        case types.GAME_OVER:
            return initialState.bird;
        default:
            return state;
    }
};

export default bird;
