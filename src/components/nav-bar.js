import React from "react"
import { Link, graphql } from "gatsby"

const NavBar = () => (
  <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <img className="rounded-circle" style={{backgroundColor: 'white', height: '1.5em', width: '1.5em', padding: '3px'}} src="/images/favicon.png" />
      </Link>

      <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gallery">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default NavBar

