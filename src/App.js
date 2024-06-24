import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";

function App() {

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
      {/* key = id in html */}
      {fruitArray.map((e,i) => {
        return <div key={i} onClick={() => handleOnClick(e)}>{e}</div>
      })} 
    </div>
  );
}

export default App;
