import React from 'react';
import './App.css';
import {TicketForm} from "./Form";
import {Result} from "./Result";
import {DateProvider, TicketNumProvider, TimeProvider, ValueProvider, VehTypeProvider, VehNrProvider} from "./context";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import skycash from "./skycash.jpg"

function App() {

  return (
    <Router>
        <VehTypeProvider>
            <VehNrProvider>
                <TicketNumProvider>
                    <DateProvider>
                        <TimeProvider>
                            <ValueProvider>
                                <div className="App">
                                    <header>
                                        <div id="skynav">
                                            <img id="skycash" src={skycash} alt="skycash" height="50" width="auto"/>
                                        </div>
                                    </header>

                                    <body>
                                        <Switch>
                                            <Route exact path="/" component={TicketForm} />
                                            <Route path="/result" component={Result}/>
                                        </Switch>
                                    </body>
                                </div>
                            </ValueProvider>
                        </TimeProvider>
                    </DateProvider>
                </TicketNumProvider>
            </VehNrProvider>
        </VehTypeProvider>
    </Router>
  );
}


export default App;
