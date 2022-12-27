// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import  { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);


  const logout = () => {
    localStorage.removeItem('token-info');
    console.log("IM LOGGED OUT ")
    navigate('/login');

    setIsLoggedin(false);
  };

  
  return (
        <div>
          <nav className="navbar">
            <a href="#" className="logo">Logo</a>
            <div className="nav-links">
              <ul className="nav-menu">
                <li className="active"><a href>Home</a></li>
                <li><a href="#">About Us</a></li>
                {/* <li><a href="#">Services</a></li> */}
                <li><a href="/upload">Upload</a></li>
                <li><a href="/datatable">Datatable</a></li>
                {/* if(!localStorage.getItem('token')) {
                <li><a href="/upload">LOGGED IN ALREADY</a></li>
                } */}
                <li><a href="/login">Login</a></li>
                <li><a href="#" onClickCapture={logout}>Logout</a></li>
              </ul>
            </div>
            <i className="bx bx-grid-alt menu-hamburger" />
          </nav>
          <header className="header" />

        </div>
      
  );
}

export default Home;


