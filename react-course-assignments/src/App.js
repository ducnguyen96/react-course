import "./App.css";
import React, { Component } from "react";
import UserInput from "./1/UserInput/UserInput";
import UserOutput from "./1/UserOutput/UserOutput";

class App extends Component {
  state = {
    username: "random-username",
  };

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.changeUsernameHandler}
          value={this.state.username}
        />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
