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

        this.changeInstitution = this.changeInstitution.bind(this);
        this.changeCredential = this.changeCredential.bind(this);
        this.changeStartDate = this.changeStartDate.bind(this);
        this.changeEndDate = this.changeEndDate.bind(this);
    }

    addItem = (e) => {
        const { educationItems, educationItem } = this.state;
        e.preventDefault();
        this.setState({
            educationItems: educationItems.concat(educationItem),
            educationItem: {
                institution: '',
                credential: '',
                startDate: '',
                endDate: '',
                id: uniqid()
            }
        });
    }

    changeInstitution = (e) => {
        e.preventDefault();
        this.setState({ 
            educationItem: {
                institution: e.target.value,
                credential: this.state.educationItem.credential,
                startDate: this.state.educationItem.startDate,
                endDate: this.state.educationItem.endDate
            }
        });
    }

    changeCredential = (e) => {
        e.preventDefault();
        this.setState({ 
            educationItem: {
                institution: this.state.educationItem.institution,
                credential: e.target.value,
                startDate: this.state.educationItem.startDate,
                endDate: this.state.educationItem.endDate
            }
        });
    }

    changeStartDate = (e) => {
        e.preventDefault();
        this.setState({ 
            educationItem: {
                institution: this.state.educationItem.institution,
                credential: this.state.educationItem.credential,
                startDate: e.target.value,
                endDate: this.state.educationItem.endDate
            }
        });
    }

    changeEndDate = (e) => {
        e.preventDefault();
        this.setState({ 
            educationItem: {
                institution: this.state.educationItem.institution,
                credential: this.state.educationItem.credential,
                startDate: this.state.educationItem.startDate,
                endDate: e.target.value
            }
        });
    }

    render() {
        const { educationItems } = this.state;
        return (
            <div id="education-form">
                <span id="form-section-title">Education</span>
                {educationItems.map((item) => {
                    return (
                    <form>
                        <input type="text" placeholder="Name of university/institution" onChange={this.changeInstitution}></input>
                        <input type="text" placeholder="Degree/credential" onChange={this.changeCredential}></input>
                        <input type="text" placeholder="Start date"onChange={this.changeStartDate}></input>
                        <input type="text" placeholder="End date" onChange={this.changeEndDate}></input>
                        <button>Delete</button>
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