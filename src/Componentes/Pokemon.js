import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

import './Pokemon.css';
import axios from 'axios';
import Carousel from "nuka-carousel";

export default class Pokemon extends Component {

    state = {
        id: [],
        nombre: [],
        imgDefault: [],
        hp: [],
        atk: [],
        def: [],
        spAtk: [],
        spDef: [],
        speed: [],
        habilidad: [],
        peso: [],
        altura: [],
        habitat: [],
        elementos: []
    }


    async componentDidMount() {
        const { id } = this.props.match.params;
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

        const desc = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)



        console.log(res)

        this.setState({
            id: id,
            nombre: res.data.name,
            imgDefault: res.data.sprites.front_default,
            hp: res.data.stats[0].base_stat,
            atk: res.data.stats[1].base_stat,
            def: res.data.stats[2].base_stat,
            spAtk: res.data.stats[3].base_stat,
            spDef: res.data.stats[4].base_stat,
            speed: res.data.stats[5].base_stat,
            habilidad: res.data.abilities[0].ability.name,
            peso: res.data.weight,
            altura: res.data.height,
            habitat: desc.data.habitat.name,
            descripcion: desc.data.flavor_text_entries[0].flavor_text,
            elementos: res.data.types.map((type) => type.type.name).join().split(","),
            imgShiny: res.data.sprites.front_shiny
        });
        const types = this.state.elementos.map(async elemento => {
            return await axios.get(`https://pokeapi.co/api/v2/type/${elemento}`)
        })

        console.log(types)
    }

    render() {
        return (
            <div className="rowPokemon">
                <div className="nombre">
                    {this.state.nombre}
                </div>

                <Card
                    className="Carta text-dark"
                >
                    <Card.Body>
                        <div className="columna izquieda">
                            <div className="stats">
                                <div className="container-stat">
                                    <div className="baseStat hp" style={{ width: `${this.state.hp / 2.5}%`, backgroundColor: '#9BEC60' }}>
                                        HP {this.state.hp}
                                    </div>
                                </div>
                                <div className="container-stat">

                                    <div className="baseStat atk" style={{ width: `${this.state.atk / 2}%`, backgroundColor: '#EC6060' }}>
                                        ATK {this.state.atk}
                                    </div>
                                </div>

                                <div className="container-stat">
                                    <div className="baseStat def" style={{ width: `${this.state.def / 2}%`, backgroundColor: '#60ACEC ' }}>
                                        DEF {this.state.def}
                                    </div>
                                </div>

                                <div className="container-stat">
                                    <div className="baseStat spAtk" style={{ width: `${this.state.spAtk / 2}%`, backgroundColor: '#BA60EC ' }}>
                                        SpA {this.state.spAtk}
                                    </div>
                                </div>

                                <div className="container-stat">
                                    <div className="baseStat spDef" style={{ width: `${this.state.spDef / 2}%`, backgroundColor: '#ECA360' }}>
                                        SpD {this.state.spDef}
                                    </div>
                                </div>

                                <div className="container-stat">
                                    <div className="baseStat speed" style={{ width: `${this.state.speed / 2}%`, backgroundColor: '#ECDD60 ' }}>
                                        SPE {this.state.speed}
                                    </div>
                                </div>
                            </div>
                            <div className="info">
                                <div className="col primera">
                                    <span className="titulo altura">ALTURA </span><br />{this.state.altura} m
                                    <br />
                                    <span className="titulo peso">PESO </span><br />
                                    {this.state.peso} KG
                                </div>
                                <div className="col segunda">
                                    <span className="titulo habilidad">HABILIDAD </span><br />
                                    {this.state.habilidad}
                                    <br />
                                    <span className="titulo habitat">HABITAT </span><br />
                                    {this.state.habitat}
                                </div>
                            </div>
                            <div className="tipos-debilidades">
                                TIPO<br />
                                {
                                    this.state.elementos.map(elemento =>
                                        <span className={`type ${elemento}`} key={elemento}></span>)

                                }
                                DEBILIDADES<br />

                            </div>

                        </div>
                        <div className="columna derecha">
                            <Carousel className="imagen"
                                defaultControlsConfig={{
                                    nextButtonClassName: "siguiente",
                                    prevButtonClassName: "anterior",

                                    nextButtonText: <div className="flecha" >&#10095;</div>,
                                    prevButtonText: <div className="flecha">&#10094;</div>


                                }}
                            >


                                <Card.Img src={this.state.imgDefault} />
                                <Card.Img src={this.state.imgShiny} />

                            </Carousel>
                            <div className="descripcion">
                                {this.state.descripcion}

                            </div>


                        </div>



                    </Card.Body>

                </Card>
            </div >
        )
    }
}
