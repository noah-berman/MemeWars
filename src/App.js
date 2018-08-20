import React, { Component } from 'react';
import './App.css';
import NavHeader from './components/NavHeader';

class App extends Component {

  render() {
    return (
      <div>
        <NavHeader />
      </div>
    );
  }
}


export default App;

////BASIC STRUCTURE//////////////////////////////////////////////////////////

  // App.Js
<<<<<<< HEAD
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
=======
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
      <div>
        <AppPage images={this.state.displayImages} renderCaptionField={this.renderCaptionField} captionFieldId={this.state.captionFieldId}/>
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
>>>>>>> 5c69d18ae46460d5d59052b864d27da56b60df5b
