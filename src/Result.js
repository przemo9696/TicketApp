import React from 'react';
import QR from "./QR.jpg";
import logomzk from "./logomzk.png";

// Napisać jako bezstanowy komponent

 export class Result extends React.Component {

        constructor(props) {

                super(props);

                this.state = {
                        value: "-",
                        vehType:"tramwaj",
                        vehNr: "",
                        ticketNum: 0,
                        date: "-",
                        time: "-",
                        price: 0,

                };
        }

        stateChanger(newValue, newVehType, newVehNr, newTicketNum, newDate, newTime, newPrice){
                this.setState({
                        value: newValue,
                        vehType: newVehType,
                        vehNr: newVehNr,
                        ticketNum: newTicketNum,
                        date: newDate,
                        time: newTime,
                        price: newPrice,
                });


        }

        render() {

                return(
                    <h1>lol</h1>


                );
 }



}
