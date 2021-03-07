import "./App.css";
import React, { Component } from "react";
import Person from "./Person/Person";

// const App = (props) => {
//   const [personState, setPersonState] = useState({
//     persons: [
//       { name: "Max", age: 28 },
//       { name: "Duc", age: 22 },
//     ],
//     otherState: "someValue",
//   });

//   const switchNameHandler = () => {
//     setPersonState({
//       persons: [
//         { name: "Max", age: 28 },
//         { name: "Duc1", age: 22 },
//       ],
//     });
//   };

//   return (
//     <div className="App">
//       <p>Hello World</p>
//       <button onClick={switchNameHandler}>This is really working !</button>
//       <Person name="Duc">This is a free-text</Person>
//       <Person name={personState.persons[0].name} />
//       <Person name={personState.persons[1].name} />
//     </div>
//   );
// };

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Duc", age: 22 },
    ],
  };

  switchNameHandler = (newName) => {
    // console.log('Clicked !');

    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: newName, age: 22 },
      ],
    });
  };

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 22 },
      ],
    });
  }

  render() {
    return (
      <div className="App">
        <p>Hello World</p>
        <button onClick={this.switchNameHandler.bind(this, "haha")}>
          This is really working !
        </button>
        <Person name="Duc">This is a free-text</Person>
        <Person name={this.state.persons[0].name} />
        <Person name={this.state.persons[1].name} />
        <Person
          name={this.state.persons[1].name}
          click={this.switchNameHandler.bind(this, "Test")}
          changed={this.changeNameHandler}
        />
      </div>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `Hi, I'm a React App`))
}

export default App;
