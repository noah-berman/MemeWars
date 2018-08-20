import React,  { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import CaptionForm from './CaptionForm';
import MemePool from './MemePool';
import logo from '../images/logo.png'    //NEED TO REPLACE {logo} on lines 18 & 34 with this.props.url


class MemeCreater extends Component {

  state = {
    allMemes: []    //does it make more sense to set the state of all memes here, compared to App?
  }

// const home = () => <MemePool />;
// return <Route path="/home" component={ MemePool } caption={caption}/>

setCaption = (memeCaption) => {
  let meme = {"caption": memeCaption, "url": logo}
  console.log(meme)
  const allMemes = [...this.state.allMemes]
  allMemes.push(meme)
  this.setState({
    allMemes: allMemes
  })
  return <MemePool allMemes={this.state.allMemes}/>
}


  render() {
    return (
      <div className="memeTile">
        <img src={logo} alt="" />
        <CaptionForm setCaption={this.setCaption}/>
      </div>
    );
  }
}

export default MemeCreater;
