import React from "react";
import "../css/Projects.css";

function Projects() {
    return (
        <div className="page">
           
            <h1 className="page-title">Projects</h1>

            
            <div className="topic">
                <h2 className="topic-title">Emails Cleaner</h2>
                <p className="topic-description">
                    Allows users to delete all the spams emails in the emails folder automatically. 
                    Implemented with python for the backend, this program helps users save time and effort.
                </p>
                <h4 className="topic-subtitle">Technologies used</h4>
                <ul className="topic-list">
                    <li>Python</li>
                    <li>IMAP</li>
                    <li>FastAPI</li>
                    <li>React JS</li>
                    <li>Render.com</li>
                </ul>
                <h4 className="topic-subtitle">Links</h4>
                <a href="https://lovely-wisp-df0231.netlify.app" target="_blank" rel="noreferrer" className="topic-link">Email-Cleaner</a>
                <a href="https://github.com/Bicheka/spam-emails-cleaner-api" target="_blank" rel="noreferrer" className="topic-link">Source Code &lt;/&gt;</a>
                
                   
            </div>

            <div className="topic">
                <h2 className="topic-title">Bicheka</h2>
                <p className="topic-description">
                    Bicheka is an E-commerce web app that allows users to buy and sell products in a virtual 
                    commercial center. Still under development, it is being refactored from monolithic to microservices architecture, 
                    but substantial progress has been made already, and it is planned to be finished 2024.

                </p>
            </div>
            
        
    
            
            

        </div>
    )
    
}

export default Projects;