import React, { useState, useEffect } from "react";
import SweetList from "./SweetList";
import Form from "./Form";

function Login(props) {

  const [sweets, setSweets] = useState([]);
  const DEV_URL = 'http://localhost:8080';
  const PROD_URL = 'http://3.125.105.131:8080';

  useEffect(() => {
    getAll()
  }, [])

  function getAll() {
    fetch(PROD_URL + "/api/backend/v1/")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const result = data.map(({ id, name, price, quantity }) => ({ id, name, price, quantity }));
        console.log(result);
        setSweets(result)
      })
      .catch(error => console.log("Error", error))
  }

  const taskList = sweets
    .map(sweet => (
      <SweetList
        id={sweet.id}
        name={sweet.name}
        price={sweet.price}
        quantity={sweet.quantity}
        completed={sweet.completed}
        key={sweet.id}
        updateTaskName={updateTaskName}
        deleteTask={deleteTask}
      />
    )
    );

  function updateTaskName(id, name, price, quantity) {
    const URL = `${PROD_URL}/api/backend/v1/update/${id}`;
    fetch(URL, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ "name": name,  "price": price,  "quantity": quantity })
    })
      .then((resp) => getAll())
      .catch(error => console.log("Error", error))
  }

  // POST task
  function addSweet(formData) {
    console.log("Data: " , formData)
    // headers: { 'Access-Control-Allow-Origin':'*' }
    const URL = PROD_URL + "/api/backend/v1/createForm";
    fetch(URL, {
      method: 'POST',
      body: formData
    },
    console.log(URL))
      .then(response => { getAll(); })
      .catch(error => console.log("Error", error))
  }

  // DELETE
  function deleteTask(id) {
    console.log("DELETE: " + id )
    const URL = PROD_URL + "/api/backend/v1/delete?id=" + id;
    fetch(URL, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => { getAll(); })
      .catch(error => console.log("Error", error))
  }

  return (
    <div id="login-container">
    <div className="todoapp stack-large">
      <Form addSweet={addSweet} />
      <h2 id="list-heading"> Sweet list </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
    </div>
  );
  
}

export default Login;
