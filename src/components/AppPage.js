import React, { Component } from 'react';
import MemeBracket from './MemeBracket'
import FaceoffContainer from './FaceoffContainer'
import MemePool from './MemePool'

class AppPage extends Component {

  render() {
    return (
      <div>
        {/* <MemeBracket /> */}
        <FaceoffContainer />
        <MemePool
          memeObjs={this.props.memeObjs}
          updateMemeVote={this.props.updateMemeVote}
          />
      </div>
    )
  }

  //   renderImgJSX = () => {
  //     return this.props.images.map( img => {
  //       return ( <div key={img.id}>
  //         <img src={img.avatar_url} alt={img.name} id={img.id} onClick={this.handleClick}>
  //         </img>
  //         {this.captionFieldLogic(img.id)}
  //
  //
  //       </div>
  //     )
  //   })
  // }


    // captionFieldLogic = id => {
    //   return (id === Number(this.props.captionFieldId)) ? <CaptionForm parentImageId={id} /> : null
    // }
    //
    // handleClick = event => {
    //   this.props.renderCaptionField(event.target.id)
    //  }

}

export default AppPage;
