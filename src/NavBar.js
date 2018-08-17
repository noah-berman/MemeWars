import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import NavLink from './'


// NavLinks styling
const linkStyle = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Home = () => <h1>Create a Meme!</h1>;
const User = () => <h1>Welcome, Friend!</h1>;
const MemePool = () => <h1>Vote for your Favorites!</h1>;


// NavBar

class NavBar extends Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/user" component={User} />
            <Route exact path="/all_memes" component={MemePool} />
          </div>
      </Router>
  </div>
)
}
}


export default NavBar;


// <NavLink to="/" exact style={linkStyle} activeStyle={{ background: 'darkblue' }}> Home </NavLink>
// <NavLink to="/user" exact style={linkStyle} activeStyle={{ background: 'darkblue' }}> Profile </NavLink>
// <NavLink to="/all_memes" exact style={linkStyle} activeStyle={{ background: 'darkblue' }}> All Memes </NavLink>
