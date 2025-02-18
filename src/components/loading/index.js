import React from 'react';
import PropTypes from 'prop-types';
const Index = (props) => {
  const { title } = props;
  return (
    <div className="loader">
      <img src="/assets/images/192x192.png" alt={title} loading="lazy" />
    </div>
  );
};

Index.propTypes = {
  title: PropTypes.string.isRequired
};

export default Index;
