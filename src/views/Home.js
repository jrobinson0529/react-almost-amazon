import React from 'react';
import { AnimateOnChange } from 'react-animation';
import PropTypes from 'prop-types';

function Home({ user }) {
  return (
    <AnimateOnChange>
      {user ? <h1>Hello {user.username}</h1> : <h1>Hello World</h1>}
    </AnimateOnChange>
  );
}
Home.propTypes = {
  user: PropTypes.any
};

export default Home;
