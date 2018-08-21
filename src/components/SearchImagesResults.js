//List of all imgur images to look through and pick for meme generator

import React from 'react'

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import SearchResultImage from './SearchResultImage'

export default class SearchImagesResults extends React.Component {

  state = {
    photoIndex: 0,
    isOpen: false
  }

  openLightbox = (index) => {
    this.setState({
      photoIndex: index,
      isOpen: true
    })
  }

  renderImages(){
    if (this.props.imgurResults.length > 0){
      return (
        <React.Fragment>
          <div id='prevnext-button-wrapper'>
            <span className="prevnext-button"  onClick={this.props.imgurPrev}>
              Previous
            </span>
            <span className="prevnext-button" onClick={this.props.imgurNext}>
              Next
            </span>
          </div>
          <div id="results-images">
            {this.imgurRender()}
          </div>
          <div id='prevnext-button-wrapper'>
            <span className="prevnext-button"  onClick={this.props.imgurPrev}>
              Previous
            </span>
            <span className="prevnext-button" onClick={this.props.imgurNext}>
              Next
            </span>
          </div>
        </React.Fragment>
      )
    } else if (this.props.giphyResults.length > 0) {
      return (
        <React.Fragment>
          <div id='prevnext-button-wrapper'>
            <span className="prevnext-button" onClick={this.props.giphyPrev}>
              Previous
            </span>
            <span className="prevnext-button" onClick={this.props.giphyNext}>
              Next
            </span>
          </div>
          <div id="results-images">
            {this.giphyRender()}
          </div>
          <div id='prevnext-button-wrapper'>
            <span className="prevnext-button" onClick={this.props.giphyPrev}>
              Previous
            </span>
            <span className="prevnext-button" onClick={this.props.giphyNext}>
              Next
            </span>
          </div>
        </React.Fragment>
      )
    } else {
      return null
   }
  }

  imgurRender = () => {
    const results = [...this.props.imgurResults]
    return results.map((imageObj, index) => {
      return <SearchResultImage
        key={imageObj.id}
        api='imgur'
        imageObj={imageObj}
        openLightbox={this.openLightbox}
        index={index}
        showCreate={this.props.showCreate}
      />
    })
  }

  giphyRender = () => {
    const results = [...this.props.giphyResults]
    return results.map((imageObj, index) => {
      return <SearchResultImage
        key={imageObj.id}
        api='giphy'
        imageObj={imageObj}
        openLightbox={this.openLightbox}
        index={index}
        showCreate={this.props.showCreate}
      />
    })
  }

  render (){
    const { photoIndex, isOpen } = this.state;
    let images;
    if (this.props.imgurResults.length > 0){
      images = this.props.imgurResults.map(imageObj=>imageObj.link)
    } else if (this.props.giphyResults.length > 0){
      images = this.props.giphyResults.map(imageObj=>imageObj.images.original.url)
    }

    return (
      <div id="results-wrapper">
        {this.renderImages()}

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })}
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })}
            // toolbarButtons={[<span
            //   className='memeify-button-toolbar'
            //   onClick={this.props.showCreate}
            //   >Memeify</span>]}
          />
        )}
      </div>
    )
  }
}
