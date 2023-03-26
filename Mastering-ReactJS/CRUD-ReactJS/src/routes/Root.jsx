import "./App.css";
import Employees from "./Employees";
import { Link } from "react-router-dom";

function App() {
  const handleDelete = (id) => {
    let index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);

    Employees.splice(index, 1);
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Employees && Employees.length > 0
            ? Employees.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.Age}</td>
                    <td>
                      <Link to={`/edit`}>
                        <button onClick={() => alert(item.id)}>Edit</button>
                      </Link>
                      <br />
                      <button onClick={() => handleDelete(item.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            : "dog"}
        </tbody>
      </table>

      <Link to="/create">
        <button>CREATE</button>
      </Link>
    </div>
  );
}

export default App;
