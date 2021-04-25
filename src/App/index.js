import React, { useState, useEffect } from 'react';
import AuthorForm from '../components/AuthorForm';
import PrintAuthor from '../components/PrintAuthor';
import { getAuthors } from '../helpers/data/authorData';

export default function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then((response) => setAuthors(response));
  }, []);
  return (
    <>
      <div className="author-form d-flex flex-column w-50 mx-auto flex-wrap">
        <AuthorForm formTitle='Add Author'/>
        {authors.map((object) => <PrintAuthor key={object.firebaseKey}
          email={object.email}
          first_name={object.first_name}
          last_name={object.last_name}
          favorite={object.favorite}
          handleClick={() => console.warn(`You clicked on ${object.first_name}'s card`)}
        />)}
      </div>
    </>
  );
}
