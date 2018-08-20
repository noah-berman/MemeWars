//Search bar to submit search fetch request to imgur

import React from 'react'

export default function SearchImagesForm (props) {

  function highLightSelectorButton(api){
    if (props.api !== api){
      return "search-selector-button"
    } else if (props.api === api){
      return "search-selector-button lit"
    }
  }

  return (
    <div>
      <div id="search-selector">
        <div
          id="imgur"
          className={highLightSelectorButton('imgur')}
          onClick={()=>props.switchApi('imgur')}
          >
          <img src={window.location.origin + "/img/imgur_logo.png"} alt='Imgur Logo' className="search-selector-button-image"/>
        </div>
        <div
          id="giphy"
          className={highLightSelectorButton('giphy')}
          onClick={()=>props.switchApi('giphy')}
          >
          <img src={window.location.origin + "/img/giphy_logo.png"} alt='Giphy Logo' className="search-selector-button-image"/>
        </div>
      </div>
      <div id="search-form-wrapper">
        <form id="search-form" onSubmit={(event)=>{event.preventDefault(); props.beginSearch()}}>
          <input id="search-bar" type='input'
            onChange={(event)=>props.changeSearch(event.target.value)}
            value={props.searchValue}
           />
        </form>
      </div>
    </div>
  )


}
