import React from 'react';
import QR from "./QR.jpg";
import logomzk from "./logomzk.png"

export class TicketForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            value: "-",
            vehType: "tramwaj",
            vehNr: "",
            ticketNum: 0,
            date: "-",
            time: "-",
            price: 0,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleVehTypeChange = this.handleVehTypeChange.bind(this);
        this.handleVehNrChange = this.handleVehNrChange.bind(this);
        this.handleTicketNumChange = this.handleTicketNumChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value});
    }
    handleVehTypeChange(event){
        this.setState({vehType: event.target.value});
    }

    handleVehNrChange(event){
        this.setState({vehNr: event.target.value});
    }

    handleTicketNumChange(event){
        this.setState({ticketNum: event.target.value});
    }

    handleDateChange(event){
        this.setState({date: event.target.value});
    }

    handleTimeChange(event){
        this.setState({time: event.target.value});
    }



    render(){

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
        const Ticket11 = {value: "Bilet na jeden przejazd linie nocne"};
        const Ticket12 = {value: "Bilet na jeden przejazd linie zwykłe"};

        switch(this.state.value) {

            case Ticket1.value:
                {this.state.price = 4.80} break;
            case Ticket2.value:
                {this.state.price = 3.80} break;
            case Ticket3.value:
                {this.state.price = 4.20} break;
            case Ticket4.value:
                {this.state.price = 20; this.day=1} break;
            case Ticket5.value:
                {this.state.price = 23; this.day=1} break;
            case Ticket6.value:
                {this.state.price = 20; this.day=1} break;
            case Ticket7.value:
                {this.state.price = 20; this.day=1} break;
            case Ticket8.value:
                {this.state.price = 20; this.day=1} break;
            case Ticket9.value:
                {this.state.price = 15; this.day=3} break;
            case Ticket10.value:
                {this.state.price = 46; this.day=3} break;
            case Ticket11.value:
                {this.state.price = 30; this.day="do końca kursu"} break;
            case Ticket12.value:
                {this.state.price = 3; this.day="do końca kursu"} break;
        }

        return (

            <form>

            <div id="inBox">
                <div id="in"> Wybierz typ biletu:
                    <select value={this.state.value} onChange={this.handleChange}>
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
                        <option value = {Ticket11.value}>Bilet na jeden przejazd linie nocne</option>
                        <option value = {Ticket12.value}>Bilet na jeden przejazd linie zwykłe</option>
                    </select>
                </div>


                <div id="in">
                    Ile biletów chcesz kupić?
                        <input type="number" value={this.state.ticketNum} onChange={this.handleTicketNumChange}/>
                </div>

                <div id="in">
                    Wprowadź numer linii:
                        <input type="text" value={this.state.vehNr} onChange={this.handleVehNrChange} placeholder="np. 12 (tramwaj)"/>
                </div>

                <div id="in">
                    Wprowadź datę i godzinę:
                        <input type="date" value={this.state.date} onChange={this.handleDateChange}/>
                        <input type="time" value={this.state.time} onChange={this.handleTimeChange}/>
                </div>

            </div>


            <div id="outBox">

                <div id="fotokod">Fotokod:</div>

                <div id="QueR">
                    <img id="kodQR" src={QR} alt="QR" height="220" width="235"/>
                </div>

                <div id="logomzk">
                    <img id="logoMZK" src={logomzk} alt="Logo MZK" height="100" width="100"/>
                </div>


                <p> Opis biletu:</p>
                    <div id="ans">{this.state.value}</div><br/>
                <p>Ważny od: </p>
                     <div id="ans">{this.state.date} {this.state.time}</div>
                <p>Ważny do:</p>
                    <div id="ans">{this.state.date} {this.state.time}</div>
                <p> Wystawca biletu: </p>
                    <div id="ans">MZKZG</div>
                <p> Numer Linii:</p>
                    <div id="ans"> {this.state.vehNr} </div>
                <p> Liczba sztuk: </p>
                    <div id="ans"> {this.state.ticketNum} </div>
                <p> Cena za 1 bilet:  </p>
                    <div id="ans"> {this.state.price.toLocaleString('pl-PL',{minimumFractionDigits:2}) + ' PLN'} </div>
                <p> Numer kontrolny: </p>
                    <div id="ans">026775</div>
                <p> Numer biletu: </p>
                    <div id="ans">190625618092</div>
                <p> Bilet zakupiony: </p>
                    <div id="ans"> {this.state.date} {this.state.time}</div>
                <p> Kwota transakcji: </p>
                    <div id="ans">{(this.state.ticketNum*this.state.price).toLocaleString('pl-PL',{minimumFractionDigits:2})} PLN</div>
                <p> Numer transakcji: </p>
                    <div id="ans">1000110000235883327</div><br/>

            </div>


            </form>

        );
    }
}