import { useState } from "React";

function Learning() {
  const [thingsArray, setthingsArray] = useState(["Thing1", "Thing2"]);

  function addItem() {
    setthingsArray((prevThingsArray) => [
      ...prevThingsArray,
      `Things ${prevThingsArray.length}`,
    ]);
  }

  const [isGoingOut, setisGoingOut] = useState(true);

  const [count, setCount] = useState(0);

  function flip() {
    setisGoingOut((prevState) => !prevState);
  }

  function add() {
    setCount(count + 1);
  }

  function detract() {
    setCount(count - 1);
  }

  const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

  console.log(thingsElements);

  return (
    <>
      <button onClick={flip}>FLIP</button>
      <h1>{isGoingOut ? "yes" : "No"} </h1>
      <h1>{count}</h1>
      <button onClick={detract}>-</button>
      <button onClick={add}>+</button>
    </>
  );
}

export default Learning;
