//how does this link?  as its own Nav Link, or through Meme Search/Image Selection?

import React, { Component } from 'react'
import CaptionForm from './CaptionForm'
//import react route?

class MemeGenerator extends Component {

  writeCaption = (caption) => {
    console.log(this.props.meme)
    this.props.setCaption(caption, this.props.meme)
  }

  // get passed this.props.memeObjs from higher containers, depending on which one?
  // <img src={src from selected image}! />

  render() {
    return (
      <div className="meme-generator-wrapper">
        <img className="meme-generator-image" src={this.props.meme.src} height="200px" width="30%" />
        <CaptionForm writeCaption={this.writeCaption} memeObjs={this.props.memeObjs}/>
      </div>
    )
  }

}

export default MemeGenerator;
