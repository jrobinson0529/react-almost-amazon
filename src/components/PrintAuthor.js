/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Button,
  CardTitle,
  CardText
} from 'reactstrap';
import { deleteAuthor } from '../helpers/data/authorData';
import AuthorForm from './AuthorForm';

function PrintAuthor({ setAuthors, ...object }) {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteAuthor(object.firebaseKey).then((response) => setAuthors(response));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
    }
  };
  return (
    <>
      <Card
          body
          inverse
          style={{
            backgroundColor: '#333', borderColor: '#333', margin: '10px', width: '15em'
          }}
        >
          <CardTitle tag='h5'>{object.first_name} {object.last_name}</CardTitle>
          <CardText>Email: {object.email}</CardText>
          <CardText>{object.favorite ? 'Favorite' : ''}</CardText>
          <Button color='danger' onClick={() => handleClick('delete')}>DELETE</Button>
          <Button color='info' onClick={() => handleClick('edit')}>EDIT</Button>
          {editing && <AuthorForm
          formTitle='Edit Author'
          {...object}
          setAuthors={setAuthors}
          />}
        </Card>
    </>
  );
}
PrintAuthor.propTypes = {
  email: PropTypes.string.isRequired,
  favorite: PropTypes.bool,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  setAuthors: PropTypes.func.isRequired,
  firebaseKey: PropTypes.string.isRequired

};
export default PrintAuthor;
