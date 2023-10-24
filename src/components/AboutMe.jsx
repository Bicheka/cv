import React from "react";
import "../css/Page.css";
import "../css/AboutMe.css";
function AboutMe() {
    return (
        <div className="page">
            
            <div className="about-me-header">
                <div className="image-container">
                    <img className="my-picture" alt="my pic" src={window.location.origin + '/images/me.png'}/>
                </div>
                <div className="image-text">
                    <h2 className="greeting">Hi there! I'm David</h2>
                    <p>Welcome to my corner of the internet! My name David Martinez Gil, and I'm thrilled to have you here. Let me share a bit about myself.</p>
                </div>
            </div>

           
            <h1 className="page-title">About Me</h1>
            
            <div className="topic">
                <h2 className="topic-title">Who Am I?</h2>
                <p>
                    I am just a guy that really really really likes science and technology. Since I was a little kid, I have been amazed by computers, for me that was magic. 
                    Since I discovered this wonderful world, I tried my hardest to acquire as much knowledge as I could from all kinds of resources.
                    I learned how to learn, and I taught myself how to code. Nowadays I know several different programming languages and know how to work with many different tech stacks.
                </p>
            </div>
        
            <div className="topic">
                <h2 className="topic-title">My Mission</h2>
                <p>
                    At the heart of my mission is an unwavering commitment to creativity and innovation. 
                    I believe in the power of human imagination and the limitless potential it holds. 
                    My goal is to push the boundaries of what is possible, to constantly challenge the status quo, and to bring fresh, innovative ideas to life. 
                    I am driven by a profound desire to make a meaningful impact on the world, whether through pioneering solutions to complex problems, inspiring others to think differently, or simply brightening someone's day with a new perspective. With every project, I aim to contribute to a future that is not just different but better, more inspiring, and full of potential. 
                </p>
            </div>
            
            

        </div>
    )
    
}

export default AboutMe;