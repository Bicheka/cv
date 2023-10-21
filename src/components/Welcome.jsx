import React, { useEffect, useState } from "react";
import "../css/Welcome.css";

function Welcome({ setIsOnAnimation}) {

    const [showAnimation, setShowAnimation] = useState(true);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if(!theme){
            if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
                setIsDark(true);
                localStorage.setItem('theme', 'dark');
            }
            else{
                setIsDark(false);
                localStorage.setItem('theme', 'light');
            }
        }
        if(theme === 'dark'){
            setIsDark(true);
        }
        else{
            setIsDark(false);
        }
    },[]);


    useEffect(() => {
      setIsOnAnimation(true);
      const timer = setTimeout(() => {
        setShowAnimation(false);
        setIsOnAnimation(false);
      }, 3000); // Hide the animation after 3 seconds
  
      return () => clearTimeout(timer);
    },[setIsOnAnimation]);

    return (
        <div className={`${isDark ? 'welcome-dark' : ''}`}>
          <h1 className={`welcome-animation ${showAnimation ? 'animate' : ''}`}>Welcome</h1>
        </div>
    );
    
}

export default Welcome;