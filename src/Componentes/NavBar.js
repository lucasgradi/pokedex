import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, FormControl, Form } from 'react-bootstrap';


export default class NavBar extends Component {

    sendData = event => {
        this.props.parentCallback(event.target.value);

    }

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Form inline className="mx-auto my-1 order-0 order-md-1 position-relative">
                        <FormControl type="text" placeholder="Buscar en Pokedex" className="mr-sm-2" onChange={this.sendData} />
                    </Form>
                </Navbar>
            </div>
        )
    }
}
