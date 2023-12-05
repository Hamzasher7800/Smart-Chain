import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Validation from './Loginvalidation'
import './Login.css'
import axios from 'axios'


const Login = () => {
  const [values, setvalues] = useState({
    email:"",
    password:""
  })
  const navigate =useNavigate();
  const [errors, setErrors] = useState({})
  const handleInput =(event) =>{
    setvalues(prev =>({...prev, [event.target.name]:[event.target.value]}))
  }
  const handlesubmit =(event) =>{
    event.preventDefault();
    const err = Validation(values);
    setErrors(err);
    if (err.email === "" && err.password === "") {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          if(res.data === "Success"){
            navigate("/Navbar");
          }else{
            alert("No result existed");
          }
          
        })

        .catch((err) => console.log(err));
    }
  }
  return (
    <div className='d-flex justify-content-center align-items-center   bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25 '>
      <form action="" onSubmit={handlesubmit}>  
      <h2>Login</h2>
      <div className="mb-3">
        <label htmlFor="email"><strong>Email</strong></label>
        <input type="email" placeholder='Enter Email' name='email'
        onChange={handleInput} className='form-control rounded-0'/>
        {errors.email && <span className='text-danger'>{errors.email}</span>}
      </div>
      <div className="mb-3">
        <label htmlFor="password"><strong>Password</strong></label>
        <input type="pasword" placeholder='Enter Password' name='password'
        onChange={handleInput} className='form-control rounded-0'/>
        {errors.password && <span className='text-danger'>{errors.password}</span>}
      </div>
      <button type='submit' className='btn btn-success w-100 rounded-0'> <strong>Log in </strong></button>
      <p>you are agree to our terms and conditions </p>
      <Link to="/Home" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
      </form>
      </div>
    </div>
  )
}

export default Login
