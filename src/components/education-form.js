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
        <div id="education-forms">
            <span id="form-section-title">Education</span>
                {this.props.educationItems.map((item, index) => {
                    return (
                    <form id="education-item-form">
                        <input id={index} name="institution" type="text" placeholder="Name of university/institution" value={item.institution} onChange={this.handleInputChange}></input>
                        <input id={index} name="credential" type="text" placeholder="Degree/credential/course name" value={item.credential} onChange={this.handleInputChange}></input>
                        <label htmlFor="startDate">Start Date</label>
                        <input id={index} name="startDate" type="month" data-date="" data-date-format="MMMM YYYY" value={item.startDate} onChange={this.handleInputChange}></input>
                        <label htmlFor="endDate">End Date</label>
                        <input id={index} name="endDate" type="month" data-date="" data-date-format="MMMM YYYY" value={item.endDate} onChange={this.handleInputChange}></input>
                        <button className="delete-item-button" id={index} onClick={this.deleteItem}>Delete Item</button>
                    </form>
                    )
                })}
            <button id="add-item-button" onClick={this.addItem}>Add Item</button>
        </div>
    )
  }
}