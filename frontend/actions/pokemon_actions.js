export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON"
import * as APIUtil from '../util/api_util'

const receiveAllPokemon = (pokemon) => {
    return ({
        type: RECEIVE_ALL_POKEMON,
        pokemon
    })
}

export const requestAllPokemon = () => (dispatch) => {
        APIUtil.fetchAllPokemon().then(
            pokemon => dispatch(receiveAllPokemon(pokemon))
    )
}


export default { receiveAllPokemon, requestAllPokemon }

