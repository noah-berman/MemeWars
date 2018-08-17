//Image search & select container component

import React from 'react'
import SearchImagesForm from './SearchImagesForm'
import SearchImagesResults from './SearchImagesResults'

import {imgurClientId, giphyKey} from '../apikeys/apikeys.js'

export default class SearchImagesContainer extends React.Component {

  state = {
    api: null,
    search: '',
    imgurResults: [],
    prevImgurSearch: '',
    imgurPage: 0,
    giphyResults: [],
    prevGiphySearch: '',
    giphyOffset: 0
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
      }, ()=>this.imgurSearch())
    } else if (this.state.api === 'giphy'){
      this.setState({
        prevGiphySearch: this.state.search,
        giphyOffset: 0
      }, ()=>this.giphySearch())
    } else {
      console.warn('no api selected')
    }
  }

// TODO: sort imgur results into image collection instead of albums, filter non-cooperative image links (mp4, gifv)
  imgurSearch = () => {
    const url = 'https://api.imgur.com/3/gallery/search/time/all/'
    const page = this.state.imgurPage
    const query = '?q=' + this.state.search
    // const params = '&q_type=jpg'
    const config = {
      // "async": true,
      // "crossDomain": true,
      "method": "GET",
      "headers": {
        "Authorization": `Client-ID ${imgurClientId}`
      }
    }
    fetch(url + page + query/* + params*/, config)
    .then(res=>res.json())
    .then(obj=>{console.log(obj); return obj})
    .then(obj=>this.setState({
      imgurResults: obj.data,
      giphyResults: [],
      prevGiphySearch: ''
    }, ()=>console.log(this.state))
    )
  }

  imgurNext = () => {
    this.setState({
      imgurPage: this.state.imgurPage + 1
    }, ()=>this.imgurSearch())
  }

  imgurPrev = () => {
    if (this.state.imgurPage > 0){
      this.setState({
        imgurPage: this.state.imgurPage - 1
      }, ()=>this.imgurSearch())
    }
  }

  giphySearch = () => {
    const url = 'http://api.giphy.com/v1/gifs/search'
    let query;
    if (this.state.giphyOffset === 0){
      query = '?q=' + this.state.search
    } else {
      query = '?q=' + this.state.prevGiphySearch
    }
    const apiKey = `&api_key=${giphyKey}`
    const limit = '&limit=30'
    const offset = '&offset=' + this.state.giphyOffset
    fetch(url + query + apiKey + limit + offset)
    .then(res=>res.json())
    .then(obj=>{console.log(obj); return obj})
    .then(obj=>this.setState({
      imgurResults: [],
      giphyResults: obj.data,
      prevImgurSearch: ''
    }, ()=>console.log(this.state))
    )
  }

  giphyNext = () => {
    this.setState({
      giphyOffset: this.state.giphyOffset + 30
    }, ()=>this.giphySearch())
  }

  giphyPrev = () => {
    if (this.state.giphyOffset > 0){
      this.setState({
        giphyOffset: this.state.giphyOffset - 30
      }, ()=>this.giphySearch())
    }
  }

  render(){
    return (
      <div>
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
         />
      </div>
    )
  }

}
