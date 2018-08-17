//List of all imgur images to look through and pick for meme generator

import React from 'react'

export default function SearchImagesResults (props) {

  function renderImages(){
    if (props.imgurResults.length > 0){
      return (
        <React.Fragment>
          <button className="prevnext-button"  onClick={props.imgurPrev}>
            Previous
          </button>
          <button className="prevnext-button" onClick={props.imgurNext}>
            Next
          </button>
          <div id="results-images">
            {imgurRender()}
          </div>
        </React.Fragment>
      )
    } else if (props.giphyResults.length > 0) {
      return (
        <React.Fragment>
          <button className="prevnext-button" onClick={props.giphyPrev}>
            Previous
          </button>
          <button className="prevnext-button" onClick={props.giphyNext}>
            Next
          </button>
          <div id="results-images">
            {giphyRender()}
          </div>
        </React.Fragment>
      )
    } else {
      return null
   }
  }

// TODO: will receive cleaner collection of image objects upon SearchImagesContainer imgurSearch() refactor
  const imgurRender = () => {

    let firstResources = [...props.imgurResults]
    // firstResources.length = 10

    let imgTags = firstResources.map((imageObj, i) => {

      // console.log(i, imageObj, imageObj.images)

      if (!imageObj.is_album) {
        if (imageObj.type === "image/jpeg"){
          return <img key={imageObj.id} src={imageObj.link} alt={imageObj.title} className="search-result-image"/>
        } else if (imageObj.type === "image/gif") {
          return <img key={imageObj.id} src={imageObj.link} alt={imageObj.title} className="search-result-image" />
        }
      } else if (imageObj.is_album){
        return imageObj.images.map(image => {
          if (image.type === "image/jpeg"){
            return <img key={image.id} src={image.link} alt={imageObj.title} className="search-result-image" />
          } else if (image.type === "image/gif"){
            return <img key={image.id} src={image.link} alt={imageObj.title} className="search-result-image" />
          }
        })
      }
    })
    console.log(imgTags)
    return imgTags
  }

  const giphyRender = () => {
    const results = [...props.giphyResults]
    return results.map(imageObj => {
      return <img key={imageObj.id} src={imageObj.images.downsized.url} alt={imageObj.title} className="search-result-image" />
    })
  }

  return (
    <div id="results-wrapper">
      {renderImages()}
    </div>
  )

}
