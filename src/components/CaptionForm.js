//Form to create a caption for the image

import React, { Component } from 'react';

class CaptionForm extends Component {

  state = {
    caption: ""
  }

  handleChange = event => {
    this.setState({
      caption: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();

  }

  render() {
    return (
      <form>
        <label>
          Caption:
          <input type="text" value={this.state.value} name="caption" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )

  }

}

export default CaptionForm;
