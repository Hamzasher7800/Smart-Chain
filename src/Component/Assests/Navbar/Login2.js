import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./Loginvalidation";
import "./Login.css";
import axios from "axios";
import { BsEnvelopeFill,BsKeyboard } from "react-icons/bs";

const Login2 = () => {
  const [values, setvalues] = useState({
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
    if (err.email === "" && err.password === "") {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          if (res.data === "Success") {
            navigate("/Navbar");
          } else {
            alert("No result existed");
          }
        })

        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="form">
      <form action="/Navbar" onSubmit={handlesubmit}>
        <div className="container">
          <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
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
          </div>
          <div className="forgot-pass">
            Forgot Password <span>Click Here</span>
          </div>
          <div className="submit-container">
            <div className="submit">
              {" "}
              <button type="submit">Log In</button>
            </div>
            <div className="submit">
              <Link to="/Home">SignUp</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login2;
