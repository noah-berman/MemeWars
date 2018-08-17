import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

//Routing and Nav Bar here


// Basic Structure
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


//create new meme.
// preview.
//published to the meme MemePool.
//user.




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <NavBar />
        </p>
      </div>
    );
  }
}

export default App;
