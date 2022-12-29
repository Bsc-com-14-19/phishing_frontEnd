import React from 'react'
import {useState} from 'react'
import "../App.css";
import "./SignupForm.css";
import axios from 'axios';
import {FaGoogle} from 'react-icons/fa'
import {BiLogIn} from 'react-icons/bi'

const SignupForm = () => {
  const [formData,setFormData] = useState({
    email:"",
    password:"",
  })


  const handleFormData = (e)=>{
    const updatedFormData = {...formData}

    updatedFormData[e.target.id]=e.target.value

    setFormData(updatedFormData)

  }

  const submitFormData = (e) =>{
    e.preventDefault()
    console.log("data",formData)
    

    axios.post("http://localhost:8080/owasp/register",{
      email:formData.email,
      password:formData.password
    })
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })

  }
  return (
    <div className='container'>
      <div className='app-wrapper'>
      <form>
          <h1>Login</h1>
          <div className="input-group">
            <input type="text" id="email" required onChange={(e)=>{handleFormData(e)}} />
            <label>Email *</label>
          </div>

          <div className="input-group">
            <input type="password" id="password" required onChange={(e)=>{handleFormData(e)}} />
            <label>Password *</label>
          </div>

<div className="fyp"> <h6 >Forget your Password?</h6></div>
         
          <div className="btn">
            <button onClick={(e)=>{submitFormData(e)}}>
            <BiLogIn id='loginIcon'/>
            Log in 
            </button>
          </div>

          <div className="rememberMe">
            <input type="checkbox"/>
            <h5>Remember me</h5>
          </div>
          <div className="or">
            <h6>___________________________or____________________________</h6>
          </div>
          <div className="btn-with-google" >
            <FaGoogle className="icon"/>
            Log in with Google
          </div>
          <div className="not-yet-customer">
            <h5>Not Yet a customer</h5>
          </div>
        </form>
      </div>
       
     </div>
  );
};

export default SignupForm