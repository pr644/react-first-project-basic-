import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Alert from "./components/Alert";
import Notes from "./components/Notes";


function App() {
const [mode, setMode] = useState('light');

const [alert, setAlert] = useState(null);

const showAlert = (message, type) => {
  setAlert({message , type}); 
  setTimeout(() => {
    setAlert(null);
    
  },1500);
};

const toggleMode = () =>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled", "success");
  }else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
  }
};

  return (
    <>



     <Navbar title="myApp" mode={mode} toggleMode={toggleMode} />

     {alert && <Alert alert={alert} />}
     <div className="container my-3">

      <h2 style={{color: mode === "dark" ? "white" : "black"}}>Welcome to Notes Keeper App</h2>
      <p style={{color: mode === "dark" ? "white" : "black"}}>Here you can add, edit, and delete notes. (Basic version with dark mode + alerts)</p>
     </div>


     {/* <Notes mode={mode} showAlert={showAlert} /> */}
      <Notes mode="light" showAlert={showAlert} />

    </>
  );
}

export default App;
