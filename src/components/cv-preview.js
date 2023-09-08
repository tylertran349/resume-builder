import React from "react";
import moment from "moment";

function CVPreview(props) {
    return (
        <div id="cv-preview" class="print">
            <div id="cv-preview-contents">
                <div id="personal-info-section">
                    <span id="full-name">{props.firstName} {props.lastName}</span>
                    <div id="contact-info">
                        <span>{props.email}</span>
                        {(props.email !== "" && props.phoneNumber !== "") && 
                            <span id="bullet-point">&nbsp;&nbsp;●&nbsp;&nbsp;</span>
                        }
                        <span>{formatPhoneNumber(props.phoneNumber)}</span>
                        {((props.email !== "" || props.phoneNumber !== "") && props.website !== "") && 
                            <span id="bullet-point">&nbsp;&nbsp;●&nbsp;&nbsp;</span>
                        }
                        <span>{props.website}</span>
                        {((props.email !== "" || props.phoneNumber !== "" || props.website !== "") && props.location !== "") && 
                            <span id="bullet-point">&nbsp;&nbsp;●&nbsp;&nbsp;</span>
                        }
                        <span>{props.location}</span>
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
                                    <span id="educational-institution">{item.institution}</span>
                                    <span id="credential">{item.credential}</span>
                                    <span id="location">{item.location}</span>
                                    <span id="education-description">{item.educationDescription}</span>
                                </div> 
                            )
                        } else if(item.startDate === "") {
                            return (
                                <div id="education-item">
                                    <span id="educational-institution">{item.institution}</span>
                                    <span id="education-dates">{moment(item.endDate).format('MMMM YYYY')}</span>
                                    <span id="credential">{item.credential}</span>
                                    <span id="location">{item.location}</span>
                                    <span id="education-description">{item.educationDescription}</span>
                                </div> 
                            )
                        } else if(item.endDate === "") {
                            return (
                                <div id="education-item">
                                    <span id="educational-institution">{item.institution}</span>
                                    <span id="education-dates">{moment(item.startDate).format('MMMM YYYY')}</span>
                                    <span id="credential">{item.credential}</span>
                                    <span id="location">{item.location}</span>
                                    <span id="education-description">{item.educationDescription}</span>
                                </div> 
                            )
                        } else {
                            return (
                                <div id="education-item">
                                    <span id="educational-institution">{item.institution}</span>
                                    <span id="education-dates">{moment(item.startDate).format('MMMM YYYY')} – {moment(item.endDate).format('MMMM YYYY')}</span>
                                    <span id="credential">{item.credential}</span>
                                    <span id="location">{item.location}</span>
                                    <span id="education-description">{item.educationDescription}</span>
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
                                    <span id="company">{item.companyName}</span>
                                    <span id="job-title">{item.jobTitle}</span>
                                    <span id="location">{item.location}</span>
                                    <span id="job-description">{item.jobDescription}</span>
                                </div> 
                            )
                        } else if(item.startDate === "") {
                            return (
                                <div id="experience-item">
                                    <span id="company">{item.companyName}</span>
                                    <span id="experience-dates">{moment(item.endDate).format('MMMM YYYY')}</span>
                                    <span id="job-title">{item.jobTitle}</span>
                                    <span id="location">{item.location}</span>
                                    <span id="job-description">{item.jobDescription}</span>
                                </div> 
                            )
                        } else if(item.endDate === "") {
                            return (
                                <div id="experience-item">
                                    <span id="company">{item.companyName}</span>
                                    <span id="experience-dates">{moment(item.startDate).format('MMMM YYYY')}</span>
                                    <span id="job-title">{item.jobTitle}</span>
                                    <span id="location">{item.location}</span>
                                    <span id="job-description">{item.jobDescription}</span>
                                </div> 
                            )
                        } else {
                            return (
                                <div id="experience-item">
                                    <span id="company">{item.companyName}</span>
                                    <span id="experience-dates">{moment(item.startDate).format('MMMM YYYY')} – {moment(item.endDate).format('MMMM YYYY')}</span>
                                    <span id="job-title">{item.jobTitle}</span>
                                    <span id="location">{item.location}</span>
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

function formatPhoneNumber(phoneNumber) {
    let cleanedNumber = ('' + phoneNumber).replace(/\D/g, ''); // Remove any non-digit characters
    let groupedNumber = cleanedNumber.match(/^(\d{3})(\d{3})(\d{4})$/); // Group the first 3 digits (area code), next 3 digits, and last 4 digits
    if(groupedNumber) {
        return '(' + groupedNumber[1] + ') ' + groupedNumber[2] + '-' + groupedNumber[3]; // If the input phone number has exactly 10 digits and no non-digit characters, return the phone number in the following format: (123) 456-7890
    }
    return phoneNumber; // Return the phone number as-is (unformatted) if it has at least 1 non-digit character and/or does not contain exactly 10 digits
}

export { CVPreview };