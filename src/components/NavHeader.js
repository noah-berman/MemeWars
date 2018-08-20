import React from 'react'
import { Route, NavLink } from 'react-router-dom';
import '../App.css';
import '../index.css';
import logo from '../images/logo.png'
import UserProfilePage from './UserProfilePage'
import MemePool from './MemePool'
import SearchImagesContainer from './SearchImagesContainer'
       //double check this is the correct component?


// NavLinks styling
const linkStyle = {
  width: '200px',
  padding: '12px',
  margin: '0 6px 6px',
  background: '#800000',
  textDecoration: 'none',
  color: 'white'
}


const home = () => <SearchImagesContainer />;
const profile = () => <UserProfilePage />;;
const memePool = () => <MemePool />;


const NavHeader = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="fireLogo" alt="" />
				<h1 className="App-title">Meme Wars</h1>
				<span className="tagline">One Meme to Rule Them All</span>
				<span>
							<NavLink activeClassName="active" to="/home" style={linkStyle}> Create </NavLink>
							<NavLink activeClassName="active" to="/profile" style={linkStyle} > Profile </NavLink>
							<NavLink activeClassName="active" to="/all_memes" style={linkStyle}> All Memes </NavLink>
				</span>
			</header>
			<div>
				<span className="App-intro">
								<Route path="/home" component={ home } />
								<Route path="/profile" component={ profile } />
								<Route path="/all_memes" component={ memePool } />
				</span>
			</div>
		</div>
	)
}

export default NavHeader;

// const Home = () => <h1>Create a Meme!</h1>;
// const Profile = () => <h1> Welcome, Friend!</h1>;
// const MemePool = () => <h1>Vote for your Favorites!</h1>;
