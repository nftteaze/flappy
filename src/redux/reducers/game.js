import initialState from './initialState';
import * as types from '../actions/actionTypes'

const game = (state = initialState.game, action) => { 
    switch (action.type){
        case types.GAME_OVER: 
            return initialState.game
        default: 
            return state
    }
}

export default game;