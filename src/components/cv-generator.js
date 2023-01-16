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
    const { educationItems } = props;
    return (
        <div id="education-section">
            <span>Generated CV - Education</span>
            {educationItems.map((item) => {
                console.log(item.institution);
                return (
                    <div>
                        <span>Institution: {item.institution}</span>
                    </div>
                )
            })}
        </div>
    )
}

export { PersonalInfoGenerator, EducationGenerator };