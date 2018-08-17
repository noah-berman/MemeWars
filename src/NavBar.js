import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavHeader from './components/NavHeader'
/* Add NavLink to importer */


// NavLinks styling
const linkStyle = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

// NavBar
const Home = () => <h1>Create a Meme!</h1>;
const User = () => <h1>Welcome, Friend!</h1>;
const MemePool = () => <h1>Vote for your Favorites!</h1>;

const NavBar = () =>
  <div>
    <NavLink to="/" exact style={linkStyle} activeStyle={{ background: 'darkblue' }}> Home </NavLink>
    <NavLink to="/user" exact style={linkStyle} activeStyle={{ background: 'darkblue' }}> User </NavLink>
    <NavLink to="/all_memes" exact style={linkStyle} activeStyle={{ background: 'darkblue' }}> MemePool </NavLink>
  </div>;


export default NavBar;
