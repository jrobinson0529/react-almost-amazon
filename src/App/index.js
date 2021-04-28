import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getAuthors } from '../helpers/data/authorData';
import Routes from '../helpers/Routes';

export default function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then((response) => setAuthors(response));
  }, []);
  return (
    <>
      <Router>
        <NavBar />
        <Routes authors={authors} setAuthors={setAuthors}/>
      </Router>
    </>
  );
}
