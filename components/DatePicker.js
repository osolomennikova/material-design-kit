import React, { useState } from 'react';
import 'react-daypicker/lib/DayPicker.css';
import DayPicker from 'react-daypicker';
import 'react-daypicker/src/DayPicker.scss';
import '../styles/main.scss';



function DatePicker() {
    const [state, changeState] = useState(new Date());
    
    return (
        <div>
            <DayPicker 
                active={state}
                onDayClick={day => changeState(day)}
            />
        </div>
    )
}

export default DatePicker;
