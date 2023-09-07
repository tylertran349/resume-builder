import React, { Component } from "react";

export class PersonalInfoForm extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.handleInputChange(e.target.value, e.target.name, null, null);
  }

  render() {
    return (
        <form id="personal-info-form">
          <span id="form-section-title">Personal Information</span>
          <input type="text" name="firstName" placeholder="First name" value={this.props.firstName} onChange={this.handleInputChange}></input>
          <input type="text" name="lastName" placeholder="Last name" value={this.props.lastName} onChange={this.handleInputChange}></input>
          <input type="text" name="email" placeholder="Email"  value={this.props.email} onChange={this.handleInputChange}></input>
          <input type="text" name="phoneNumber" placeholder="Phone number" value={this.props.phoneNumber} onChange={this.handleInputChange}></input>
          <input type="text" name="website" placeholder="LinkedIn/GitHub/portfolio/other URL" value={this.props.website} onChange={this.handleInputChange}></input>
          <input type="text" name="location" placeholder="Location" value={this.props.location} onChange={this.handleInputChange}></input>
        </form>
    );
  }
}