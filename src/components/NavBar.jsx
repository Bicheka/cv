import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link , Routes, Route, Navigate} from "react-router-dom";

//css
import '../css/NavBar.css'

//components
import AboutMe from './AboutMe';
import ContactInfo from './ContactInfo';
import Projects from './Projects';
import ToggleTheme from './ToggleTheme';

//icons
import Hamburger from 'hamburger-react'
import ScrollToTop from './ScrollToTop';


//hook


function NavBar(){

    //active button
    const [activeButton, setActiveButton] = useState('aboutme');

    const [isOpen, setIsOpen] = useState(false);
    const [clicked, setClicked] = useState("");

    const location = window.location.pathname;

    const handleActiveButton = (button) => {
        setActiveButton(button);
    }

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
        if(clicked === "clicked"){
            setClicked("");
        }
        else{
            setClicked("clicked");
        }
    };

    const closeNavBar = () => {
        setIsOpen(false);
    }

    const handleNavBarButtonClick = (button) => {
        if(isOpen){
            closeNavBar();
        }
        handleActiveButton(button)
    }

    

    useEffect(() => {


        handleActiveButton(location.split('/')[1]);//get the first part of the path
        console.log("location: ", location.split('/')[1]);
    
        
    }, [location]);

    return (
        <BrowserRouter forceRefresh = {true}>
            <ScrollToTop/>
            <div className="navBar">

                <ToggleTheme/>

                <div  className={`navBarButtons ${isOpen ? 'active' : ''}`}>
                        
                    <Link 
                        to = "/aboutme"
                        className={`navBarButton ${activeButton === 'aboutme' ? 'active' : ''}`}
                        onClick={() => handleNavBarButtonClick('aboutme')}
                    >
                        <p className='navBarButtonText'>About Me</p>
                    </Link>
                    <Link 
                        to = "/contact" 
                        className={`navBarButton ${activeButton === 'contact' ? 'active' : ''}`}
                        onClick={() => handleNavBarButtonClick('contact')}
                    >
                        <p className='navBarButtonText'>Contact</p>
                    </Link>
                    <Link 
                        to = "/projects" 
                        className={`navBarButton ${activeButton === 'projects' ? 'active' : ''}`}
                        onClick={() => handleNavBarButtonClick('projects')}
                    >
                        <p className='navBarButtonText'>Projects</p>
                    </Link>

                </div>

                <div className = "hamburger">
                    <Hamburger direction="" size={20} toggled={isOpen} toggle={setIsOpen} onClick = {toggleNavbar}/>
                </div>


            </div>
            
            <Routes>
                <Route path="/" element={<Navigate to="/aboutme" />} />
                <Route exact path='/aboutme' element = {<AboutMe/>}/>
                <Route exact path='/contact' element = {<ContactInfo/>}/>
                <Route exact path='/projects' element = {<Projects/>}/>
            </Routes>
        </BrowserRouter>
        
    );
}

export default NavBar;