import React from 'react';
import PokemonIndexItem from './pokemon_index_item'

class PokemonIndex extends React.Component {
    render(){
        return (
            <ul>
                {this.props.pokemon.map((poke, idx) => <PokemonIndexItem poke={poke} key={idx}/>)}
            </ul>
        )
    }

    componentDidMount(){
        this.props.requestAllPokemon();
    }
}

export default PokemonIndex;