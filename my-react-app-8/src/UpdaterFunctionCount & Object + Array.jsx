import React, { useState } from "react";

 function MyCounter2(){

    const [foods, setFoods] = useState(["Pizza", "Sushi", "Burger"]);

    function handleAddFood(){

        const newFood = document.getElementById("foodinput").value;

        setFoods([...foods, newFood]);
    }

    function handleRemoveFood(index){

        setFoods(foods.filter((_, i) => i !== i));
    }

    return(<div>
                <h2>List of Food</h2>
                <ul>
                    {foods.map((food, index) => 
                    <lis key={index} onClick ={() => handleRemoveFood(index)}>
                        {food} 
                    </lis>)}
                </ul>
                <input type="text" id="foodinput" placeholder="Enter food name"/>
                <button onClick={handleAddFood}>Add Food</button>
                </div>);
}