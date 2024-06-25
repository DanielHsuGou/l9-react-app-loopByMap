import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function App() {

  // logic
  const user = {
    name: "DDD",
    age: 18,
    money: false,
  };

  const fruitArray = ["a", "b", "c"]

  function handleOnClick(text) {
    console.log(text)
  }
  
  return (
    <div className="App">
      <Navbar />
      <h1>Hello {user.name}!</h1>
      <h3>
        You are {user.age}
        {user.money &&
          (user.age >= 18 && user.money
            ? ", you can drink!"
            : `, sorry you are not allowed to be here!`)}
      </h3>
      <Calendar value={"2024-06-24"} />
      {/* key = id in html (should be on top)*/}
      {fruitArray.map((e, i) => {
        // condition (logic)
        if (e !== "a") {
          return (
            <div key={i} onClick={() => handleOnClick(e)}>
              {e}
            </div>
          );
        }
      })}
    </div>
  );
}

export default App;
