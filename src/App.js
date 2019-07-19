import React from 'react';
import './App.css';
import {TicketForm} from "./Form";
import {Result} from "./Result";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="App">

        <header>
          React app<br/><br/>

        </header>

        <body>
            <TicketForm />
            <Result/>
        </body>

        <footer>
            _

        </footer>
    </div>


  );
}

export default App;
