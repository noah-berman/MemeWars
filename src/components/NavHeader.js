import React from 'react'
import { Route, NavLink } from 'react-router-dom';
import '../App.css';
import '../index.css';
import logo from '../images/logo.png'
import UserProfilePage from './UserProfilePage'
import MemePool from './MemePool'
import ImgurImagesContainer from './ImgurImagesContainer'          //double check this is the correct component?
import MemeBracket from './MemeBracket'
import Meme from './Meme'

// NavLinks styling
const linkStyle = {
  width: '200px',
  padding: '12px',
  margin: '0 6px 6px',
  background: '#800000',
  textDecoration: 'none',
  color: 'white'
}


const home = () => <ImgurImagesContainer />;
const profile = () => <Meme />;;
const memePool = () => <MemeBracket />;
//add more routes


const NavHeader = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="fireLogo" alt="" />
				<h1 className="App-title">Meme Wars</h1>
				<span className="tagline">One Meme to Rule Them All</span>
				<p>
							<NavLink activeClassName="active" to="/home" style={linkStyle}> Create </NavLink>
							<NavLink activeClassName="active" to="/profile" style={linkStyle} > Profile </NavLink>
							<NavLink activeClassName="active" to="/all_memes" style={linkStyle}> All Memes </NavLink>
				</p>
			</header>
			<body>
				<p className="App-intro">
								<Route path="/home" component={ home } />
								<Route path="/profile" component={ profile } />
								<Route path="/all_memes" component={ memePool } />
				</p>
			</body>
		</div>
	)
}

export default NavHeader;
