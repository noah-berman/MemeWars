import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import AppPage from './components/AppPage'
import SearchCreateContainer from './components/SearchCreateContainer'
import NavHeader from './components/NavHeader';
import UserProfilePage from './components/UserProfilePage';
import MemeGenerator from './components/MemeGenerator'



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


const profile = () => <UserProfilePage />;
//const create = () => <SearchCreateContainer />;

const create = () => <MemeGenerator />;   ///////////////////////////////

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

  setCaption = (memeCaption) => {
    let meme = {"src": this.props.src, "caption": memeCaption, }  // Need to set SRC to selected meme URL
    const allMemes = [...this.state.memeObjs]
    allMemes.push(meme)
    this.setState({
      memeObjs: allMemes
    })
    //return <MemePool allMemes={this.state.allMemes}/>
  }

  render() {
    return (
      <div className="App">

        <NavHeader handleClick={this.handleClick}/>
        {/* <AppPage images={this.state.displayImages} renderCaptionField={this.renderCaptionField} captionFieldId={this.state.captionFieldId} /> */}
        <Switch>
          <Route path="/profile" component={ profile } setCaption={this.setCaption} memeObjs={this.state.memeObjs}/>
          <Route path="/create" component={ create } />
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
