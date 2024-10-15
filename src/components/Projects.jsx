import React from "react";

function Projects() {
    return (
      <div className="page">
        <h1 className="page-title">Projects</h1>
        <div className="topic">
          <h2 className="topic-title">File Transfer System (WIP)</h2>
          <p className="topic-description">
            FTS provides low-level functionality for trans large files from one device to another.
          </p>
          <h4 className="topic-subtitle">Provides functionality for:</h4>
          <ul>
            <li>File transfering and folder recursive transfering</li>
            <li>NAT traversal for p2p connection and IPV6</li>
            <li>
              Functionality to get current device private and public IP address
            </li>
            <li>
              Uses multithreaded tokio runtime to asynchronously send files and
              process file requests
            </li>
          </ul>
          <p className="rust-disclaimer">
            This project is fully implemented using the Rust programming
            language. Visit
            <a
              href="https://www.rust-lang.org/"
              target="_blank"
              rel="noreferrer"
              className="topic-link in-text-link"
            >
              rust-lang.org
            </a>
            to learn more about why Rust.
          </p>
          <h4 className="topic-subtitle">Links</h4>
          <a
            href="https://github.com/Bicheka/file-transfer-system"
            target="_blank"
            rel="noreferrer"
            className="topic-link"
          >
            Source Code &lt;/&gt;
          </a>

          <a
            href="https://crates.io/crates/file-transfer-system"
            target="_blank"
            rel="noreferrer"
            className="topic-link"
          >
            crates.io
          </a>
        </div>
        <div className="topic">
          <h2 className="topic-title">Fileflow (WIP)</h2>
          <p className="topic-description">
            "Fileflow" uses Tauri to create a cross-platform app that serves to
            transfer files from peer to peer directly including IOS and Android.
          </p>
          <h4 className="topic-subtitle">Technologies used</h4>
          <ul className="topic-list">
            <li>Rust</li>
            <li>Tauri</li>
            <li>ReactJS</li>
            <li>Tailwind Css</li>
          </ul>
          <a
            href="https://github.com/Bicheka/fileflow"
            target="_blank"
            rel="noreferrer"
            className="topic-link"
          >
            Source Code &lt;/&gt;
          </a>
        </div>

        <div className="topic">
          <h2 className="topic-title">Emails Cleaner</h2>
          <p className="topic-description">
            "Emails Cleaner" allows users to delete all the spam emails in the
            emails folder automatically. Users have the option to register so
            their spam emails get deleted automatically every a certain amount
            of time without their intervention, so they do not worry about their
            spam anymore, saving time and effort.
          </p>
          <h4 className="topic-subtitle">Technologies used</h4>
          <ul className="topic-list">
            <li>Python</li>
            <li>FastAPI</li>
            <li>IMAP</li>
            <li>MongoDB Atlas</li>
            <li>ReactJS</li>
            <li>Render.com</li>
          </ul>
          <h4 className="topic-subtitle">Links</h4>
          <a
            href="https://lovely-wisp-df0231.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="topic-link"
          >
            Email-Cleaner
          </a>
          <a
            href="https://github.com/Bicheka/spam-emails-cleaner-api"
            target="_blank"
            rel="noreferrer"
            className="topic-link"
          >
            Source Code &lt;/&gt;
          </a>
        </div>

        <div className="topic">
          <h2 className="topic-title">Webmall</h2>
          <p className="topic-description">
            "Webmall" is an E-commerce web app that allows users to buy and sell
            products in a virtual commercial center. Although it is still under
            development a lot of work has been done and it is being an amazing
            learing experience. I was able to test it on the cloud in GCP for
            container deployment with CI/DC using github actions and AWS for
            storing images for a while but it became a little expensive and as a
            learning project I decided to keep it without deploying it for now.
          </p>
          <h4 className="topic-subtitle">Technologies used</h4>
          <ul className="topic-list">
            <li>Java</li>
            <li>Spring Boot</li>
            <li>MongoDB Atlas</li>
            <li>Docker</li>
            <li>ReactJS for the frontend</li>
          </ul>
          <h4 className="topic-subtitle">Key takeaways</h4>
          <ul>
            <li>Experience CORS error handling and its functionality</li>
            <li>Implement API using MVC (model view controll)</li>
            <li>
              Connect API to local and hosted MongoDB databse using advance
              features like mongo template and advance parenting relationships
              between documents
            </li>
            <li>Dockerize App to make it portable</li>
            <li>
              Dependency injection to decouple the code to make it more robust
            </li>
            <li>
              Using advance security like Jason Web Token JWT for authentication
            </li>
            <li>
              Build a frontend that is able to connect to backend api and works
              dynamically with the data
            </li>
          </ul>
          <h4 className="topic-subtitle">Links</h4>
          <a
            href="https://github.com/Bicheka/webmall-frontend"
            target="_blank"
            rel="noreferrer"
            className="topic-link"
          >
            Frontend's Source Code &lt;/&gt;
          </a>
          <a
            href="https://github.com/Bicheka/webmall"
            target="_blank"
            rel="noreferrer"
            className="topic-link"
          >
            Backend's Source Code &lt;/&gt;
          </a>
        </div>
      </div>
    );
    
}

export default Projects;