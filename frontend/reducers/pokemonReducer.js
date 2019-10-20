import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions'


const initialState = [];
const pokemonReducer = (state=initialState, action) => {
    switch(action.type) {
        case RECEIVE_ALL_POKEMON:
            const newState = action.pokemon
            return newState
        default:
            return state
    }
    
}

export default pokemonReducer;