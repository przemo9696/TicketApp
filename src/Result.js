import React, { useEffect, useState } from "react";
import QR from "./assets/QR.jpg";
import logomzk from "./assets/logomzk.png";
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

export const Result = (props) => {
  const [localStorageTicket, setLocalStorageTicket] = useState({}); 

  useEffect(() => {
    setLocalStorageTicket(JSON.parse(localStorage.getItem("ticket")));
  }, []);

  const ticket = props.date === undefined ? localStorageTicket : props.ticket;

  var price = 0;
  var desc = "-";

  const inDate = moment(ticket.date + " " + ticket.time)
    .subtract(14, "seconds")
    .format("DD-MM-YYYY HH:mm:ss");
  var expDate = moment(ticket.date + " " + ticket.time)
    .subtract(14, "seconds")
    .format("DD-MM-YYYY HH:mm:ss");

  switch (ticket.value) {
    /*NORMALNE*/

    default:
      price = 0;
      desc = "Nie został wybrany żaden bilet";
      break;

    case Ticket1.value:
      price = 4.4;
      expDate = moment(ticket.date + " " + ticket.time)
        .add(1, "hours")
        .format("DD-MM-YYYY HH:mm:ss");
      desc = Ticket1.value + " ważny do " + expDate;
      break;
    case Ticket2.value:
      price = 5.4;
      expDate = moment(ticket.date + " " + ticket.time)
        .add(1, "hours")
        .format("DD-MM-YYYY HH:mm:ss");
      desc = Ticket2.value + " ważny do " + expDate;
      break;
    case Ticket3.value:
      price = 4.4;
      expDate = moment(ticket.date + " " + ticket.time)
        .add(1, "hours")
        .format("DD-MM-YYYY HH:mm:ss");
      desc = Ticket3.value + " ważny do " + expDate;
      break;
    case Ticket4.value:
      price = 22;
      expDate = moment(ticket.date + " " + ticket.time)
        .add(24, "hours")
        .format("DD-MM-YYYY HH:mm:ss");
      desc = Ticket4.value + " ważny do " + expDate;
      break;
    case Ticket5.value:
      price = 22;
      expDate = moment(ticket.date + " " + ticket.time)
        .add(24, "hours")
        .format("DD-MM-YYYY HH:mm:ss");
      desc = Ticket5.value + " ważny do " + expDate;
      break;
    case Ticket6.value:
      price = 22;
      expDate = moment(ticket.date + " " + ticket.time)
        .add(24, "hours")
        .format("DD-MM-YYYY HH:mm:ss");
      desc = Ticket6.value + " ważny do " + expDate;
      break;
    case Ticket7.value:
      price = 16;
      expDate = moment(ticket.date + " " + ticket.time)
        .add(24, "hours")
        .format("DD-MM-YYYY HH:mm:ss");
      desc = Ticket7.value + " ważny do " + expDate;
      break;
    case Ticket8.value:
      price = 25;
      expDate = moment(ticket.date + " " + ticket.time)
        .add(24, "hours")
        .format("DD-MM-YYYY HH:mm:ss");
      desc = Ticket8.value + " ważny do " + expDate;
      break;
    case Ticket9.value:
      price = 32;
      expDate = moment(ticket.date + " " + ticket.time)
        .add(72, "hours")
        .format("DD-MM-YYYY HH:mm:ss");
      desc = Ticket9.value + " ważny do " + expDate;
      break;
    case Ticket10.value:
      price = 50;
      expDate = moment(ticket.date + " " + ticket.time)
        .add(72, "hours")
        .format("DD-MM-YYYY HH:mm:ss");
      desc = Ticket10.value + " ważny do " + expDate;
      break;
    case Ticket11.value:
      price = 3.6;
      expDate = "do końca kursu";
      desc = "Jednoprzejazdowy ważny na linie zwykłe " + expDate;
      break;
    case Ticket12.value:
      price = 4.2;
      expDate = "do końca kursu";
      desc = "Jednoprzejazdowy ważny na linie pospieszne/nocne " + expDate;
      break;

    /*ULGOWE*/

    case rTicket1.value:
      price = 2.2;
      expDate = moment(ticket.date + " " + ticket.time)
        .add(1, "hours")
        .format("DD-MM-YYYY HH:mm:ss");
      desc = rTicket1.value + " ważny do " + expDate;
      break;
    case rTicket2.value:
      price = 2.7;
      expDate = moment(ticket.date + " " + ticket.time)
        .add(1, "hours")
        .format("DD-MM-YYYY HH:mm:ss");
      desc = rTicket2.value + " ważny do " + expDate;
      break;
    case rTicket3.value:
      price = 2.2;
      expDate = moment(ticket.date + " " + ticket.time)
        .add(1, "hours")
        .format("DD-MM-YYYY HH:mm:ss");
      desc = rTicket3.value + " ważny do " + expDate;
      break;
    case rTicket4.value:
      price = 11;
      expDate = moment(ticket.date + " " + ticket.time)
        .add(24, "hours")
        .format("DD-MM-YYYY HH:mm:ss");
      desc = rTicket4.value + " ważny do " + expDate;
      break;
    case rTicket5.value:
      price = 11;
      expDate = moment(ticket.date + " " + ticket.time)
        .add(24, "hours")
        .format("DD-MM-YYYY HH:mm:ss");
      desc = rTicket5.value + " ważny do " + expDate;
      break;
    case rTicket6.value:
      price = 11;
      expDate = moment(ticket.date + " " + ticket.time)
        .add(24, "hours")
        .format("DD-MM-YYYY HH:mm:ss");
      desc = rTicket6.value + " ważny do " + expDate;
      break;
    case rTicket7.value:
      price = 8;
      expDate = moment(ticket.date + " " + ticket.time)
        .add(24, "hours")
        .format("DD-MM-YYYY HH:mm:ss");
      desc = rTicket7.value + " ważny do " + expDate;
      break;
    case rTicket8.value:
      price = 12.5;
      expDate = moment(ticket.date + " " + ticket.time)
        .add(24, "hours")
        .format("DD-MM-YYYY HH:mm:ss");
      desc = rTicket8.value + " ważny do " + expDate;
      break;
    case rTicket9.value:
      price = 16;
      expDate = moment(ticket.date + " " + ticket.time)
        .add(72, "hours")
        .format("DD-MM-YYYY HH:mm:ss");
      desc = rTicket9.value + " ważny do " + expDate;
      break;
    case rTicket10.value:
      price = 25;
      expDate = moment(ticket.date + " " + ticket.time)
        .add(72, "hours")
        .format("DD-MM-YYYY HH:mm:ss");
      desc = rTicket10.value + " ważny do " + expDate;
      break;
    case rTicket11.value:
      price = 1.8;
      expDate = "do końca kursu";
      desc = "Jednoprzejazdowy ważny na linie zwykłe " + expDate;
      break;
    case rTicket12.value:
      price = 2.1;
      expDate = "do końca kursu";
      desc = "Jednoprzejazdowy ważny na linie pospieszne/nocne " + expDate;
      break;
  }

  return (
    <div id="outBox">
      <div id="fotokod">Fotokod:</div>

      <div id="QueR">
        <img id="kodQR" src={QR} alt="QR" />
      </div>

      <div id="logomzk">
        <img
          id="logoMZK"
          src={logomzk}
          alt="Logo MZK"
          height="100"
          width="100"
        />
      </div>

      <div id="ans">{ticket.value}</div>

      <p> Opis biletu:</p>
      <div id="ans">{desc}</div>
      <br />

      <p>Ważny od: </p>
      <div id="ans">{inDate}</div>

      <p>Ważny do:</p>
      <div id="ans">{expDate}</div>

      <p> Wystawca biletu: </p>
      <div id="ans">MZKZG</div>

      <p> Numer Linii:</p>
      <div id="ans">
        {" "}
        {ticket.vehNr}
        {ticket.vehType}{" "}
      </div>

      <p> Liczba sztuk: </p>
      <div id="ans"> {ticket.ticketNum} </div>

      <p> Cena za 1 bilet: </p>
      <div id="ans">
        {" "}
        {price.toLocaleString("pl-PL", { minimumFractionDigits: 2 }) +
          " PLN"}{" "}
      </div>

      <p> Numer kontrolny: </p>
      <div id="ans">026775</div>

      <p> Numer biletu: </p>
      <div id="ans">190725618092</div>

      <p> Bilet zakupiony: </p>
      <div id="ans"> {inDate}</div>

      <p> Kwota transakcji: </p>
      <div id="ans">
        {(ticket.ticketNum * price).toLocaleString("pl-PL", {
          minimumFractionDigits: 2,
        })}{" "}
        PLN
      </div>

      <p> Numer transakcji: </p>
      <div id="ans">1000110000239883327</div>
      <br />

      <Link to={{ pathname: "/" }}>
        <button id="backButton">
          <div id="backButtonText">&lsaquo;</div>
        </button>
      </Link>
    </div>
  );
};
