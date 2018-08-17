import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppPage from './AppPage';



  // App.Js
    // MemePage
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
    images: []
  }

  render() {
    return (
      <div className="App">
        <AppPage images={this.state.images} />
      </div>
    );
  }

  componentDidMount(){
   fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
     .then(response => response.json())
     .then(data => {
       this.setState ({
         images: data
       })
     })
   }
}

export default App;
