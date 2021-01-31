import React, { Component } from 'react'
import { Link } from 'react-router-dom';


import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CartaPokemon.css';
import axios from 'axios';
import Pokemon from './Pokemon.js'


export default class CartaPokemon extends Component {


    state = {
        nombre: '',
        dataPokemon: [],
        imagen: [],
        elementos: [],
        id: []
    }

    async componentDidMount() {
        const name = this.props.nombre
        //const url = await (`https://pokeapi.co/api/v2/pokemon/${this.props.nombre}`)
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        //console.log(res);
        //const data = await res.json();
        this.setState({
            nombre: name,
            dataPokemon: res.data,
            imagen: res.data.sprites.front_default,
            elementos: res.data.types.map((type) => type.type.name).join().split(","),
            id: res.data.id
            //elementoSecundario: res.data.types.map((type) => type.type.name).join(', ')
        });
        //console.log(this.state.elementos)
    }

    pokemonType() {

        <div className="normal"></div>

    }




    render() {
        return (

            <div className="col-lg-2 col-md-4 mb-5" key={this.state.nombre}>
                <Link to={`pokemon/${this.state.id}`}>

                    <Card
                        border={'#9E9E9E'}
                        style={{ width: '12rem' }}
                        props={Pokemon}
                        className="cartaResumida"

                    >
                        <Card.Header className="Header">#{this.state.dataPokemon.id}</Card.Header>
                        <Card.Body>
                            <div className="Nombre"
                            ><Card.Title >{this.state.nombre}</Card.Title>

                            </div>

                            <Card.Img src={this.state.imagen} />
                            {
                                this.state.elementos.map(elemento =>
                                    <span className={`type ${elemento}`} key={elemento}>{console.log(elemento)} </span>)

                            }


                            <div className="type">{this.pokemonType(this.state.dataPokemon)}</div>
                        </Card.Body >
                    </Card>
                </Link>
            </div >

        )
    }
}
