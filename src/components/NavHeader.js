import React from 'react'
import { Route, NavLink } from 'react-router-dom';
import '../App.css';
import '../index.css';
import logo from '../images/logo.png'
import UserProfilePage from './UserProfilePage'
import MemePool from './MemePool'
import SearchCreateContainer from './SearchCreateContainer'


// NavLinks styling
const linkStyle = {
  width: '200px',
  padding: '12px',
  margin: '0 6px 6px',
  background: '#800000',
  textDecoration: 'none',
  color: 'white'
}



const NavHeader = (props) => {
	return (
		<div className="Header-Container">
			<header className="App-header">
				<img src={logo} className="fireLogo" alt="" />
				<h1 className="App-title">Meme Wars</h1>
				<span className="tagline">One Meme to Rule Them All</span>
				<span>
							<NavLink onClick={props.handleClick} activeClassName="active" to="/" style={linkStyle}> Home </NavLink>
							<NavLink onClick={props.handleClick} activeClassName="active" to="/profile" style={linkStyle} > Profile </NavLink>
							<NavLink onClick={props.handleClick} activeClassName="active" to="/create" style={linkStyle}> Create A Meme </NavLink>
				</span>
			</header>
		</div>
	)
}

export default NavHeader;
