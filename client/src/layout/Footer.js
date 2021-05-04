/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <footer className="footer mt-5  fixed-bottom">
      <div className="container">
        <ul className="nav  justify-content-center">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="/About">
              About us{" "}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Resources
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Careers
            </a>
          </li>
          <li className="nav-item" style={{color:'teal',fontSize:'12px'}}><span>&copy; tch180</span></li>
        </ul>
        
      </div>
      
    </footer>
  );
}

export default Footer;
