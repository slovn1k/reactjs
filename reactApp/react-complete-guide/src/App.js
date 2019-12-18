import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person"; // here we are importing new component

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am react APP</h1>
        <p>This really works!</p>
        <Person name="Alex" age="27">
          My hobbies: Racing
        </Person>
        {/* here we are using our new component */}
      </div>
    );

    // example of creating reactelement
    // return React.createElement('div', null, 'h1', "I'am react App"); here we create a div that has inside two textes

    // return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Does this work now?")); here we create div with class App that has another react element with it's text
  }
}

export default App;
