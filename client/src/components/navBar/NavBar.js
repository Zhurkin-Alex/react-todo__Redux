import React from 'react';
import './navbar.scss'
import { Link,  } from "react-router-dom";
function NavBar(props) {
  return (
    <div className="navbar ">
    <nav className="navbar  navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">            
        <div className="collapse navbar-collapse" id="navbarNav">
          
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page"  to="/">
                Registration
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page"  to="/todo">
                To-do
              </Link>
            </li>
            
           
           
          </ul>
        </div>
      </div>
    </nav>
  </div>
  );
}

export default NavBar;
