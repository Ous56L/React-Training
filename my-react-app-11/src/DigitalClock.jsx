import React, { useState, useEffect } from 'react';

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const intervalID = setInterval(() =>{
            setTime(new Date());
        }, 1000);

        return() => {
            clearInterval(intervalID);
        }
        } ,[]);

        function formatTime(time) {
            let hours = time.getHours();
            let minutes = time.getMinutes();
            let seconds = time.getSeconds();
            const maridin = hours >= 12 ? "PM" : "AM";
            hours = hours % 12 || 12;

            return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${padZero(maridin)}`;
        }

        function padZero(number){
            return (number < 10 ? "0" : "") + number;
        }
    
    return(
            <div className='clock-container'>
                <div className='clock'>
                    <span>{formatTime(time)}</span>
                    </div>  
                </div>
            );
}
export default DigitalClock;