//Form to create a caption for the image  

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class CaptionForm extends Component {

  state = {
    caption: ""
  }

  handleChange = (event) => {
    this.setState({
      caption: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.writeCaption(this.state.caption)
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <textarea type="text" value={this.state.caption} name="caption" onChange={this.handleChange} placeholder="Enter Meme Caption..." cols="20" rows="5"></textarea>
        </label>
        <span>
          <NavLink className="button" to="/" memeObjs={this.props.memeObjs}> Publish </NavLink>
        </span>
      </form>
    )
  }

//button: type="submit"

}

export default CaptionForm;
