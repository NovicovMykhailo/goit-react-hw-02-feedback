import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
const shortid = require('shortid');

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={css.Container}>
        {Object.entries(options).map(b => (
          <button
            key={shortid.generate()}
            className={css.button}
            type="button"
            name={b[0]}
            onClick={onLeaveFeedback}
          >
            {b[0]}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};
