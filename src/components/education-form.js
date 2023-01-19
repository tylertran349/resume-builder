import React, { Component } from "react";
import { EducationGenerator } from "./cv-generator";
import uniqid from "uniqid"
import moment from "moment"

class Education extends Component {
    constructor() {
        super();
  
        this.state = {
            educationItem: {
                institution: '',
                credential: '',
                startDate: '',
                endDate: '',
                id: uniqid()
            },
            educationItems: []
        };

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    addItem = (e) => {
        const { educationItems, educationItem } = this.state;
        e.preventDefault();
        this.setState({
            educationItems: [...educationItems, educationItem], // Changes educationItems array to be a copy of the educationItems array (prior to update) + the newest blank educationItem
            educationItem: {
                institution: '',
                credential: '',
                startDate: '',
                endDate: '',
                id: uniqid()
            }
        });
    }

    removeItem = (e) => {
        const { educationItems, educationItem } = this.state;
        e.preventDefault();
        console.log(e.target.id);
        let tempList = educationItems; // Create temporary list to store educationItems (prior to item deletion)
        tempList.splice(e.target.id, 1); // Delete the item from tempList (tempList now contains the correct array)
        this.setState({
            educationItems: tempList // Set educationItems to be tempList
        });
    }

    handleInputChange = (e) => {
        const { educationItems } = this.state;
        let tempList = educationItems; // Create temporary list
        if(e.target.name === "startDate" || e.target.name === "endDate") {
            tempList[e.target.id][e.target.name] = moment(e.target.value).format('MM/DD/YYYY'); // If value that was changed is a date, format it using moment before storing it in the state
        } else {
            tempList[e.target.id][e.target.name] = e.target.value; // Change the value of the input field that was changed
        }
        this.setState({
            educationItems: tempList // Set educationItems to tempList (tempList contains the updated array)
        });
    }

    render() {
        const { educationItems } = this.state;
        return (
            <div id="education-form">
                <span id="form-section-title">Education</span>
                {educationItems.map((item, index) => {
                    return (
                    <form>
                        <input id={index} name="institution" type="text" placeholder="Name of university/institution" onChange={this.handleInputChange}></input>
                        <input id={index} name="credential" type="text" placeholder="Degree/credential" onChange={this.handleInputChange}></input>
                        <input id={index} name="startDate" type="date" data-date="" data-date-format="MMMM DD YYYY" placeholder="Start date" onChange={this.handleInputChange}></input>
                        <input id={index} name="endDate" type="date" data-date="" data-date-format="MMMM DD YYYY" placeholder="End date" onChange={this.handleInputChange}></input>
                        <button id={index} onClick={this.removeItem}>Delete</button>
                    </form>
                    )
                })}
                <button onClick={this.addItem}>Add Education Item</button>
                <EducationGenerator educationItems={educationItems} />
            </div>
        )
    }
}

export { Education };