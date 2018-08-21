//All generated memes will render here

import uuid from 'uuid'
import React, { Component } from 'react'
import Meme from './Meme'


class MemePool extends Component {

  renderMemeJSX = () => {
    return this.props.memeObjs.map(meme => {
      return <Meme src={meme.src} caption={meme.caption} key={uuid()}/>
    })
  }


  render() {
    return (
      <div>
        {this.renderMemeJSX()}
      </div>
    )
  }
}

export default MemePool;
