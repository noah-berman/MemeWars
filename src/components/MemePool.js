//All generated memes will render here

import React, { Component } from 'react'
import IndividualMeme from './IndividualMeme'

class MemePool extends Component {

  memeMapper = () => {
    return this.props.allMemes.map(meme => <IndividualMeme id={meme.id} meme={meme}/>)
  }

  render() {
    //console.log(this.props.allMemes)
    return (
      <div>
        Vote for your Favorite Memes!
        {this.memeMapper()}
      </div>
    )
  }
}

export default MemePool;
