import React, {useState,useContext} from 'react';
import QR from "./QR.jpg";
import logomzk from "./logomzk.png";
import {DateContext, TicketNumContext, TimeContext, ValueContext, VehNrContext, VehTypeContext} from "./context";
import moment from "moment";
import {Link} from "react-router-dom";


export const Result = (props) => {

    const [value, setValue] = useContext(ValueContext);
    const [vehType, setVehType] = useContext(VehTypeContext);
    const [vehNr, setVehNr] = useContext(VehNrContext);
    const [ticketNum, setTicketNum] = useContext(TicketNumContext);
    const [date, setDate] = useContext(DateContext);
    const [time, setTime] = useContext(TimeContext);

    let price = 0;

    const Ticket1 = {value: "1 godzinny metropolitalny na linie nocne/pośpieszne/zwykłe"};
    const Ticket2 = {value: "1 godzinny metropolitalny na linie zwykłe"};
    const Ticket3 = {value: "1 godzinny metropolitalny ZKM Gdynia nocne/pospieszne/zwykle"};
    const Ticket4 = {value: "Bilet 24 godzinny MZKWej+KOLEJ"};
    const Ticket5 = {value: "Bilet 24 godzinny MZKZG"};
    const Ticket6 = {value: "Bilet 24 godzinny ZKMGdy+KOLEJ"};
    const Ticket7 = {value: "Bilet 24 godzinny ZTMGda+KOLEJ"};
    const Ticket8 = {value: "Bilet 24 godzinny ZTMGda+ZKMGdy+MZKWej"};
    const Ticket9 = {value: "Bilet 72 godzinny ZTMGda+ZKMGdy+MZKWej"};
    const Ticket10 = {value: "Bilet 72 godzinny MZKZG"};
    const Ticket11 = {value: "Jednoprzejazdowy na linie zwykłe"};
    const Ticket12 = {value: "Jednoprzejazdowy na linie pospieszne/nocne"};

    const inDate = moment(date + ' ' + time).format('DD-MM-YYYY HH:mm:ss');
    let expDate = moment(date + ' ' + time).format('DD-MM-YYYY HH:mm:ss');

    switch(value) {

        case Ticket1.value:
            price = 4.80;
            expDate = moment(date + ' ' + time).add(1,"hours").format('DD-MM-YYYY HH:mm:ss');
            break;
        case Ticket2.value:
            price = 3.80;
            expDate = moment(date + ' ' + time).add(1,"hours").format('DD-MM-YYYY HH:mm:ss');
            break;
        case Ticket3.value:
            price = 4.20;
            expDate = moment(date + ' ' + time).add(1,"hours").format('DD-MM-YYYY HH:mm:ss');
            break;
        case Ticket4.value:
            price = 20;
            expDate = moment(date + ' ' + time).add(24,"hours").format('DD-MM-YYYY HH:mm:ss');
            break;
        case Ticket5.value:
            price = 23;
            expDate = moment(date + ' ' + time).add(24,"hours").format('DD-MM-YYYY HH:mm:ss');
            break;
        case Ticket6.value:
            price = 20;
            expDate = moment(date + ' ' + time).add(24,"hours").format('DD-MM-YYYY HH:mm:ss');
            break;
        case Ticket7.value:
            price = 20;
            expDate = moment(date + ' ' + time).add(24,"hours").format('DD-MM-YYYY HH:mm:ss');
            break;
        case Ticket8.value:
            price = 20;
            expDate = moment(date + ' ' + time).add(24,"hours").format('DD-MM-YYYY HH:mm:ss');
            break;
        case Ticket9.value:
            price = 15;
            expDate = moment(date + ' ' + time).add(72,"hours").format('DD-MM-YYYY HH:mm:ss');
            break;
        case Ticket10.value:
            price = 46;
            expDate = moment(date + ' ' + time).add(72,"hours").format('DD-MM-YYYY HH:mm:ss');
            break;
        case Ticket11.value:
            price = 3;
            expDate = "do końca kursu";
            break;
        case Ticket12.value:
            price = 4;
            expDate = "do końca kursu";
            break;
    }

    return(

        <div id="outBox">

            <div id="fotokod">Fotokod:</div>

            <div id="QueR">
                <img id="kodQR" src={QR} alt="QR" height="220" width="235"/>
            </div>

            <div id="logomzk">
                <img id="logoMZK" src={logomzk} alt="Logo MZK" height="100" width="100"/>
            </div>


            <p> Opis biletu:</p>
            <div id="ans">{value}</div><br/>

            <p>Ważny od: </p>
            <div id="ans">{inDate}</div>

            <p>Ważny do:</p>
            <div id="ans">{expDate}</div>

            <p> Wystawca biletu: </p>
            <div id="ans">MZKZG</div>

            <p> Numer Linii:</p>
            <div id="ans"> {vehNr} </div>

            <p> Liczba sztuk: </p>
            <div id="ans"> {ticketNum} </div>

            <p> Cena za 1 bilet:  </p>
            <div id="ans"> {price.toLocaleString('pl-PL',{minimumFractionDigits:2}) + ' PLN'} </div>

            <p> Numer kontrolny: </p>
            <div id="ans">026775</div>

            <p> Numer biletu: </p>
            <div id="ans">190625618092</div>

            <p> Bilet zakupiony: </p>
            <div id="ans"> {inDate}</div>

            <p> Kwota transakcji: </p>
            <div id="ans">{(ticketNum * price).toLocaleString('pl-PL',{minimumFractionDigits:2})} PLN</div>

            <p> Numer transakcji: </p>
            <div id="ans">1000110000235883327</div><br/>

            <Link to="/">
                <button id="button">Powrót</button>
            </Link>

        </div>

        )
}