import React, { Component } from "react";
import logo from '../../assets/QUIZZUP_free-file.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignUp ( ) {
      const [emailValue, setemailValue] = React.useState("")
      const [passwordValue, setpasswordValue] = React.useState("");
      const [prenomValue, setprenomValue] = React.useState("");
      const [nomValue, setnomValue] = React.useState("");

    const handleChange1 = (event) => {
        setnomValue(
         event.target.value
        );
      }
    
      const handleChange2 = (event) => {
        setprenomValue(
         event.target.value
        );
      }

      const handleChange3 = (event) => {
        setemailValue(
         event.target.value
        );
      }

      const handleChange4 = (event) => {
        setpasswordValue(
         event.target.value
        );
      }

    
    

        return (
          <div className="container">
            <div className="banner">
               <p>WELCOME TO QUIZZ UP</p>
            <div className="logo-container">
            <img src={logo} alt="logo"/>
            </div>
        
            </div>
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" onChange={handleChange2} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" onChange={handleChange1}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={handleChange3} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={handleChange4}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block" >Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered   
                    <Link to='/login'>
                       Sign in ?
                    </Link>
                </p>
            </form>
            </div>
        );
    
}