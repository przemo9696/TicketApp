import React, { useState } from "react";
import "./App.css";
import { TicketForm } from "./Form";
import { Result } from "./Result";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import skycash from "./assets/skycash.jpg";

function App() {
  const [ticket, setTicket] = useState({});

  const setTicketHandler = (ticket) => {
    setTicket(ticket);
    console.log(ticket);
  };

  return (
    <Router>
      <div className="App">
        <div id="skynav">
          <img
            id="skycash"
            src={skycash}
            alt="skycash"
            height="45"
            width="auto"
          />
        </div>

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <TicketForm setTicketHandler={setTicketHandler} ticket={ticket} />
            )}
          />
          <Route path="/result" render={() => <Result ticket={ticket} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
