import React from 'react';
import PropTypes from 'prop-types';
import PrintAuthor from '../components/PrintAuthor';

function Author({ authors, setAuthors }) {
  return (
    <>
      <div className='author-container d-flex'>
        {authors.map((object) => <PrintAuthor
          key={object.firebaseKey}
          setAuthors={setAuthors}
          {...object}
          // email={object.email}
          // first_name={object.first_name}
          // last_name={object.last_name}
          // favorite={object.favorite}
          // firebaseKey={object.firebaseKey}
        />)}
      </div>
    </>
  );
}
Author.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired,
};
export default Author;
