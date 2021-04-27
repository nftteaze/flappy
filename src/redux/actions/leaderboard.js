import * as types from "./actionTypes";
import firebase from "../../Firebase";

const ref = firebase.firestore().collection("leaderboard");

export function getScoresDispatch(scores) {
    return { type: types.GET_SCORE, scores };
}

export function getScores() {
    return (dispatch, getState) => {
        let scores;
        ref.get().then((scoreList) => {
            scores = scoreList.docs.map((doc) => doc.data());
            dispatch(getScoresDispatch(scores));
        });
    };
}

export function addScoreDispatch() {
    return { type: types.ADD_SCORE };
}

export function addScore() {
    return (dispatch, getState) => {
        const username = getState().db.username;
        const score = getState().game.score;
        const newRecord = { username, score };

        ref.add(newRecord).catch((error) => {
            throw Error(error);
        });
    };
}
