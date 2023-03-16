import PropTypes from 'prop-types';
import React from 'react';
import css from 'components/Feedback/Feedback.module.css';
export const Section = ({ title, children }) => {
  return (
    <div>
      <p className={css.title}>{title}</p>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
