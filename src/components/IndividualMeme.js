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

    fetch(`http://localhost:3001/api/v1/meme/${this.props.meme.id}/vote`, {method:"PATCH"})
    .then(res=>res.json())
    .then(res=>this.props.updateMemeVote(res))

    // if (this.state.voted === false) {
    //   const newVotes = this.state.votes + 1
    //   this.setState({
    //     voted: true,
    //     votes: newVotes
    //   })
    // }
  }

  render() {
    return (
      <div className="memeTile">
        <figure className="image-container">
          <img className="scaled" src={this.props.meme.image} alt={this.props.caption} />
          <figcaption className="caption">{this.props.meme.caption}</figcaption>
          <button className="button" onClick={this.voteForMeme}>Vote</button>
        </figure>
      </div>
    );
  }
}

export default IndividualMeme;
