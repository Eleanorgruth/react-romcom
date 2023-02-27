import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'

export const NavBar = ({ clearCreated }: { clearCreated: () => void}) => {
  return (
    <div className='controls'>
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
