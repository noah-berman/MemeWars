//All generated memes will render here

import uuid from 'uuid'
import React, { Component } from 'react'
import IndividualMeme from './IndividualMeme'


class MemePool extends Component {

  renderMemeJSX = () => {
    return this.sortByVotes().map(meme => {
      return <IndividualMeme
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
      <div>
        <h1 className="memepool-header">All Memes</h1>
        {this.renderMemeJSX()}
      </div>
    )
  }
}

export default MemePool;
