import initialState from "./initialState";
import * as types from "../actions/actionTypes";

const game = (state = initialState.game, action) => {
    switch (action.type) {
        case types.START:
            return { ...state, status: "playing" };
        case types.GAME_OVER:
            return { ...state, status: "game-over" };
        default:
            return state;
    }
};

export default game;
