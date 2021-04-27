import * as types from "./actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    return (dispatch, getState) => {
        dispatch({ type: types.GET_USER_NAME, username });
    };
};
