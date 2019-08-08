import React, {useState, createContext} from 'react';
import moment from 'moment';


export const ValueContext = createContext();
export const ValueProvider = props => {

    const [value, setValue] = useState('-');

    return(

        <ValueContext.Provider value={[value, setValue]}>
            {props.children}
        </ValueContext.Provider>

    );
};


export const VehTypeContext = createContext();
export const VehTypeProvider = props => {

    const [vehType, setVehType] = useState('-');

    return(

        <VehTypeContext.Provider value={[vehType, setVehType]}>
            {props.children}
        </VehTypeContext.Provider>

    );
};

export const VehNrContext = createContext();
export const VehNrProvider = props => {

    const [vehNr, setVehNr] = useState('');

    return(

        <VehNrContext.Provider value={[vehNr, setVehNr]}>
            {props.children}
        </VehNrContext.Provider>

    );
};

export const TicketNumContext = createContext();
export const TicketNumProvider = props => {

    const [ticketNum, setTicketNum] = useState(0);


    return(

        <TicketNumContext.Provider value={[ticketNum, setTicketNum]}>
            {props.children}
        </TicketNumContext.Provider>

    );
};

export const DateContext = createContext();
export const DateProvider = props => {

    const [date, setDate] = useState('-');


    return(

        <DateContext.Provider value={[date, setDate]}>
            {props.children}
        </DateContext.Provider>

    );
};

export const TimeContext = createContext();
export const TimeProvider = props => {

    const [time, setTime] = useState('-');


    return(

        <TimeContext.Provider value={[time, setTime]}>
            {props.children}
        </TimeContext.Provider>

    );
};

export const TicketTypeContext = createContext();
export const TicketTypeProvider = props => {

    const [ticketType, setTicketType] = useState('normalny');


    return(

        <TicketTypeContext.Provider value={[ticketType, setTicketType]}>
            {props.children}
        </TicketTypeContext.Provider>

    );
};