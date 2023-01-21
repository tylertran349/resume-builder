import React, { Component } from "react";

export class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  addItem() {
    this.props.addItem("educationItems");
  }

  deleteItem(e) {
    this.props.deleteItem("educationItems", e.target.id);
  }

  handleInputChange(e) {
    this.props.handleInputChange(e.target.value, e.target.name, e.target.id, "educationItem");
  }

  render() {
    return (
        <div id="education-form">
                <span id="form-section-title">Education</span>
                {this.props.educationItems.map((item, index) => {
                    return (
                    <form>
                        <input id={index} name="institution" type="text" placeholder="Name of university/institution" value={item.institution} onChange={this.handleInputChange}></input>
                        <input id={index} name="credential" type="text" placeholder="Degree/credential" value={item.credential} onChange={this.handleInputChange}></input>
                        <input id={index} name="startDate" type="date" data-date="" data-date-format="MMMM DD YYYY" placeholder="Start date" value={item.startDate} onChange={this.handleInputChange}></input>
                        <input id={index} name="endDate" type="date" data-date="" data-date-format="MMMM DD YYYY" placeholder="End date" value={item.endDate} onChange={this.handleInputChange}></input>
                        <button id={index} onClick={this.deleteItem}>Delete</button>
                    </form>
                    )
                })}
                <button onClick={this.addItem}>Add Education Item</button>
            </div>
    )
  }
}