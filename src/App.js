import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Dashboard from './Componentes/Dashboard';
import NavBar from './Componentes/NavBar';
import Pokemon from './Componentes/Pokemon';



export default class App extends Component {

  state = { busqueda: "" }
  callbackFunction = (data) => {
    this.setState({ busqueda: data })

  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar parentCallback={this.callbackFunction} />
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" render={() => {
                return <div>
                  <Dashboard busqueda={this.state.busqueda} />
                </div>
              }}>
              </Route>
              <Route exact path="/pokemon/:id" component={Pokemon} />

            </Switch>
          </div>
        </div>
      </Router>
    )


  }
}