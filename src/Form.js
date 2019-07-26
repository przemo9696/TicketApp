import React, {useState, useContext} from 'react';
import moment from "moment";
import {DateContext, TicketNumContext, TimeContext, ValueContext, VehNrContext, VehTypeContext} from "./context";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export function TicketForm() {

    const [value, setValue] = useContext(ValueContext);
    const [vehType, setVehType] = useContext(VehTypeContext);
    const [vehNr, setVehNr] = useContext(VehNrContext);
    const [ticketNum, setTicketNum] = useContext(TicketNumContext);
    const [date, setDate] = useContext(DateContext);
    const [time, setTime] = useContext(TimeContext);

    let price = 0;

    const onChangeValue = event => setValue(event.target.value);
    const onChangeVehType = event => setVehType(event.target.value);
    const onChangeVehNr = event => setVehNr(event.target.value);
    const onChangeTicketNum = event => setTicketNum(event.target.value);
    const onChangeDate = event => setDate(event.target.value);
    const onChangeTime = event => setTime(event.target.value);

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

    return (

        <form>

            <div id="inBox">
                <div id="in"> Wybierz typ biletu:
                    <select value={value} onChange={onChangeValue}>
                        <option value = "-" disabled>- Wybierz bilet -</option>
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
                        <option value = {Ticket11.value}>Jednoprzejazdowy na linie zwykłe</option>
                        <option value = {Ticket12.value}>Jednoprzejazdowy na linie pospieszne/nocne</option>
                    </select>
                </div>


                <div id="in">
                    Ile biletów chcesz kupić?
                        <input type="number" value={ticketNum} onChange={onChangeTicketNum}/>
                </div>

                <div id="in">
                    Wprowadź numer linii:
                        <input type="text" value={vehNr} onChange={onChangeVehNr} placeholder="np. 12 (tramwaj)"/>
                </div>

                <div id="in">
                    Wprowadź datę i godzinę:
                        <input type="date" value={date} onChange={onChangeDate}/>
                        <input type="time" value={time} onChange={onChangeTime} step="2"/>
                </div>

            </div>

            <Link to="/result">
                <button id="button">Kup Bilet</button>
            </Link>

        </form>

        );
    }