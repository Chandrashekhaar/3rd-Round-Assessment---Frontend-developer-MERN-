App.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import IssuesPage from './IssuesPage';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/issues" component={IssuesPage} />
  </Router>,
  document.getElementById('root')
);
export default App;