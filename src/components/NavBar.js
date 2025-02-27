import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {


  return (
  <div>
    <NavLink to="/home"  activeStyle={{ background: 'darkblue'}}>Home</NavLink>
    <NavLink to="/actors"  activeStyle={{ background: 'darkblue' }}>Actors</NavLink>
    <NavLink to="/directors"  activeStyle={{  background: 'darkblue' }}>Directors</NavLink>
    <NavLink to="/movies"  activeStyle={{  background: 'darkblue' }}>Movies</NavLink>
  </div>

  );
};

export default NavBar;
