import { useState } from "react";

const Home = () => {
  // let name = "Mario";

  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(24);

  const handleClick = (e) => {
    console.log(name, e);
  };

  const handleClickAgain = (name, e) => {
    console.log("hello" + name, e.type);
  };

  const changeName = () => {
    setName("Rene");
    setAge("26");
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={changeName}>Change Name</button>

      <button onClick={handleClick}>Button</button>
      <button
        onClick={(e) => {
          handleClickAgain("Rene", e);
        }}
      >
        Click me Again
      </button>
    </div>
  );
};

export default Home;
