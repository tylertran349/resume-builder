import React, { Component } from "react";
import { PersonalInfo } from "./components/personal-info-form";
import { Education } from "./components/education-form";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="content">
        <PersonalInfo />
        <Education />
      </div>
    )
  }
}

export default App;