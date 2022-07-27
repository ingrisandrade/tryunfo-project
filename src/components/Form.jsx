import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <label htmlFor="name-input">
          <input type="text" data-testid="name-input" name="name-input" />
        </label>
        <label htmlFor="description-input">
          <textarea
            name="description-input"
            id=""
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>
      </div>
    );
  }
}

export default Form;
