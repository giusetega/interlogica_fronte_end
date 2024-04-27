import React, { useState } from "react";

export default function Form(props) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        if (name !== "" && price !== "" && quantity !== ""){
            props.addSweet(formData)
            setName("")
            setPrice("")
            setQuantity("")
        } else {
            if(name === ""){
                setName("Enter something");
                setTimeout(() => setName(""), 700)
            }
            if(price === ""){
                setPrice("Enter something");
                setTimeout(() => setPrice(""), 700)
            }
            if(quantity === ""){
                setQuantity("Enter something");
                setTimeout(() => setQuantity(""), 700)
            }
        }

    }

    function handleOnChangeName(e) {
        setName(e.target.value)
    }

    function handleOnChangePrice(e) {
        if(isNaN(e.target.value)){
            setPrice("Enter a number!");
            setTimeout(() => setPrice(""), 700)
        } else{
            setPrice(e.target.value)
        }
        
    }

    function handleOnChangeQuantity(e) {
        if(isNaN(e.target.value)){
            setQuantity("Enter a number!");
            setTimeout(() => setQuantity(""), 700)
        } else{
            setQuantity(e.target.value)
        }
        
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label className="label__lg">
                    What sweet do you wanna add?
                </label>
            </h2>
            <label for="name">Sweet name:</label>
            <input
                id="name"
                type="text"
                className="input input__lg"
                name="name"
                autoComplete="off"
                value={name}
                onChange={handleOnChangeName}
            />
          <label for="price">Price:</label>  
            <input
                id="price"
                type="text"
                className="input input__lg"
                name="price"
                autoComplete="off"
                value={price}
                onChange={handleOnChangePrice}
            />

          <label for="quantity">Quantity:</label>  
            <input
                id="quantity"
                type="text"
                className="input input__lg"
                name="quantity"
                autoComplete="off"
                value={quantity}
                onChange={handleOnChangeQuantity}
            />

          <label for="image">Image:</label><br></br>
          {/* <input type="file" id="image" name="image" /> */}
          <input
                id="image"
                type="file"
                name="image"
                autoComplete="off"
                required
            />

          {/* <input id="file" type="file" multiple /> */}
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    );
}
