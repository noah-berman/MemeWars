import React,  { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import CaptionForm from './CaptionForm';

//Just created some CSS for background over-ride, enlargment, flexible boundaries, etc.

class IndividualMeme extends Component {

  state = {
    voted: false,
    votes: 0
  }

  voteForMeme = (event) => {
    event.preventDefault();
    if (this.state.voted === false) {
      const newVotes = this.state.votes + 1
      this.setState({
        voted: true,
        votes: newVotes
      })
    }
  }

  render() {
    return (
      <div className="memeTile">
        <figure className="image-container">
          <img className="scaled" src={this.props.src} alt={this.props.caption} />
          <figcaption className="caption">{this.props.caption}</figcaption>
          <button className="button" onClick={this.voteForMeme}>Vote</button>
        </figure>
      </div>
    );
  }
}

export default IndividualMeme;
