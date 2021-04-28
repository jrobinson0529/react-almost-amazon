import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddAuthor from '../views/AddAuthor';
import Author from '../views/Author';
import Home from '../views/Home';

function Routes({ authors, setAuthors }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/authors" component={() => <Author authors={authors} setAuthors={setAuthors}/>} />
        <Route path="/add-authors" component={() => <AddAuthor setAuthors={setAuthors}/>} />
      </Switch>
    </div>
  );
}
Routes.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired,
};
export default Routes;
