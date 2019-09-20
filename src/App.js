import React, { Fragment, useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import SearchBar from './components/layout/SearchBar';

import Estimativa from './components/estimativas/Estimativa';

const App = () => {

  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar></SearchBar>
      <div className='container'>
         <Estimativa />
      </div>
    </Fragment>
  );
}

export default App;
