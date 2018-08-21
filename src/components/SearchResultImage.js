import React from 'react'

export default function SearchResultImage (props) {

  function parseImageData () {
    if (props.api === 'imgur'){
      return <img
        className="search-result-image"
        src={props.imageObj.link}
        alt={props.imageObj.title || props.imageObj.description || ''}
        onClick={()=>props.openLightbox(props.index)}
        />
    }
    if (props.api === 'giphy'){
      return <img
        className="search-result-image" src={props.imageObj.images.downsized.url}
        alt={props.imageObj.title}
        onClick={()=>props.openLightbox(props.index)}
      />
    }
  }

  return (
    <span className="search-result-image-wrapper" >
      {parseImageData()}
      <span
        className="memeify-button"
        // onClick={}
        >Memeify</span>
    </span>
  )
}
