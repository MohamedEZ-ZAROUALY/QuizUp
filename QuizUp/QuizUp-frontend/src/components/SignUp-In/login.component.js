import React, { Component } from "react";
import './Sign.css';
import logo from '../../assets/QUIZZUP_free-file.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login  (){

    const [emailValue, setemailValue] = React.useState("")
    const [passwordValue, setpasswordValue] = React.useState("");
   


    const handleChange1 = (event) => {
      setemailValue(
       event.target.value
      );
    }

    const handleChange2 = (event) => {
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
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"  
            onChange={handleChange1}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
            onChange={handleChange2} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" >Submit</button>
                <p className="forgot-password text-right">
                    <Link to='/signup'>
                        Don't have an account yet ?
                    </Link>
                 
                </p>
            </form>
            </div>
        );
}
