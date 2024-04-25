import React, { useState } from "react";

export default function SweetList(props) {

  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newQuantity, setNewQuantity] = useState('');


  function handleOnChangeName(e) {
    setNewName(e.target.value)
  }

  function handleOnChangePrice(e) {
    setNewPrice(e.target.value)
  }

  function handleOnChangeQuantity(e) {
    setNewQuantity(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.updateTaskName(props.id, newName, newPrice, newQuantity);
    setEditing(false);
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
          <label for="newName"> New name for: {props.name} </label>  
          <input
                id={props.id}
                type="text"
                className="todo-text"
                name="newName"
                autoComplete="off"
                value={newName}
                onChange={handleOnChangeName}
            />
          <label for="newPrice"> New price for: {props.price} </label>  
            <input
                id="newPrice"
                type="text"
                className="todo-text"
                name="newPrice"
                autoComplete="off"
                value={newPrice}
                onChange={handleOnChangePrice}
            />

          <label for="newQuantity">New quantity for: {props.quantity}</label>  
            <input
                id="newQuantity"
                type="text"
                className="todo-text"
                name="newQuantity"
                autoComplete="off"
                value={newQuantity}
                onChange={handleOnChangeQuantity}
            />
      </div>
      <div className="btn-group">
        <button type="button" className="btn todo-cancel" onClick={() => setEditing(false)}>
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <label className="todo-label" htmlFor={props.id}>
          Name: {props.name}  
          <span className="space-description"> | </span> 
          Price: {props.price} 
          <span className="space-description"> | </span> 
          Quantity: {props.quantity}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => setEditing(true)}>
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          name={props.id}
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}