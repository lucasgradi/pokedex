import React, { Component } from 'react'
import axios from 'axios';

import CartaPokemon from "./CartaPokemon";

export default class Pokemones extends Component {


    state = {
        pokemones: [],
    }

    async componentDidMount() {
        //const res = await fetch('https://pokeapi.co/api/v2/pokemon')
        //const data = await res.json();
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`)


        this.setState({ pokemones: res.data['results'] })


        //console.log(res.data['results'])
    }

    render() {
        return (
            < div className="row" >
                {
                    this.state.pokemones
                        .filter(pokemon => {
                            return (pokemon.name.toLowerCase().indexOf(this.props.busqueda.toLowerCase()) >= 0)
                        })

                        .map(pokemon => {
                            return (
                                <CartaPokemon key={pokemon.name} nombre={pokemon.name} urlPokemon={pokemon.url} />
                            )
                        })

                }



            </div >

        )
    }
}
