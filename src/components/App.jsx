// App.js
import React, { useState } from 'react';
import NavBar from './NavBar';
import Welcome from './Welcome';

function App() {
  
  const [isOnAnimation, setIsOnAnimation] = useState(true);

  return (

    <div className="App">
      {isOnAnimation
        ? <Welcome setIsOnAnimation={setIsOnAnimation} /> 
        : <NavBar/>
      }
    </div>
    
  );
}

export default App;
