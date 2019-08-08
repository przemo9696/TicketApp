import React from 'react';
import './App.css';
import {TicketForm} from "./Form";
import {Result} from "./Result";
import {DateProvider, TicketNumProvider, TimeProvider, ValueProvider, VehTypeProvider, VehNrProvider, TicketTypeProvider} from "./context";
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
                                <TicketTypeProvider>
                                    <div className="App">

                                        <div id="skynav">
                                            <img id="skycash" src={skycash} alt="skycash" height="45" width="auto"/>
                                        </div>

                                        <Switch>
                                            <Route exact path="/" component={TicketForm} />
                                            <Route path="/result" component={Result}/>
                                        </Switch>

                                    </div>
                                </TicketTypeProvider>
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
