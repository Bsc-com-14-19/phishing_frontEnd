import React from 'react'
import "../App.css";
import "./SignupForm.css";
import {FaGoogle} from 'react-icons/fa'
import {BiLogIn} from 'react-icons/bi'

const SignupForm = () => {
  return (
    <div className='container'>
      <div className='app-wrapper'>
      <form>
          <h1>Login</h1>
          <div className="input-group">
            <input type="text" required />
            <label>Email *</label>
          </div>

          <div className="input-group">
            <input type="password" required />
            <label>Password *</label>
          </div>

          <h6>Forget your Password?</h6>
          <div className="btn">
            <button>
            <BiLogIn/>
            Log in 
            </button>
          </div>

          <div className="rememberMe">
            <h5>Remember me</h5>
          </div>
          <div className="or">
            <h6>___________________________or____________________________</h6>
          </div>
          <div className="btn-with-google" >
            <FaGoogle/>
            Log in with Google
          </div>
          <div className="not-yet-customer">
            <h>Not Yet a customer</h>
          </div>
        </form>
      </div>
       
     </div>
  );
};

export default SignupForm