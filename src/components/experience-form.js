import React, { Component } from "react";
import { ExperienceGenerator } from "./cv-generator";
import uniqid from "uniqid"
import moment from "moment"

class Experience extends Component {
    constructor() {
        super();
  
        this.state = {
            experienceItem: {
                companyName: '',
                jobTitle: '',
                jobDescription: '',
                startDate: '',
                endDate: '',
                id: uniqid()
            },
            experienceItems: []
        };

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    addItem = (e) => {
        const { experienceItems, experienceItem } = this.state;
        e.preventDefault();
        this.setState({
            experienceItems: [...experienceItems, experienceItem], // Changes experienceItems array to be a copy of the experienceItems array (prior to update) + the newest blank experienceItem
            experienceItem: {
                companyName: '',
                jobTitle: '',
                startDate: '',
                endDate: '',
                id: uniqid()
            }
        });
    }

    removeItem = (e) => {
        const { experienceItems, experienceItem } = this.state;
        e.preventDefault();
        console.log(e.target.id);
        let tempList = experienceItems; // Create temporary list to store experienceItems (prior to item deletion)
        tempList.splice(e.target.id, 1); // Delete the item from tempList (tempList now contains the correct array)
        this.setState({
            experienceItems: tempList // Set experienceItems to be tempList
        });
    }

    handleInputChange = (e) => {
        const { experienceItems } = this.state;
        let tempList = experienceItems; // Create temporary list
        if(e.target.name === "startDate" || e.target.name === "endDate") {
            tempList[e.target.id][e.target.name] = moment(e.target.value).format('MM/DD/YYYY'); // If value that was changed is a date, format it using moment before storing it in the state
        } else {
            tempList[e.target.id][e.target.name] = e.target.value; // Change the value of the input field that was changed
        }
        this.setState({
            experienceItems: tempList // Set experienceItems to tempList (tempList contains the updated array)
        });
    }

    render() {
        const { experienceItems } = this.state;
        return (
            <div id="experience-form">
                <span id="form-section-title">Experience</span>
                {experienceItems.map((item, index) => {
                    return (
                    <form>
                        <input id={index} name="companyName" type="text" placeholder="Name of company" onChange={this.handleInputChange}></input>
                        <input id={index} name="jobTitle" type="text" placeholder="Job title/position" onChange={this.handleInputChange}></input>
                        <input id={index} name="jobDescription" type="text" placeholder="Job description" onChange={this.handleInputChange}></input>
                        <input id={index} name="startDate" type="date" data-date="" data-date-format="MMMM DD YYYY" placeholder="Start date" onChange={this.handleInputChange}></input>
                        <input id={index} name="endDate" type="date" data-date="" data-date-format="MMMM DD YYYY" placeholder="End date" onChange={this.handleInputChange}></input>
                        <button id={index} onClick={this.removeItem}>Delete</button>
                    </form>
                    )
                })}
                <button onClick={this.addItem}>Add Experience</button>
                <ExperienceGenerator experienceItems={experienceItems} />
            </div>
        )
    }
}

export { Experience };