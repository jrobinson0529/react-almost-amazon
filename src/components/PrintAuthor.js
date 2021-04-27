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

function PrintAuthor({
  email,
  favorite,
  first_name,
  last_name,
  setAuthors,
  firebaseKey
}) {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteAuthor(firebaseKey).then((response) => setAuthors(response));
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
          <CardTitle tag='h5'>{first_name} {last_name}</CardTitle>
          <CardText>Email: {email}</CardText>
          <CardText>{favorite ? 'Favorite' : ''}</CardText>
          <Button color='danger' onClick={() => handleClick('delete')}>DELETE</Button>
          <Button color='info' onClick={() => handleClick('edit')}>EDIT</Button>
          {editing && <AuthorForm
          formTitle='Edit Author'
          email={email}
          first_name={first_name}
          last_name={last_name}
          favorite={favorite}
          firebaseKey={firebaseKey}
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
