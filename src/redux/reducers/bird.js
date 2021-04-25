import initialState from './initialState'
import * as types from '../actions/actionTypes'

const bird = (state = initialState.bird, action) => {
    switch (action.type) {
        case types.FALL:
            return {...state, y: state.y + 20, r: 0}
        case types.FLY:
            return {...state, y: state.y - 50, r: -30}
        case types.GAME_OVER:
            return initialState.bird
        default: 
            return initialState.bird
    }
} 

export default bird;