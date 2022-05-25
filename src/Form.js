import React, { useState, useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import {
  Ticket1,
  Ticket2,
  Ticket3,
  Ticket4,
  Ticket5,
  Ticket6,
  Ticket7,
  Ticket8,
  Ticket9,
  Ticket10,
  Ticket11,
  Ticket12,
  rTicket1,
  rTicket2,
  rTicket3,
  rTicket4,
  rTicket5,
  rTicket6,
  rTicket7,
  rTicket8,
  rTicket9,
  rTicket10,
  rTicket11,
  rTicket12,
} from "./Constants.js";

export const TicketForm = (props) => {
  const [ticket, setTicket] = useState(
    JSON.parse(localStorage.getItem("ticket")) || {}
  );

  useEffect(() => {
    localStorage.setItem("ticket", JSON.stringify(ticket));
  }, [ticket]);

  const clearStorage = () => {
    localStorage.clear();
  };

  const onChangeHandler = (event) => {
    const update = {};
    update[event.target.name] = event.target.value;
    setTicket(Object.assign({}, ticket, update));
  };

  const buyNow = () => {
    const update = {
      date: moment().format("YYYY-MM-DD"),
      time: moment().format("HH:mm:ss"),
    };
    setTicket(Object.assign({}, ticket, update));
  };

  const buyTicket = () => {
    props.setTicketHandler(ticket);
  };

  let selector = "";

  if (ticket.ticketType === "ulgowy") {
    selector = (
      <select
        name="value"
        id="select"
        value={ticket.value}
        onChange={onChangeHandler}
      >
        <option value="-" hidden>
          Wybierz bilet (ulgowy)
        </option>
        <option value={rTicket11.value}>
          Jednoprzejazdowy na linie zwykłe i nocne MZKZG
        </option>
        <option value={rTicket12.value}>
          Jednoprzejazdowy na linie zwykłe/pospieszne/nocne MZKZG
        </option>
        <option value={rTicket1.value}>
          1 godzinny metropolitalny na linie zwykłe i nocne MZKZG
        </option>
        <option value={rTicket2.value}>
          1 godzinny metropolitalny na linie nocne/pospieszne/zwykłe
        </option>
        <option value={rTicket3.value}>
          1 godzinny metropolitalny ZKM Gdynia nocne/pospieszne/zwykle
        </option>
        <option value={rTicket4.value}>Bilet 24 godzinny ZTMGda+KOLEJ</option>
        <option value={rTicket5.value}>Bilet 24 godzinny ZKMGDy+KOLE</option>
        <option value={rTicket6.value}>Bilet 24 godzinny MZKWej+KOLEJ</option>
        <option value={rTicket7.value}>
          Bilet 24 godzinny ZTMGda+ZKMGdy+MZKWej
        </option>
        <option value={rTicket8.value}>Bilet 24 godzinny MZKZG</option>
        <option value={rTicket9.value}>
          Bilet 72 godzinny ZTMGda+ZKMGdy+MZKWej
        </option>
        <option value={rTicket10.value}>Bilet 72 godzinny MZKZG</option>
      </select>
    );
  } else {
    selector = (
      <select
        name="value"
        id="select"
        value={ticket.value}
        onChange={onChangeHandler}
      >
        <option value="-" hidden>
          Wybierz bilet (normalny)
        </option>
        <option value={Ticket11.value}>
          Jednoprzejazdowy na linie zwykłe i nocne MZKZG
        </option>
        <option value={Ticket12.value}>
          Jednoprzejazdowy na linie zwykłe/pospieszne/nocne MZKZG
        </option>
        <option value={Ticket1.value}>
          1 godzinny metropolitalny na linie zwykłe i nocne MZKZG
        </option>
        <option value={Ticket2.value}>
          1 godzinny metropolitalny na linie nocne/pospieszne/zwykłe
        </option>
        <option value={Ticket3.value}>
          1 godzinny metropolitalny ZKM Gdynia nocne/pospieszne/zwykle
        </option>
        <option value={Ticket4.value}>Bilet 24 godzinny ZTMGda+KOLEJ</option>
        <option value={Ticket5.value}>Bilet 24 godzinny ZKMGDy+KOLE</option>
        <option value={Ticket6.value}>Bilet 24 godzinny MZKWej+KOLEJ</option>
        <option value={Ticket7.value}>
          Bilet 24 godzinny ZTMGda+ZKMGdy+MZKWej
        </option>
        <option value={Ticket8.value}>Bilet 24 godzinny MZKZG</option>
        <option value={Ticket9.value}>
          Bilet 72 godzinny ZTMGda+ZKMGdy+MZKWej
        </option>
        <option value={Ticket10.value}>Bilet 72 godzinny MZKZG</option>
      </select>
    );
  }

  return (
    <form>
      <div id="inBox">
        <div id="in">
          Wybierz typ biletu:
          <select
            name="ticketType"
            id="select"
            value={ticket.ticketType}
            onChange={onChangeHandler}
          >
            <option hidden>Wybierz typ biletu</option>
            <option value={"normalny"}>Normalny</option>
            <option value={"ulgowy"}>Ulgowy</option>
          </select>
        </div>

        <div id="in">
          Wybierz bilet:
          <br />
          {selector}
        </div>

        <div id="in">
          Ile biletów chcesz kupić?
          <br />
          <input
            name="ticketNum"
            type="number"
            value={ticket.ticketNum}
            onChange={onChangeHandler}
            placeholder="Liczba biletów"
          />
        </div>

        <div id="in">
          Wprowadź numer linii:
          <br />
          <input
            name="vehNr"
            type="text"
            value={ticket.vehNr}
            onChange={onChangeHandler}
            placeholder="Numer linii"
          />
          <label>
            <input
              type="radio"
              name="vehType"
              value=" (tramwaj)"
              onChange={onChangeHandler}
            />
            Tramwaj
          </label>
          <label>
            <input
              type="radio"
              name="vehType"
              value=" (autobus)"
              onChange={onChangeHandler}
            />
            Autobus
          </label>
        </div>

        <div id="in">
          Wprowadź datę i godzinę:
          <br />
          <input
            name="date"
            type="date"
            value={ticket.date}
            onChange={onChangeHandler}
          />
          <input
            name="time"
            type="time"
            value={ticket.time}
            onChange={onChangeHandler}
            step="2"
          />
        </div>

        <button id="button" type="button" onClick={buyNow}>
          Teraz
        </button>

        <Link to={{ pathname: "/result" }}>
          <button onClick={buyTicket} id="buyButton">
            Kup Bilet
          </button>
        </Link>
      </div>

      <button id="refreshButton" onClick={clearStorage}>
        <div id="refreshButtonText"> &#8635; </div>
      </button>
    </form>
  );
};
