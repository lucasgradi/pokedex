import React, { Component } from 'react'

import Pokemones from "./Pokemones";
import "./NavBar.css";

export default class Dashboard extends Component {
    // state = {
    //     buqueda: ""
    // }

    // async componentDidMount() {
    //     this.setState({ busqueda: this.props.busqueda })
    // }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <Pokemones busqueda={this.props.busqueda} />
                </div>

            </div>
        )
    }
}

