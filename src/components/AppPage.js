import React, { Component } from 'react';

import CaptionForm from './CaptionForm'

class AppPage extends Component {

  renderImgJSX = () => {
    return this.props.images.map( img => {
      return ( <div key={img.id}>
        <img src={img.avatar_url} alt={img.name} id={img.id} onClick={this.handleClick}>
        </img>
        {this.captionFieldLogic(img.id)}


      </div>
    )
  })
}


  captionFieldLogic = id => {
    return (id === Number(this.props.captionFieldId)) ? <CaptionForm parentImageId={id} /> : null
  }

  handleClick = event => {
    this.props.renderCaptionField(event.target.id)
   }

  render() {
    console.log('state was set')
    console.log(this.props.captionFieldId)
    return (
      <div>
        {this.renderImgJSX()}
      </div>
    )
  }

}

export default AppPage;
