import { NavLink, useNavigate } from "react-router-dom";
import React from "react";

const NavBar = ({}) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/"> Home</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/shopping-List">Wish Card</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
