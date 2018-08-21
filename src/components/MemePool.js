//All generated memes will render here

import uuid from 'uuid'
import React, { Component } from 'react'
import IndividualMeme from './IndividualMeme'


class MemePool extends Component {  

  renderMemeJSX = () => {
    return this.props.memeObjs.map(meme => {
      return <IndividualMeme src={meme.src} caption={meme.caption} key={uuid()}/>
    })
  }


  render() {
    return (
      <div>
        Vote for your Favorite Memes!
        {this.renderMemeJSX()}
      </div>
    )
  }
}

export default MemePool;
