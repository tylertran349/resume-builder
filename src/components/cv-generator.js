import React, { Component } from "react";

function PersonalInfoGenerator(props) {
    return (
        <div id="personal-info-section">
            <span>Generated CV - Personal Info</span>
            <span>{props.firstName}</span>
            <span>{props.lastName}</span>
            <span>{props.email}</span>
            <span>{props.phoneNumber}</span>
        </div>
    );
}

function EducationGenerator(props) {
    const { educationItems  } = props;
    return (
        <div id="education-section">
            <span>Generated CV - Education</span>
            {educationItems.map((item) => {
                return (
                    <div>
                        <span>Institution: {item.institution}</span>
                        <span>Credential: {item.credential}</span>
                        <span>Start date: {item.startDate}</span>
                        <span>End date: {item.endDate}</span>
                        <br></br>
                    </div> 
                )
            })}
        </div>
    )
}

function ExperienceGenerator(props) {
    const { experienceItems } = props;
    return (
        <div id="experience-section">
            <span>Generated CV - Experience</span>
            {experienceItems.map((item) => {
                return (
                    <div>
                        <span>Company name: {item.companyName}</span>
                        <span>Job title: {item.jobTitle}</span>
                        <span>Job description: {item.jobDescription}</span>
                        <span>Start date: {item.startDate}</span>
                        <span>End date: {item.endDate}</span>
                        <br></br>
                    </div> 
                )
            })}
        </div>
    )
}

export { PersonalInfoGenerator, EducationGenerator, ExperienceGenerator };