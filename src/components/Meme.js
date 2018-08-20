import React,  { Component } from 'react'
import CaptionForm from './CaptionField'

//Just created some CSS for background over-ride, enlargment, flexible boundaries, etc.

class Meme extends Component {
  render() {
    return (
      <div className="memeTile">
        <h1> FINAL MEME IMAGE </h1>
        <button className="button"> Vote </button>
      </div>
    );
  }
}

export default Meme;
