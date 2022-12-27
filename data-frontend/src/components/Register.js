// import './App.css';
import react from 'react';
import React  from 'react';
import  { useEffect, useState } from "react";
import api from './api'
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {

  const navigate = useNavigate();
  let [name, setName] = React.useState('')
  let [username, setUsername] = React.useState('')
  let [email, setEmail] = React.useState('')
  let [password, setPassword] = React.useState('')

  const registration = async (e) => {
    e.preventDefault()
    try {
      await api.post('/user/registration/', { name, username, email, password })
      // router.push('/account')
      navigate('/login');

    } catch (e) {
      setPassword('')
      console.log(e)
    }
  }

  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-9 mx-auto">
              <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                <div className="card-img-left d-none d-md-flex">
                </div>
                <div className="card-body p-4 p-sm-5">
                  <h5 className="card-title text-center mb-5 fw-light fs-5">Register</h5>
                  <form method='POST'>
                    <div className="form-floating mb-3">
                      <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" id="floatingInputUsername" placeholder="myusername" required autofocus />
                      <label htmlFor="floatingInputUsername">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="text" onChange={(e) => setUsername(e.target.value)} className="form-control" id="floatingInputUsername" placeholder="myusername" required autofocus />
                      <label htmlFor="floatingInputUsername">Username</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="floatingInputEmail" placeholder="name@example.com" />
                      <label htmlFor="floatingInputEmail">Email address</label>
                    </div>
                    <hr />
                    <div className="form-floating mb-3">
                      <input type="password"  className="form-control" id="floatingPassword" placeholder="Password" />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="password"  onChange={(e) => setPassword(e.target.value)} className="form-control" id="floatingPasswordConfirm" placeholder="Confirm Password" />
                      <label htmlFor="floatingPasswordConfirm">Confirm Password</label>
                    </div>
                    <div className="d-grid mb-2">
                      <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" onClick={(e) => registration(e)} type="submit">Register</button>
                    </div>
                    <a className="d-block text-center mt-2 small" href="/login">Have an account? Sign In</a>
                    <hr className="my-4" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Register;


