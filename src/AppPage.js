import React, { Component, Fragment } from 'react';
import Image from './components/ImgurImage';
import CaptionForm from './components/CaptionForm'

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
    return (id === parseInt(this.props.captionFieldId)) ? <CaptionForm /> : null
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
