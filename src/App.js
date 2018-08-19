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

// <Route exact path="/" component={Home} />                    Create a New Meme
// <Route exact path="/user" component={User} />                User Profile Page, which shows all memes
// <Route exact path="/all_memes" component={MemePool} />       All Memes for upvoting/downvoting


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
