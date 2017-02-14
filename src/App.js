import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var people = [
  {key: 1, name: "Raggi", age: 35},
  {key: 2, name: "Oli", age: 53},
  {key: 3, name: "Egill", age: 32},  
  ];
const peoples = people.map((people) =>
    <li className="list-group-item" key={people.key}> Name: {people.name}<br /> Age: {people.age}</li>
    );

const myInput = 
    <form>
      <div className="input-group">
        <input type="text" className="form-control"></input>
      </div>
    </form>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My First React App</h2>
        </div>
          {myInput}
        <ul className="list-group">
          {peoples} 
        </ul>
      </div>
    );
  }
}


export default App;
