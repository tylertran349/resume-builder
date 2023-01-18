import React, { Component } from "react";
import { EducationGenerator } from "./cv-generator";
import uniqid from "uniqid"

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

    handleInputChange(event) {
        
    }

    render() {
        const { educationItems } = this.state;
        return (
            <div id="education-form">
                <span id="form-section-title">Education</span>
                {educationItems.map((item) => {
                    return (
                    <form>
                        <input type="text" placeholder="Name of university/institution" onChange={this.handleInputChange}></input>
                        <input type="text" placeholder="Degree/credential" onChange={this.handleInputChange}></input>
                        <input type="text" placeholder="Start date" onChange={this.handleInputChange}></input>
                        <input type="text" placeholder="End date" onChange={this.handleInputChange}></input>
                        <button>Delete</button>
                    </form>
                    )
                })}
                <button onClick={this.addItem}>Add Education Item</button>
                {/*
                <div id="education-section">
                    {educationItems.map((item) => {
                        return (
                        <EducationGenerator institution={item.institution} credential={item.credential} startDate={item.startDate} endDate={item.endDate} id={item.id} />
                        )
                    })}
                </div>
                */}
            </div>
        )
    }
}

export { Education };