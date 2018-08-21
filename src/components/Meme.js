import React,  { Component, Fragment } from 'react'


//Just created some CSS for background over-ride, enlargment, flexible boundaries, etc.

class Meme extends Component {
  render() {
    return (
      <figure className="image-container">
        <img className="scaled" src={this.props.src} alt={this.props.caption} />
        <figcaption className="caption">{this.props.caption}</figcaption>
        {/* <button className="button"> Vote </button> */}
      </figure>
    );
  }
}

export default Meme;
