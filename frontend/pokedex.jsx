import React from 'react'
import ReactDOM from 'react-dom'
import Redux from 'redux'
import * as APIUtil from './util/api_util'
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions'
import configureStore from './store/store'
import selectAllPokemon from './reducers/selectors'
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root")
    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, root)
})