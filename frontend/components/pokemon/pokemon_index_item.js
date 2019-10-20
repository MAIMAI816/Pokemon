import React from 'react';

class PokemonIndexItem extends React.Component {
    render() {
        return (
            <li>
                <p>{this.props.poke.name}</p>
                <img src={this.props.poke.image_url}></img>
            </li>
        )
    }

}

export default PokemonIndexItem;