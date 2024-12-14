import React, { useState } from "react";

 function MyCounter2(){

    const [car, setCar] = useState({year: 2022, 
                                    make: "BMW", 
                                    model: "M3"});

    function handleYearChange(event) {
        setCar({...car, year: event.target.value});
    }
    function handleMakeChange(event) {
        setCar({...car, make: event.target.value});
    }
    function handleModelChange(event) {
        setCar({...car, model: event.target.value});
    }


    return(<div>
                <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

                <input type="number" value={car.year} onChange={handleYearChange}/><br/>
                <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
                <input type="text" value={car.model} onChange={handleModelChange}/><br/>
                </div>)
}