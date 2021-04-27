import { combineReducers } from "redux";

import bird from "./bird";
import game from "./game";
import pipe from "./pipe";
import db from "./db";

const rootReducer = combineReducers({
    bird,
    game,
    pipe,
    db,
});

export default rootReducer;
