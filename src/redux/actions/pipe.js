import * as types from "./actionTypes";

export function generate() {
    return { type: types.GENERATE };
}

export function running() {
    return { type: types.RUNNING };
}
