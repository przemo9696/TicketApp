import React, {useState, useContext, useEffect} from 'react';
import moment from "moment";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {Ticket1, Ticket2, Ticket3, Ticket4, Ticket5, Ticket6, Ticket7, Ticket8, Ticket9, Ticket10, Ticket11, Ticket12, rTicket1, rTicket2, rTicket3, rTicket4, rTicket5, rTicket6, rTicket7, rTicket8, rTicket9, rTicket10, rTicket11, rTicket12} from './Constants.js';

export const TicketForm = props => {


    const [value, setValue] = useState(localStorage.getItem('localValue') || '');
    const [vehType, setVehType] = useState(localStorage.getItem('localVehType') || '');
    const [vehNr, setVehNr] = useState(localStorage.getItem('localVehNr') || '');
    const [ticketNum, setTicketNum] = useState(localStorage.getItem('localTicketNum') || 1);
    const [date, setDate] = useState(localStorage.getItem('localDate') || '');
    const [time, setTime] = useState(localStorage.getItem('localTime') || '');
    const [ticketType, setTicketType] = useState(localStorage.getItem('localTicketType') || '');

    useEffect(() => {
        localStorage.setItem('localValue', value);
    }, [value]);

    useEffect(() => {
        localStorage.setItem('localVehType', vehType);
    }, [vehType]);

    useEffect(() => {
        localStorage.setItem('localVehNr', vehNr);
    }, [vehNr]);

    useEffect(() => {
        localStorage.setItem('localTicketNum', ticketNum);
    }, [ticketNum]);

    useEffect(() => {
        localStorage.setItem('localDate', date);
    }, [date]);

    useEffect(() => {
        localStorage.setItem('localTime', time);
    }, [time]);

    useEffect(() => {
        localStorage.setItem('localTicketType', ticketType);
    }, [ticketType]);

    const clearStorage = () => {
        localStorage.clear();
    }


    const onChangeValue = event => setValue(event.target.value);
    const onChangeVehType = event => setVehType(event.target.value);
    const onChangeVehNr = event => setVehNr(event.target.value);
    const onChangeTicketNum = event => setTicketNum(event.target.value);
    const onChangeDate = event => setDate(event.target.value);
    const onChangeTime = event => setTime(event.target.value);
    const onChangeTicketType = event =>  setTicketType(event.target.value);
    const buyNow = event => {
        setDate(moment().format('YYYY-MM-DD'));
        setTime(moment().format('HH:mm:ss'));
    }


    var selector = '';


    if(ticketType === "ulgowy") {
        selector =
            <select id="select" value={value} onChange={onChangeValue}>
                <option value = "-" hidden>Wybierz bilet (ulgowy)</option>
                <option value = {rTicket11.value}>Jednoprzejazdowy na linie zwykłe</option>
                <option value = {rTicket12.value}>Jednoprzejazdowy na linie pospieszne/nocne</option>
                <option value = {rTicket1.value}>1  godzinny metropolitalny na linie nocne/pośpieszne/zwykłe</option>
                <option value = {rTicket2.value}>1 godzinny metropolitalny na linie zwykłe</option>
                <option value = {rTicket3.value}>1 godzinny metropolitalny ZKM Gdynia nocne/pospieszne/zwykle</option>
                <option value = {rTicket4.value}>Bilet 24 godzinny MZKWej+KOLEJ</option>
                <option value = {rTicket5.value}>Bilet 24 godzinny MZKZG</option>
                <option value = {rTicket6.value}>Bilet 24 godzinny ZKMGdy+KOLEJ</option>
                <option value = {rTicket7.value}>Bilet 24 godzinny ZTMGda+KOLEJ</option>
                <option value = {rTicket8.value}>Bilet 24 godzinny ZTMGda+ZKMGdy+MZKWej</option>
                <option value = {rTicket9.value}>Bilet 72 godzinny MZKZG</option>
                <option value = {rTicket10.value}>Bilet 72 godzinny ZTMGda+ZKMGdy+MZKWej</option>
            </select>;
    }

    else{
        selector =
            <select id="select" value={value} onChange={onChangeValue}>
                <option value = "-" hidden>Wybierz bilet (normalny)</option>
                <option value = {Ticket11.value}>Jednoprzejazdowy na linie zwykłe</option>
                <option value = {Ticket12.value}>Jednoprzejazdowy na linie pospieszne/nocne</option>
                <option value = {Ticket1.value}>1 godzinny metropolitalny na linie nocne/pośpieszne/zwykłe</option>
                <option value = {Ticket2.value}>1 godzinny metropolitalny na linie zwykłe</option>
                <option value = {Ticket3.value}>1 godzinny metropolitalny ZKM Gdynia nocne/pospieszne/zwykle</option>
                <option value = {Ticket4.value}>Bilet 24 godzinny MZKWej+KOLEJ</option>
                <option value = {Ticket5.value}>Bilet 24 godzinny MZKZG</option>
                <option value = {Ticket6.value}>Bilet 24 godzinny ZKMGdy+KOLEJ</option>
                <option value = {Ticket7.value}>Bilet 24 godzinny ZTMGda+KOLEJ</option>
                <option value = {Ticket8.value}>Bilet 24 godzinny ZTMGda+ZKMGdy+MZKWej</option>
                <option value = {Ticket9.value}>Bilet 72 godzinny MZKZG</option>
                <option value = {Ticket10.value}>Bilet 72 godzinny ZTMGda+ZKMGdy+MZKWej</option>
            </select>;
    }




    return (

        <form>

            <div id="inBox">

                <div id="in">Wybierz typ biletu:
                    <select id="select" value={ticketType} onChange={onChangeTicketType}>
                        <option hidden>Wybierz typ biletu</option>
                        <option value={"normalny"}>Normalny</option>
                        <option value={"ulgowy"}>Ulgowy</option>
                    </select>
                </div>


                <div id="in">
                    Wybierz bilet:<br/>
                        {selector}
                </div>


                <div id="in">
                    Ile biletów chcesz kupić?<br/>
                        <input type="number" value={ticketNum} onChange={onChangeTicketNum}/>
                </div>

                <div id="in">
                    Wprowadź numer linii:<br/>
                        <input type="text" value={vehNr} onChange={onChangeVehNr} placeholder="Numer linii"/>
                        <label><input type="radio" name="vehType" value=" (tramwaj)" onChange={onChangeVehType}/>Tramwaj</label>
                        <label><input type="radio" name="vehType" value=" (autobus)" onChange={onChangeVehType}/>Autobus</label>
                </div>

                <div id="in">
                    Wprowadź datę i godzinę:<br/>
                        <input type="date" value={date} onChange={onChangeDate}/>
                        <input type="time" value={time} onChange={onChangeTime} step="2"/>

                </div>

                <button id="button" type="button" onClick={buyNow}>Teraz</button>

            </div>

            <Link to = {{pathname: "/result", state: {value, vehNr, vehType, ticketNum, date, time}}}>
                <button id="buyButton">Kup Bilet</button>
            </Link>

            <button id="refreshButton"  onClick={clearStorage}><div id="refreshButtonText"> &#8635; </div></button>


        </form>

        );
    }