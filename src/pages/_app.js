import React from 'react';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import PropTypes from 'prop-types';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired, // `Component` harus berupa elemen React
  pageProps: PropTypes.object.isRequired // `pageProps` harus berupa object
};
