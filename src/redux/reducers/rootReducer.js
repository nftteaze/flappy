import { combineReducers } from "redux";

import bird from "./bird";
import game from "./game";
import pipe from "./pipe";

const rootReducer = combineReducers({
    bird,
    game,
    pipe,
});

export default rootReducer;
