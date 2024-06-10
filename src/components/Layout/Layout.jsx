import React from "react";
import { NavLink, Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <div className="Layout">
      <header>
        <nav>
          <ul>
            <li><NavLink className="home-link" to="/">Pokemons</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "active-page" : ""} to="/pokemon">Pokemon</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "active-page" : ""} to="/add">Catch</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;