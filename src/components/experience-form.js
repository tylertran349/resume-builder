import React, { Component } from "react";

export class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  addItem() {
    this.props.addItem("experienceItems");
  }

  deleteItem(e) {
    this.props.deleteItem("experienceItems", e.target.id);
  }

  handleInputChange(e) {
    this.props.handleInputChange(e.target.value, e.target.name, e.target.id, "experienceItem");
  }

  render() {
    return (
        <div id="experience-form">
                <span id="form-section-title">Experience</span>
                {this.props.experienceItems.map((item, index) => {
                    return (
                    <form>
                        <input id={index} name="companyName" type="text" placeholder="Name of company/organization" value={item.companyName} onChange={this.handleInputChange}></input>
                        <input id={index} name="jobTitle" type="text" placeholder="Job title/position" value={item.jobTitle} onChange={this.handleInputChange}></input>
                        <input id={index} name="jobDescription" type="text" placeholder="Job description" value={item.jobDescription} onChange={this.handleInputChange}></input>
                        <label for="startDate">Start Date</label>
                        <input id={index} name="startDate" type="month" data-date="" data-date-format="MM YYYY" value={item.startDate} onChange={this.handleInputChange}></input>
                        <label for="endDate">End Date</label>
                        <input id={index} name="endDate" type="month" data-date="" data-date-format="MM YYYY" value={item.endDate} onChange={this.handleInputChange}></input>
                        <button id={index} onClick={this.deleteItem}>Delete</button>
                    </form>
                    )
                })}
                <button onClick={this.addItem}>Add Experience Item</button>
            </div>
    )
  }
}