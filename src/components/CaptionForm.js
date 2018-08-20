//Form to create a caption for the image

import React, { Component } from 'react';

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
    this.props.setCaption(this.state.caption)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Caption:
          <textarea type="text" value={this.state.caption} name="caption" onChange={this.handleChange} placeholder="Enter Meme Caption..." cols="40" rows="20"></textarea>
        </label>
        <input type="submit" className="button" value="Publish" />
      </form>
    )

  }

}

export default CaptionForm;
