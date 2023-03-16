import PropTypes from 'prop-types';
import React from 'react';
import css from 'components/Feedback/Feedback.module.css';

export const Notification = ({ message }) => {
  return <p className={css.text}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
