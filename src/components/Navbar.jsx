import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* <a class="navbar-brand" href="#">
          Navbar
        </a> */}
        <Link class="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/movies">
                movies
              </Link>
            </li>
            <li><Link class="nav-link" to="/formdemo1">
              Form
            </Link></li>

            <li><Link class="nav-link" to="/formdemo2">
              Form2
            </Link></li>

            <li><Link class="nav-link" to="/formdemo3">
              Form3
            </Link></li>

            <li><Link class="nav-link" to="/formdemo4">
              Form4
            </Link></li>

            <li>
              <Link class="nav-link" to="/formdemo5">
                Form5
              </Link>
            </li>
            <li>
              <Link class="nav-link" to="/formdemo6">
                Form Demo 6
              </Link>
              </li>

            <li>
              <Link class="nav-link" to="/loginform">
                Login Form
              </Link>
            </li>

            
            <li>
              <Link class="nav-link" to="/signup">
              signup
              </Link>
            </li>
            <li>
              <Link class="nav-link" to="/loginform1">
                Login Form1
              </Link>
            </li>
            <li>
              <Link class="nav-link" to="/formdemo7">
                Form Demo 7
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};