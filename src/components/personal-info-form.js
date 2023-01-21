import React, { Component } from "react";
import { PersonalInfoGenerator } from "./cv-generator"

class PersonalInfo extends Component {
    constructor() {
      super();
  
      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
      };
      
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  
    render() {
      const { firstName, lastName, email, phoneNumber } = this.state; // Destructure state
      return <div id="personal-info-form">
        <form>
          <span id="form-section-title">Personal Information</span>
          <input type="text" name="firstName" placeholder="First name" onChange={this.handleInputChange}></input>
          <input type="text" name="lastName" placeholder="Last name" onChange={this.handleInputChange}></input>
          <input type="text" name="email" placeholder="Email" onChange={this.handleInputChange}></input>
          <input type="text" name="phoneNumber" placeholder="Phone number" onChange={this.handleInputChange}></input>
        </form>
        <PersonalInfoGenerator firstName={firstName} lastName={lastName} email={email} phoneNumber={phoneNumber} />
      </div>;
    }
}

export { PersonalInfo };