import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from './components/List';
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string; // ? means string or undefined
  }[]; //array of objects
}

function App() {
  const [people, setPeople] = React.useState<IState["people"]>([
{
  name: "Lebron James",
  url: "https://media.gettyimages.com/photos/lebron-james-of-the-los-angeles-lakers-celebrate-his-basket-and-foul-picture-id1211221823",
  age:36,
  note: "Allegic to staying on the same team"
}
  ]);

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
