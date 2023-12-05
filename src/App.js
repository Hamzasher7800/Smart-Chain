import React, {useState} from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Navbar from "./Component/Assests/Navbar/Navbar";
import Login2 from "./Component/Assests/Navbar/Login2";
import Signup from "./Component/Assests/Navbar/Signup";
import './Component/Assests/Admindashboard/Admin.css'
import Homecontainer from "./Component/Assests/Homecontainer";
function App() {
  
  return (
    <div>
         
    


      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="Login" element={<Login2 />} />
        <Route   path="Signup" element={<Signup />}> </Route>
        <Route path="Home" element ={<Homecontainer/>}></Route>
      </Routes>
      
    
    </div>
  );
}

export default App;
