import React from "react";
import moment from "moment";

function CVPreview(props) {
    return (
        <div id="cv-preview">
            <span>CV Preview</span>
            <br></br>
            <div id="personal-info-section">
                <span>First name: {props.firstName}</span>
                <span>Last name: {props.lastName}</span>
                <span>Email: {props.email}</span>
                <span>Phone number: {props.phoneNumber}</span>
            </div>
            <br></br>
            <div id="education-section">
                {props.educationItems.map((item) => {
                    if(item.startDate === "" && item.endDate === "") {
                        return (
                            <div>
                                <span>Institution: {item.institution}</span>
                                <span>Credential: {item.credential}</span>
                                <span>Start date:</span>
                                <span>End date:</span>
                                <br></br>
                            </div> 
                        )
                    } else if(item.startDate === "") {
                        return (
                            <div>
                                <span>Institution: {item.institution}</span>
                                <span>Credential: {item.credential}</span>
                                <span>Start date:</span>
                                <span>End date: {moment(item.endDate).format('MMMM YYYY')}</span>
                                <br></br>
                            </div> 
                        )
                    } else if(item.endDate === "") {
                        return (
                            <div>
                                <span>Institution: {item.institution}</span>
                                <span>Credential: {item.credential}</span>
                                <span>Start date: {moment(item.startDate).format('MMMM YYYY')}</span>
                                <span>End date:</span>
                                <br></br>
                            </div> 
                        )
                    } else {
                        return (
                            <div>
                                <span>Institution: {item.institution}</span>
                                <span>Credential: {item.credential}</span>
                                <span>Start date: {moment(item.startDate).format('MMMM YYYY')}</span>
                                <span>End date: {moment(item.endDate).format('MMMM YYYY')}</span>
                                <br></br>
                            </div> 
                        )
                    }
                })}
            </div>
            <br></br>
            <div id="experience-section">
                {props.experienceItems.map((item) => {
                    if(item.startDate === "" && item.endDate === "") {
                        return (
                            <div>
                                <span>Company name: {item.companyName}</span>
                                <span>Job title: {item.jobTitle}</span>
                                <span>Job description: {item.jobDescription}</span>
                                <span>Start date:</span>
                                <span>End date:</span>
                                <br></br>
                            </div> 
                        )
                    } else if(item.startDate === "") {
                        return (
                            <div>
                                <span>Company name: {item.companyName}</span>
                                <span>Job title: {item.jobTitle}</span>
                                <span>Job description: {item.jobDescription}</span>
                                <span>Start date:</span>
                                <span>End date: {moment(item.endDate).format('MMMM YYYY')}</span>
                                <br></br>
                            </div> 
                        )
                    } else if(item.endDate === "") {
                        return (
                            <div>
                                <span>Company name: {item.companyName}</span>
                                <span>Job title: {item.jobTitle}</span>
                                <span>Job description: {item.jobDescription}</span>
                                <span>Start date: {moment(item.startDate).format('MMMM YYYY')}</span>
                                <span>End date:</span>
                                <br></br>
                            </div> 
                        )
                    } else {
                        return (
                            <div>
                                <span>Company name: {item.companyName}</span>
                                <span>Job title: {item.jobTitle}</span>
                                <span>Job description: {item.jobDescription}</span>
                                <span>Start date: {moment(item.startDate).format('MMMM YYYY')}</span>
                                <span>End date: {moment(item.endDate).format('MMMM YYYY')}</span>
                                <br></br>
                            </div> 
                        )
                    }
                })}
            </div>
        </div>
    )
}

export { CVPreview };