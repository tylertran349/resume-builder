import React, { Component } from "react";
import uniqid from "uniqid";
import { Header } from "./components/header"
import { PrintSaveButton } from "./components/print-save-button"
import { PersonalInfoForm } from "./components/personal-info-form";
import { EducationForm } from "./components/education-form"
import { ExperienceForm } from "./components/experience-form"
import { CVPreview } from "./components/cv-preview";
import { Footer } from "./components/footer"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      website: '',
      location: '',
      educationItem: {
        institution: '',
        credential: '',
        educationDescription: '',
        location: '',
        startDate: '',
        endDate: '',
        id: uniqid()
      },
      educationItems: [],
      experienceItem: {
        companyName: '',
        jobTitle: '',
        jobDescription: '',
        location: '',
        startDate: '',
        endDate: '',
        id: uniqid()
      },
      experienceItems: [],
    }

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  addItem(listName) {
    // Add a blank educationItem to the educationItems list
    if(listName === "educationItems") {
      this.setState({
        educationItems: [...this.state.educationItems, this.state.educationItem],
        educationItem: {
          institution: '',
          credential: '',
          educationDescription: '',
          location: '',
          startDate: '',
          endDate: '',
          id: uniqid()
        }
      })
    }
    if(listName === "experienceItems") {
      this.setState({
        experienceItems: [...this.state.experienceItems, this.state.experienceItem],
        experienceItem: {
          companyName: '',
          jobTitle: '',
          jobDescription: '',
          location: '',
          startDate: '',
          endDate: '',
          id: uniqid()
        }
      })
    }
  }

  deleteItem(listName, index) {
    let tempList;

    // Education item remover for education items array
    if(listName === "educationItems") {
      tempList = this.state.educationItems;
      tempList.splice(index, 1);
      this.setState({
        educationItems: tempList
      });
    }
    
    // Experience item remover for experience items array
    if(listName === "experienceItems") {
      tempList = this.state.experienceItems;
      tempList.splice(index, 1);
      this.setState({
        experienceItems: tempList
      });
    }
  }

  handleInputChange(newText, property, index, objectName) {
    let tempList;

    // Personal info state editor
    if(index === null && objectName === null) {
      this.setState({
        [property]: newText
      });
    }

    // Education item state editor
    if(objectName === "educationItem") {
      tempList = this.state.educationItems;
      tempList[index][property] = newText;
      this.setState({
        educationItems: tempList
      });
    }

    // Experience item state editor
    if(objectName === "experienceItem") {
      tempList = this.state.experienceItems;
      tempList[index][property] = newText;
      this.setState({
        experienceItems: tempList
      });
    }
  }

  render() {
    return (
      <div id="content">
        <Header />
        <PrintSaveButton />
        <div id="forms" className="noprint">
          <PersonalInfoForm firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email}
          phoneNumber={this.state.phoneNumber} website={this.state.website} location={this.state.location} handleInputChange={this.handleInputChange} />
          <EducationForm educationItems={this.state.educationItems} addItem={this.addItem} deleteItem={this.deleteItem} handleInputChange={this.handleInputChange} />
          <ExperienceForm experienceItems={this.state.experienceItems} addItem={this.addItem} deleteItem={this.deleteItem} handleInputChange={this.handleInputChange} />
        </div>
        <CVPreview firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} phoneNumber={this.state.phoneNumber} website={this.state.website} location={this.state.location} educationItems={this.state.educationItems} experienceItems={this.state.experienceItems} />
        <Footer />
      </div>
    )
  }
}

export default App;