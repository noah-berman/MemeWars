import React, { Component } from 'react';
import './App.css';
import AppPage from './components/AppPage'
import SearchImagesContainer from './components/SearchImagesContainer'
import NavHeader from './components/NavHeader';


class App extends Component {

  state = {
    images: [],
    displayImages: [],
    captionFieldId: '',
    memeObjs: [],
  }

  renderCaptionField = (objId) => {
    this.setState ({
      captionFieldId: objId
    });
  }

  render() {
    return (
      <div className="App">
        <NavHeader />
        <AppPage images={this.state.displayImages} renderCaptionField={this.renderCaptionField} captionFieldId={this.state.captionFieldId}/>
        <SearchImagesContainer />
      </div>
    );
  }

  componentDidMount(){
   fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
     .then(response => response.json())
     .then(data => {
       this.setState ({
         images: data,
         displayImages: data
       })
     })
   }
}

export default App;


////BASIC STRUCTURE//////////////////////////////////////////////////////////

  // App.Js

    // MemeBracket
    // MemePool (contains all of the created memes)
    // FaceoffContainer (renders during the 'bracket phase')
    //
    // **RouterComponents**
    //
    //   ImgurImagesContainer
    //     ImgurImagesForm (search, etc.)
    //     Meme
    //       ImgurImage (selected image from the container)
    //       CaptionForm\
    //
    //   UserProfilePage
    //     UserMemeContainer (contains memes, can be deleted)

    // AppPage
      // Header
      // NavBar
      // MemeBracket
      // MemePool (contains all of the created memes)
      // FaceoffContainer (renders during the 'bracket phase')
      //
      // **RouterComponents**
      //
      //   ImgurImagesContainer
      //     ImgurImagesForm (search, etc.)
      //     Meme
      //       ImgurImage (selected image from the container)
      //       CaptionForm\
      //
      //   UserProfilePage
      //     UserMemeContainer (contains memes, can be deleted)
