//Image search & select container component

import React from 'react'
import SearchImagesForm from './SearchImagesForm'
import SearchImagesResults from './SearchImagesResults'

import {imgurClientId, giphyKey} from '../apikeys/apikeys.js'

export default class SearchCreateContainer extends React.Component {

  state = {
    api: null,
    search: '',
    imgurResults: [],
    prevImgurSearch: '',
    imgurPage: 0,
    giphyResults: [],
    prevGiphySearch: '',
    giphyOffset: 0,
    create: false
  }

  changeSearch = (value) => {
    this.setState({
      search: value
    })
  }

  switchApi = (api) => {
    this.setState({
      api: api
    })
  }

  beginSearch = () => {
    if (this.state.api === 'imgur'){
      this.setState({
        prevImgurSearch: this.state.search,
        imgurPage: 0
      }, ()=>this.imgurSearch(this.state.search))
    } else if (this.state.api === 'giphy'){
      this.setState({
        prevGiphySearch: this.state.search,
        giphyOffset: 0
      }, ()=>this.giphySearch(this.state.search))
    } else {
      console.warn('no api selected')
    }
  }

  imgurSearch = (query) => {
    const url = 'https://api.imgur.com/3/gallery/search/time/all/'
    const page = this.state.imgurPage
    // const params = '&q_type=jpg'
    const config = {
      // "async": true,
      // "crossDomain": true,
      "method": "GET",
      "headers": {
        "Authorization": `Client-ID ${imgurClientId}`
      }
    }
    fetch(url + page + '?q=' + query/* + params*/, config)
    .then(res=>res.json())
    .then(obj=>{console.log(obj); return obj})
    .then(obj=>this.setState({
      imgurResults: this.stageImgurData(obj.data),
      giphyResults: [],
      prevGiphySearch: '',
      search: ''
    }, ()=>console.log(this.state))
    )
  }

  stageImgurData = (data) => {
    const newArray = []
    data.forEach(resource => {
      if (resource.images) { // "is_album" property seemed unreliable in determining if a resource contains multiple images
        resource.images.forEach(image => {
          if (image.type !== 'image/gif' && image.type !== 'video/mp4') {
            newArray.push(image)
          }
        })
      } else {
        if (resource.type !== 'image/gif' && resource.type !== 'video/mp4') {
          newArray.push(resource)
        }
      }
    })
    console.log('staged imgur data', newArray)
    return newArray
  }

  imgurNext = () => {
    this.setState({
      imgurPage: this.state.imgurPage + 1
    }, ()=>this.imgurSearch(this.state.prevImgurSearch))
  }

  imgurPrev = () => {
    if (this.state.imgurPage > 0){
      this.setState({
        imgurPage: this.state.imgurPage - 1
      }, ()=>this.imgurSearch(this.state.prevImgurSearch))
    }
  }

  giphySearch = (query) => {
    const url = 'http://api.giphy.com/v1/gifs/search'
    const apiKey = `&api_key=${giphyKey}`
    const limit = '&limit=30'
    const offset = '&offset=' + this.state.giphyOffset
    fetch(url + '?q=' + query + apiKey + limit + offset)
    .then(res=>res.json())
    .then(obj=>{console.log(obj); return obj})
    .then(obj=>this.setState({
      imgurResults: [],
      giphyResults: obj.data,
      prevImgurSearch: '',
      search: ''
    }, ()=>console.log(this.state))
    )
  }

  giphyNext = () => {
    this.setState({
      giphyOffset: this.state.giphyOffset + 30
    }, ()=>this.giphySearch(this.state.prevGiphySearch))
  }

  giphyPrev = () => {
    if (this.state.giphyOffset > 0){
      this.setState({
        giphyOffset: this.state.giphyOffset - 30
      }, ()=>this.giphySearch(this.state.prevGiphySearch))
    }
  }

  showCreate = () => {
    this.setState({
      create: true
    })
  }

  render(){
    return (
      <div id="search-images-container">
        {!this.state.create ? (
          <React.Fragment>
          <SearchImagesForm
            changeSearch={this.changeSearch}
            searchValue={this.state.search}
            beginSearch={this.beginSearch}
            api={this.state.api}
            switchApi={this.switchApi}
           />
          <SearchImagesResults
            imgurResults={this.state.imgurResults}
            imgurNext={this.imgurNext}
            imgurPrev={this.imgurPrev}
            giphyResults={this.state.giphyResults}
            giphyNext={this.giphyNext}
            giphyPrev={this.giphyPrev}
            showCreate={this.showCreate}
           />
         </React.Fragment>
          )
          :
          null // 'create' component
        }
      </div>
    )
  }

}
