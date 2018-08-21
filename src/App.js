import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import AppPage from './components/AppPage'
import SearchImagesContainer from './components/SearchImagesContainer'
import NavHeader from './components/NavHeader';
import UserProfilePage from './components/UserProfilePage';
import MemePool from './components/MemePool';



// **** Roadmap ****
//
// App
//   NavBar
//   AppPage
//     Bracket
//     FaceOff
//     memePool
//   Profile
//     myMemes
//   ImageSearch => CreateMeme


const profile = () => <UserProfilePage />;;
const memePool = () => <MemePool />;

class App extends Component {

  state = {
    images: [],
    captionFieldId: '',
    currentPage: 'home',
    memeObjs: [{src: 'https://i.imgur.com/7PSbZIv.jpg', caption: "The truth hurts"}, {src: 'https://i.imgur.com/qMreRhA.jpg', caption: "haters gonna hate"}, {src: 'https://i.imgur.com/tOzGyZt.jpg', caption: "this is a grilled cheese meme"}],
  }

  renderCaptionField = (objId) => {
    this.setState ({
      captionFieldId: objId
    });
  }

  handleClick = (page) => {
    console.log('working', this.state.currentPage)
    this.setState({
      currentPage: page
    })
  }

  render() {
    return (
      <div className="App">

        <NavHeader handleClick={this.handleClick}/>
        {/* <AppPage images={this.state.displayImages} renderCaptionField={this.renderCaptionField} captionFieldId={this.state.captionFieldId} /> */}
        <Switch>
          <Route path="/profile" component={ profile } />
          <Route path="/image_search" component={ memePool } />
          <Route exact path="/" render={(routerProps) => (
            <AppPage
              {...routerProps}
              memeObjs={this.state.memeObjs}
            />
          )} />
        </Switch>

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
