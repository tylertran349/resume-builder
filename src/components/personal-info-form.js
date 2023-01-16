import React, { Component } from "react";
import { PersonalInfoGenerator } from "./cv-generator";

class PersonalInfo extends Component {
    constructor() {
      super();
  
      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
      };
  
      this.changeFirstName = this.changeFirstName.bind(this);
      this.changeLastName = this.changeLastName.bind(this);
      this.changeEmail = this.changeEmail.bind(this);
      this.changePhoneNumber = this.changePhoneNumber.bind(this);
    }
  
    changeFirstName(e) {
      e.preventDefault();
      const { firstName } = this.state; // Destructure state
      this.setState({ firstName: e.target.value });
    }
  
    changeLastName(e) {
      e.preventDefault();
      const { lastName } = this.state; // Destructure state
      this.setState({ lastName: e.target.value });
    }

    changeEmail(e) {
        e.preventDefault();
        const { email } = this.state; // Destructure state
        this.setState({ email: e.target.value });
    }

    changePhoneNumber(e) {
        e.preventDefault();
        const { phoneNumber } = this.state; // Destructure state
        this.setState({ phoneNumber: e.target.value });
    }
  
    render() {
      const { firstName, lastName, email, phoneNumber } = this.state; // Destructure state
      return <div id="personal-info-form">
        <form>
          <span id="form-section-title">Personal Information</span>
          <input type="text" placeholder="First name" onChange={this.changeFirstName}></input>
          <input type="text" placeholder="Last name" onChange={this.changeLastName}></input>
          <input type="text" placeholder="Email" onChange={this.changeEmail}></input>
          <input type="text" placeholder="Phone number" onChange={this.changePhoneNumber}></input>
        </form>
        <PersonalInfoGenerator firstName={firstName} lastName={lastName} email={email} phoneNumber={phoneNumber} />
      </div>;
    }
}

export { PersonalInfo };