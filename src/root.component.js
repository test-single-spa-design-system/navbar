import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

import "./styles.css";

export default function Root(props) {
  return (
    <BrowserRouter basename="/">
      <p>NavBar</p>
      <nav className="primaryNav">
        <ul>
          <li>
            <NavLink to="/" className="navLink" activeClassName="activeNavLink">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/button"
              className="navLink"
              activeClassName="activeNavLink"
            >
              Button
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/box"
              className="navLink"
              activeClassName="activeClassName"
            >
              Box
            </NavLink>
          </li>
        </ul>
      </nav>
    </BrowserRouter>
  );
}
