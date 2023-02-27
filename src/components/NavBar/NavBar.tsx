import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <NavLink to='/'>
        <button>Home</button>
      </NavLink>
      <NavLink to='saved-covers'>
        <button>Saved Covers</button>
      </NavLink>
      <NavLink to='create'>
        <button>Create Cover</button>
      </NavLink>
    </div>
  );
};
