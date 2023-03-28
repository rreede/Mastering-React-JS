import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import mockData from "./mock-data";
import ReadOnlyRow from "./components/ReadOnlyRow";

function App() {
  const [contacts, setContacts] = useState(mockData);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];

    setContacts(newContacts);
  };

  return (
    <div className="App">
      <div className="addContactForm">
        <h2>🤹‍♂️ Add a contact</h2>
        <form onSubmit={handleAddFormSubmit} action="">
          <input
            required="required"
            type="text"
            name="fullName"
            id=""
            placeholder="Enter your full name..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="address"
            id=""
            placeholder="Enter your address... "
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="phoneNumber"
            id=""
            placeholder="Enter your phone number... "
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="email"
            id=""
            placeholder="Enter your email..."
            onChange={handleAddFormChange}
          />
          <br />
          <button className="formSubmitButton" type="submit">
            Add Contact
          </button>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Address</td>
            <td>Phone number</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <ReadOnlyRow contact={contact} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
