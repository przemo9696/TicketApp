import React, {useState} from 'react';
import './App.css';
import {TicketForm} from "./Form";
import {Result} from "./Result";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import skycash from "./assets/skycash.jpg"

function App() {

  return (
    <Router>

        <div className="App">

            <div id="skynav">
                <img id="skycash" src={skycash} alt="skycash" height="45" width="auto"/>
            </div>

            <Switch>
                <Route exact path="/" component={TicketForm} />
                <Route path="/result" component={Result}/>
            </Switch>

        </div>

    </Router>
  );
}


export default App;
