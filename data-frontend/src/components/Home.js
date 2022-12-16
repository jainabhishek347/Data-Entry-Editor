// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'

function Home() {
  return (
        <div>
          <nav className="navbar">
            <a href="#" className="logo">Logo</a>
            <div className="nav-links">
              <ul className="nav-menu">
                <li className="active"><a href>Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="/upload">Upload</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="#">Logout</a></li>
              </ul>
            </div>
            <i className="bx bx-grid-alt menu-hamburger" />
          </nav>
          <header className="header" />

        </div>
      
  );
}

export default Home;


