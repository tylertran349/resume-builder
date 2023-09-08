import React, { Component } from "react";

export class SkillsCertificationsInterestsForm extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.handleInputChange(e.target.value, e.target.name, null, null);
  }

  render() {
    return (
        <form id="skills-certifications-interests-form">
          <span id="form-section-title">Certifications, Skills & Interests</span>
          <input type="text" name="certifications" placeholder="Comma-separated list of certifications" value={this.props.certifications} onChange={this.handleInputChange}></input>
          <input type="text" name="skills" placeholder="Comma-separated list of skills" value={this.props.skills} onChange={this.handleInputChange}></input>
          <input type="text" name="interests" placeholder="Comma-separated list of interests" value={this.props.interests} onChange={this.handleInputChange}></input>
        </form>
    );
  }
}