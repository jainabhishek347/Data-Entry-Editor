// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import React  from 'react';
import  { useEffect, useState } from "react";
import api from './api'
import {Link, Routes, Route, BrowserRouter , useNavigate} from 'react-router-dom';




// const Login = () => {  
//   const navigate = useNavigate();
//   useEffect(() => {
//       let isAuth = JSON.parse(localStorage.getItem('user'));
//       if(isAuth && isAuth !== null) {
//           navigate("/");
//       }
//   }, []);
// }



function Login() {
  const navigate = useNavigate();

  let [username, setUsername] = React.useState('')
  let [password, setPassword] = React.useState('')
  const [user, setUser] = useState()
  const [isLoggedin, setIsLoggedin] = useState(false);

  const loginstore = (e) => {
    e.preventDefault();
    console.log("Printing user details on cosole", username, password);
    const userData = {username,password};
    localStorage.setItem('token-info', JSON.stringify(userData));
    setIsLoggedin(true);
    setUsername('');
    setPassword('');
  };

  const login = async (e) => {
    e.preventDefault()
    try {
      await api.post('/user/login/', { username, password })
      // loginstore()
    navigate('/');
    } catch (e) {
      setPassword('')
      console.log(e)
    }
  }


  if (user) {
    return <div>{user.username} is loggged in</div>;
  }

  return (
    <div class="container">
    <div class="row">
      <div class="col-lg-5 col-xl-10 mx-auto">
        <div class="card card_register flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
          <div class="card-img-left d-none d-md-flex">
          </div>
          <div class="card-body p-4 p-sm-5">
            <h2 class="card-title text-center mb-2 fw-bold fs-7">Login</h2>
            <br/>
            <form method='POST'>
              <div class="form-floating mb-3">
                <input type="text"  onChange={(e) => setUsername(e.target.value)} class="form-control" id="floatingInputUsername" placeholder="myusername" required autofocus/>
                <label for="floatingInputUsername">Username</label>
              </div>

              <div class="form-floating mb-3">
                <input type="password" onChange={(e) => setPassword(e.target.value)} class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>

              <div class="d-grid mb-2">
                <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase" onClick={(e) => login(e)} type="submit">LOGIN</button>
              </div>

              <a class="d-block text-center mt-2 small" href="/register">Don't have an account?</a>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Login;


