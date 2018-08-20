import React, { Component } from 'react'

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

///Add image size constraints!

  render() {
    return (
      <div className="memeTile">
        <img src={this.props.meme.url} alt="" />
        <h3>{this.props.meme.caption}</h3>
        <button className="button" onClick={this.voteForMeme}>Vote</button>
      </div>
    )
  }

}

export default IndividualMeme;
