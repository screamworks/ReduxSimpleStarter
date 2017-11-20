import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = "AIzaSyBlbk6TS7Kd9J4f--p4pSsjvnAfDHu8RC0";

import SearchBar from './components/search_bar';

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
};
ReactDOM.render(
 <App />,
 document.querySelector('.container'));
