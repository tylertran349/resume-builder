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
                                    <span><strong>{item.institution}</strong> {(item.institution.length !== 0 && item.credential.length !== 0) && <span> | </span>} {item.credential}</span>
                                </div> 
                            )
                        } else if(item.startDate === "") {
                            return (
                                <div id="education-item">
                                    <span><strong>{item.institution}</strong> {(item.institution.length !== 0 && item.credential.length !== 0) && <span> | </span>} {item.credential}</span>
                                    <span id="education-right-side">{moment(item.endDate).format('MMMM YYYY')}</span>
                                </div> 
                            )
                        } else if(item.endDate === "") {
                            return (
                                <div id="education-item">
                                    <span><strong>{item.institution}</strong> {(item.institution.length !== 0 && item.credential.length !== 0) && <span> | </span>} {item.credential}</span>
                                    <span id="education-right-side">{moment(item.startDate).format('MMMM YYYY')}</span>
                                </div> 
                            )
                        } else {
                            return (
                                <div id="education-item">
                                    <span><strong>{item.institution}</strong> {(item.institution.length !== 0 && item.credential.length !== 0) && <span> | </span>} {item.credential}</span>
                                    <span id="education-right-side">{moment(item.startDate).format('MMMM YYYY')} - {moment(item.endDate).format('MMMM YYYY')}</span>
                                </div> 
                            )
                        }
                    })}
                </div>
                <div id="experience-section">
                    {props.experienceItems.length !== 0 &&
                        <span id="cv-section-title">EXPERIENCE<hr/></span>
                    }
                    {props.experienceItems.map((item) => {
                        if(item.startDate === "" && item.endDate === "") {
                            return (
                                <div id="experience-item">
                                    <span id="company"><strong>{item.companyName}</strong> {(item.companyName.length !== 0 && item.jobTitle.length !== 0) && <span> | </span>} {item.jobTitle}</span>
                                    <span id="job-description">{item.jobDescription}</span>
                                </div> 
                            )
                        } else if(item.startDate === "") {
                            return (
                                <div id="experience-item">
                                    <span id="company"><strong>{item.companyName}</strong> {(item.companyName.length !== 0 && item.jobTitle.length !== 0) && <span> | </span>} {item.jobTitle}</span>
                                    <span id="experience-dates">{moment(item.endDate).format('MMMM YYYY')}</span>
                                    <span id="job-description">{item.jobDescription}</span>
                                </div> 
                            )
                        } else if(item.endDate === "") {
                            return (
                                <div id="experience-item">
                                    <span id="company"><strong>{item.companyName}</strong> {(item.companyName.length !== 0 && item.jobTitle.length !== 0) && <span> | </span>} {item.jobTitle}</span>
                                    <span id="experience-dates">{moment(item.startDate).format('MMMM YYYY')}</span>
                                    <span id="job-description">{item.jobDescription}</span>
                                </div> 
                            )
                        } else {
                            return (
                                <div id="experience-item">
                                    <span id="company"><strong>{item.companyName}</strong> {(item.companyName.length !== 0 && item.jobTitle.length !== 0) && <span> | </span>} {item.jobTitle}</span>
                                    <span id="experience-dates">{moment(item.startDate).format('MMMM YYYY')} - {moment(item.endDate).format('MMMM YYYY')}</span>
                                    <span id="job-description">{item.jobDescription}</span>
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