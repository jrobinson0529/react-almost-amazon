import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createAuthor } from '../helpers/data/authorData';

const AuthorForm = ({ formTitle, setAuthors }) => {
  const [author, setAuthor] = useState({
    email: '',
    favorite: false,
    first_name: '',
    last_name: '',
    uid: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    createAuthor(author).then((response) => setAuthors(response));
  };
  const handleInputChange = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'favorite' ? e.target.checked : e.target.value
    }));
  };
  return (
    <div className='form-container'>
      <form
          id="addAuthorForm"
          autoComplete="off"
          onSubmit={handleSubmit}
          className='add-author-form'
          >
          <h2>{formTitle}</h2>
          <label>Email: </label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={author.email}
            onChange={handleInputChange}
          ></input>
          <label>First Name: </label>
          <input
            name="first_name"
            type="text"
            placeholder="First Name"
            value={author.first_name}
            onChange={handleInputChange}
          ></input>
          <label>Last Name: </label>
          <input
            name="last_name"
            type="text"
            placeholder="Last Name"
            value={author.last_name}
            onChange={handleInputChange}
          ></input>
          <label>
          <input
            name="favorite"
            type="checkbox"
            checked={author.favorite}
            onChange={handleInputChange}
          ></input> Favorite</label>
          <button type="submit">Submit</button>
        </form>
    </div>
  );
};

AuthorForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setAuthors: PropTypes.func.isRequired
};
export default AuthorForm;
