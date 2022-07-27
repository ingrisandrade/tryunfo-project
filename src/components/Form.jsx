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
        <label htmlFor="attr1-input">
          <input type="number" name="attr1-input" id="" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2-input">
          <input type="number" name="attr2-input" id="" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3-input">
          <input type="number" name="attr3-input" id="" data-testid="attr3-input" />
        </label>
        <label htmlFor="image-input">
          <input type="text" name="image-input" data-testid="image-input" />
        </label>
      </div>
    );
  }
}

export default Form;
