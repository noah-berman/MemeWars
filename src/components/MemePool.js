//All generated memes will render here

import uuid from 'uuid'
import React, { Component } from 'react'
import IndividualMeme from './IndividualMeme'


class MemePool extends Component {

  renderMemeJSX = () => {
    return this.sortByVotes().map((meme, index) => {
      return <IndividualMeme
        className={index === 0 ? "image-container top-meme" : "image-container"}
        meme={meme}
        key={uuid()}
        updateMemeVote={this.props.updateMemeVote}
      />
    })
  }

  sortByVotes = () => {
    return this.props.memeObjs.sort((a, b) => {
      if (a.score < b.score){
        return 1
      } else if (a.score > b.score){
        return -1
      } else {
        return 0
      }
    })
  }


  render() {
    return (
      <div id="meme-pool-wrapper">
        <h1 className="memepool-header">The Dank Stash</h1>
        {this.renderMemeJSX()}
      </div>
    )
  }
}

export default MemePool;
