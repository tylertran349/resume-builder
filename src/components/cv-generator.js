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
    const { institution, credential, startDate, endDate, id  } = props;
    return (
        <div>
            <span>Institution: {institution}</span>
            <span>Credential: {credential}</span>
            <span>Start date: {startDate}</span>
            <span>End date: {endDate}</span>
            <span>ID: {id}</span>
            <br></br>
        </div>
    )
}

export { PersonalInfoGenerator, EducationGenerator };