import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
    };

    this.changeFirstName = this.changeFirstName.bind(this);
  }

  changeFirstName(e) {
    const { firstName } = this.state; // Destructure states
    this.setState((state) => ({
      firstName: e.target.value
    }));
    console.log(firstName);
  }

  render() {
    return <div id="content">
      <form>
        <span id="form-section-title">Personal Information</span>
        <input type="text" placeholder="First Name" onChange={this.changeFirstName}></input>
      </form>
    </div>;
  }
}

export default App;
