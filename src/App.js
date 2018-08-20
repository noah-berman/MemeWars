import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import AppPage from './components/AppPage'
import SearchImagesContainer from './components/SearchImagesContainer'
import NavHeader from './components/NavHeader';
import UserProfilePage from './components/UserProfilePage';
import MemePool from './components/MemePool';
import CreateMeme from './components/CreateMeme';


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

const home = () => <AppPage />;
const profile = () => <UserProfilePage />;;
const memePool = () => <MemePool />;
const createMeme = () => <CreateMeme />;


class App extends Component {

  state = {
    images: [],
    displayImages: [],
    captionFieldId: '',
    currentPage: 'home',
    memeObjs: [],
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
          <Route path="/home" component={ home } />
          <Route path="/profile" component={ profile } />
          <Route path="/image_search" component={ memePool } />
          <Route path="/create_meme" component={ createMeme } />
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
