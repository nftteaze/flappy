import initialState from "./initialState";
import * as types from "../actions/actionTypes";

const db = (state = initialState.db, action) => {
    switch (action.type) {
        case types.GET_USER_NAME:
            return { ...state, username: action.username };
        case types.GET_SCORE:
            return { ...state, scores: action.scores };
        case types.ADD_SCORE:
            return state;
        default:
            return state;
    }
};

export default db;
