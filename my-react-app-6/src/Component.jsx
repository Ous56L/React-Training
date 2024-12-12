import React, { useState } from "react";
function MyComponent(){

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState("");
    const[payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function paymentChange(event) {
        setPayment(event.target.value);
    }

    function shippingChange(event) {
        setShipping(event.target.value);
    }

    return(<div>
                <input value={name} onChange={handleNameChange}></input>
                <p>Name: {name}</p>

                <input value={quantity} onChange={handleQuantityChange} type="number"></input>
                <p>Quantity: {quantity}</p>

                <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"/>
                <p>Comment: {comment}</p>

                <select value={payment} onChange={paymentChange}>
                <option value={""}>Select an option</option>
                <option value={"Visa"}>Visa</option>
                <option value={"Mastercard"}>Mastercard</option>
                <option value={"Mada"}>Mada</option>
                <option value={"Gift Card"}>Gift Card</option>
                </select>
                <p>Payment: {payment}</p>

                <label>
                    <input type="radio" value={"Pick Up"} 
                    checked = {shipping === "Pick Up"} 
                    onChange={shippingChange}/>
                    pick Up
                </label><br/>

                <label>
                <input type="radio" value={"Delivery"} 
                    checked = {shipping === "Delivery"} 
                    onChange={shippingChange}/>
                    Delivery
                </label>
                <p>Shipping: {shipping}</p>
                </div>)
}
export default MyComponent