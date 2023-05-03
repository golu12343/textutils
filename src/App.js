
import React, { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState("light");//wether dark mode is enabled or not
  const [alert, setalert] = useState(null);


  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setalert(null)
    }, 1500);

  }
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = 'grey';
      showalert('dark mode has been enabled', 'success')
      document.title = "Textutils-dark mode"

    }
    else {
      setmode("light");
      document.body.style = "backgroundColor:white; transition:300ms;"
      showalert('light mode has been enabled', 'success')
      document.title = "Textutils-light mode"

    }
  }


  return (
    <>
    <BrowserRouter>
      <Navbar mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-2">
        <Routes>
          <Route  path="/about" element={<About />}/>
          <Route  path="/" element={<Textform  showalert={showalert} heading="Enter the text to analyse" mode={mode}/>}/>
            
          
          
         
        
        {/* */}
        
</Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
