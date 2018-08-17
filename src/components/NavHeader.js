import React from 'react'
import logo from '../images/logo.png'

const NavHeader = () => {
	return (
		<div className="navBar">
			<span className="headerText">Meme Wars</span>
			<div className="logo">
					<img src={logo} className="fireLogo" alt="" />
			</div>
			<span className="tagline">One Meme to Rule Them All</span>
		</div>
	)
}

export default NavHeader;
