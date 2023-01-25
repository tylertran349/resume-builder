import React from "react";
import moment from "moment";

function CVPreview(props) {
    return (
        <div id="cv-preview">
            <div id="cv-preview-contents">
                <div id="personal-info-section">
                    <span id="full-name">{props.firstName} {props.lastName}</span>
                    <div id="contact-info">
                        <span>{props.email}</span>
                        {(props.email !== "" && props.phoneNumber !== "") && 
                            <span id="bullet-point">&nbsp;&nbsp;&nbsp;●&nbsp;&nbsp;&nbsp;</span>
                        }
                        <span>{props.phoneNumber}</span>
                    </div>
                </div>
                <div id="education-section">
                    {props.educationItems.length !== 0 &&
                        <span id="cv-section-title">EDUCATION<hr/></span>
                    }
                    {props.educationItems.map((item) => {
                        if(item.startDate === "" && item.endDate === "") {
                            return (
                                <div id="education-item">
                                    <span><strong>{item.institution}</strong> | {item.credential}</span>
                                    <div id="education-right-side">
                                        <span>{item.institution}</span>
                                    </div>
                                </div> 
                            )
                        } else if(item.startDate === "") {
                            return (
                                <div id="education-item">
                                    <span><strong>{item.institution}</strong> | {item.credential}</span>
                                    <div id="education-right-side">
                                        <span>{moment(item.endDate).format('MMMM YYYY')}</span>
                                    </div>
                                </div> 
                            )
                        } else if(item.endDate === "") {
                            return (
                                <div id="education-item">
                                    <span><strong>{item.institution}</strong> | {item.credential}</span>
                                    <div id="education-right-side">
                                        <span>{moment(item.startDate).format('MMMM YYYY')}</span>
                                    </div>
                                </div> 
                            )
                        } else {
                            return (
                                <div id="education-item">
                                    <span><strong>{item.institution}</strong> | {item.credential}</span>
                                    <div id="education-right-side">
                                        <span>{moment(item.startDate).format('MMMM YYYY')} - {moment(item.endDate).format('MMMM YYYY')}</span>
                                    </div>
                                </div> 
                            )
                        }
                    })}
                </div>
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
                                </div> 
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export { CVPreview };