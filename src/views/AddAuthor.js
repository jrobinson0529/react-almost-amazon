import React from 'react';
import PropTypes from 'prop-types';
import AuthorForm from '../components/AuthorForm';

function AddAuthor({ setAuthors }) {
  return (
    <div className="author-form d-flex flex-column w-50 mx-auto flex-wrap">
    <AuthorForm formTitle='Add Author' setAuthors={setAuthors}/>
  </div>
  );
}
AddAuthor.propTypes = {
  setAuthors: PropTypes.func.isRequired
};

export default AddAuthor;
