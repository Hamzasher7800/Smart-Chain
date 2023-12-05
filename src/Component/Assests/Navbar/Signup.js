import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./Signupvalidatio";
import { useState } from "react";
import "./Login.css";
import { BsEnvelopeFill, BsPersonFill, BsKeyboard } from "react-icons/bs";
import axios from "axios";
const Signup = () => {
  const [values, setvalues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setvalues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  
  const handlesubmit = (event) => {
    event.preventDefault();
    const err = Validation(values);
    setErrors(err);
    if (err.name === "" && err.email === "" && err.password === "") {
      axios
        .post("http://localhost:8081/signup", values)
        .then((res) => {
          navigate("Login");
          
        })

        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <form action="/Login2" onSubmit={handlesubmit}>
        <div className="container">
          <div className="header">
            <div className="text">SignUp</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
            <BsPersonFill style={{fontSize: '20px', marginLeft:"4px"}}/>
              <label htmlFor="name"></label>
              <input style={{marginLeft:'5px'}}
                type="text"
                placeholder="Enter Your Name"
                name="name"
                onChange={handleInput}
              />
              {errors.name && (
                <span className="text-danger">{errors.name}</span>
              )}
            </div>
            <div className="input">
            <BsEnvelopeFill style={{fontSize: '20px', marginLeft:"4px"}}/>
              <label htmlFor="email"></label>
              <input style={{marginLeft:'5px'}}
                type="email"
                placeholder="Enter Email"
                name="email"
                onChange={handleInput}
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>
            <div className="input">
            <BsKeyboard style={{fontSize: '20px', marginLeft:"4px"}}/>

              <input style={{marginLeft:'5px'}}
                type="pasword" 
                placeholder="Enter Password"
                name="password" 
                onChange={handleInput}
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}

              
            </div>
            <div className="input">
            <BsKeyboard style={{fontSize: '20px', marginLeft:"4px"}}/>

              <input style={{marginLeft:'5px'}}
                type="pasword"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={handleInput}
              />
              {errors.confirmPassword && (
                <span className="text-danger">{errors.confirmPassword}</span>
                
              )}

            
            </div>
          </div>
          <div className="forgot-pass">
            You are Agree to our <span>Terms&Conditions</span>
          </div>
          <div className="submit-container">
            <div className="submit submit-btn">
              {" "}
              <button type="submit ">Sign Up</button>
            </div>
            <div className="submit submit-btn">
              <Link to="/Login">Log In</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
