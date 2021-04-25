/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Button,
  CardTitle,
  CardText
} from 'reactstrap';

function PrintAuthor({
  email,
  favorite,
  first_name,
  last_name,
  handleClick
}) {
  return (
    <>
      <Card
          body
          inverse
          style={{ backgroundColor: '#333', borderColor: '#333', margin: '10px' }}
        >
          <CardTitle tag='h5'>{first_name} {last_name}</CardTitle>
          <CardText>Email: {email}</CardText>
          <CardText>{favorite ? 'Favorite' : 'Nahfam'}</CardText>
          {handleClick ? <Button onClick={handleClick}>Print Student</Button> : ''}
        </Card>
    </>
  );
}
PrintAuthor.propTypes = {
  email: PropTypes.string.isRequired,
  favorite: PropTypes.bool,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  handleClick: PropTypes.func

};
export default PrintAuthor;
