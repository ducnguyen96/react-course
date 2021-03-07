import "./App.css";
import React, { Component } from "react";
// import UserInput from "./1/UserInput/UserInput";
// import UserOutput from "./1/UserOutput/UserOutput";
import ValidationComponent from "./2/ValidationComponent/ValidationComponent";
import CharComponent from "./2/CharComponent/CharComponent";

class App extends Component {
  state = {
    // username: "random-username",
    text: "",
  };

  // changeUsernameHandler = (event) => {
  //   this.setState({
  //     username: event.target.value,
  //   });
  // };

  changeLengthListener = (event) => {
    this.setState({ text: event.target.value });
  };

  onClickHandler = (index) => {
    // console.log("index :", index);
    const str =
      this.state.text.slice(0, index) + this.state.text.slice(index + 1);
    this.setState({ text: str });
  };

  render() {
    return (
      <div className="App">
        {/* ASSIGNMENT 1 */}
        {/* <UserInput
          changed={this.changeUsernameHandler}
          value={this.state.username}
        />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} /> */}

        {/* ASSIGNMENT 2 */}
        <input onChange={this.changeLengthListener} value={this.state.text} />
        <ValidationComponent text={this.state.text} />
        {[...this.state.text].map((char, index) => {
          return (
            <CharComponent
              value={char}
              key={index}
              clicked={() => this.onClickHandler(index)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
