import React from "react";
import "../css/Page.css";
function ContactInfo() {
    return (
        <div className="page">

            <div className="topic">
                <h1 className="page-title">Contact Info</h1>
                <h2 className="topic-title">Email</h2>
                <p>You can always reach me at <a href="mailto:davidmartinezgilp@gmail.com">davidmartinezgilp@gmail.com</a></p>
            </div>

            <div className="topic">
                <h2 className="topic-title">Social Media</h2>
                <p>I choose not to use social media because it's a personal preference. I find that I'm more content and focused without it. 
                    I also prefer to spend my time on other activities and hobbies that I find more fulfilling, rather than being on social media.
                    However, I do have a <a href="https://linkedin.com/in/david-martinez-a51b78205/">LinkedIn</a> profile that I use to connect with people in a professional setting.
                </p>
            </div>
        </div>
    )
    
}

export default ContactInfo;