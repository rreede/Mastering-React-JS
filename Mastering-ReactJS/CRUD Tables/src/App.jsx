import { useState } from "react";
import "./App.css";
import People from "./People";

import Learning from "./Learning";

import Repeat from "./Repeat";

function App() {
  const peopleList = People.map(function (person) {
    return <p key={person.id}>Name: {person.fullName}</p>;
  });

  const [newPerson, setnewPerson] = useState(peopleList);

  function addNew() {
    setnewPerson((prevState) => [...peopleList]);
  }

  const thingsArray = ["iteasfsafsadas", "lalalal"];

  const mapping = thingsArray.map(function (item) {
    return <p key={item}>{item}</p>;
  });

  function handleClick() {
    const newThingText = `Thing ${thingsArray.length + 1} `;
    thingsArray.push(newThingText);
    console.log(thingsArray);
  }

  const [contacts, setContacts] = useState(People);
  const [addFormData, setaddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  return (
    <div className="App">
      <button onClick={addNew}>Add</button>

      {peopleList}

      <Repeat />
      <Learning />

      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Adress</td>
            <td>Phone Number</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td>{contact.fullName}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {mapping}
      <h2>Add a contact</h2>

      <form action="">
        <input
          type="text"
          required="required"
          name="fullName"
          id=""
          placeholder="Enter a name"
        />

        <input
          type="text"
          required="required"
          name="fullName"
          id=""
          placeholder="Enter a name..."
        />

        <input
          type="text"
          required="required"
          name="address"
          id=""
          placeholder="Enter an adress..."
        />

        <input
          type="text"
          required="required"
          name="phoneNumber"
          id=""
          placeholder="Enter a phonenumber"
        />
        <input
          type="email"
          required="required"
          name="email"
          id=""
          placeholder="Enter an email"
        />

        <button type="submit" onClick={handleClick}></button>
      </form>
    </div>
  );
}

export default App;
