/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Button,
  CardTitle,
  CardText
} from 'reactstrap';
import { deleteAuthor } from '../helpers/data/authorData';

function PrintAuthor({
  email,
  favorite,
  first_name,
  last_name,
  setAuthors,
  firebaseKey
}) {
  const handleClick = () => {
    deleteAuthor(firebaseKey).then((response) => setAuthors(response));
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
          <CardText>{favorite ? 'Favorite' : 'Nahfam'}</CardText>
          {<Button color='danger' onClick={handleClick}>DELETE</Button>}
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
