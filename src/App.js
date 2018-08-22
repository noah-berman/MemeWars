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

const create = () => <SearchCreateContainer />;   ///////////////////////////////

class App extends Component {

  state = {
    captionFieldId: '',
    currentPage: 'home',
    memeObjs: [],
  }

  updateMemeVote = (newMemeObj) => {
    const newMemeObjs = this.state.memeObjs.filter(meme=>meme.id !== newMemeObj.id)
    newMemeObjs.push(newMemeObj)
    this.setState({
      memeObjs: newMemeObjs
    })
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

  setCaption = (memeCaption, memeObj) => {
    // let meme = {src: memeObj.src, caption: memeCaption, }  // Need to set SRC to selected meme URL
    const allMemes = [...this.state.memeObjs]

    const config = {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        image: memeObj.src,
        caption: memeCaption,
        website: memeObj.api,
        api_id: memeObj.apiId,
        score: 0,
        user_id: 1
      })
    }

    fetch('http://localhost:3001/api/v1/memes/', config)
    // .then(console.log)
    .then(res=>res.json())
    .then(res=>{console.log(res); return res})
    .then(res=>{
      allMemes.push(res)
      this.setState({
        memeObjs: allMemes
      })
    })

    // return <MemePool allMemes={this.state.allMemes}/>)

  }

  render() {
    return (
      <div className="App">

        <NavHeader handleClick={this.handleClick}/>
        {/* <AppPage images={this.state.displayImages} renderCaptionField={this.renderCaptionField} captionFieldId={this.state.captionFieldId} /> */}
        <Switch>
          <Route path="/profile" component={ profile } />
          <Route path="/create" render={ (routerProps)=> (
            <SearchCreateContainer
              {...routerProps}
              memeObjs={this.state.memeObjs}
              setCaption={this.setCaption}
            />
          )} />
          <Route exact path="/" render={(routerProps) => (
            <AppPage
              {...routerProps}
              memeObjs={this.state.memeObjs}
              updateMemeVote={this.updateMemeVote}
            />
          )} />
        </Switch>

      </div>
    );
  }

  componentDidMount(){
   fetch('http://localhost:3001/api/v1/memes/')
     .then(response => response.json())
     .then(data => {
       this.setState ({
         memeObjs: data
       })
     })
   }
}

export default App;
