import React from "react";

function Footer() {
  return (
    <footer class="footer mt-2  fixed-bottom">
      <div class="container">
        <ul class="nav  justify-content-center">
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="/About">
              About us{" "}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Resources
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Careers
            </a>
          </li>
        </ul>
      </div>
      <span style={{color:'teal'}}>&copy; tch180</span>
    </footer>
  );
}

export default Footer;
