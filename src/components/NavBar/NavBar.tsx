import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = ({ clearCreated }: { clearCreated: () => void}) => {
  return (
    <div>
      <NavLink to='/'>
        <button onClick={() => clearCreated()}>Home</button>
      </NavLink>
      <NavLink to='saved-covers'>
        <button onClick={() => clearCreated()}>Saved Covers</button>
      </NavLink>
      <NavLink to='create'>
        <button onClick={() => clearCreated()}>Create Cover</button>
      </NavLink>
    </div>
  );
};
