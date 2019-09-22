import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';


import SearchBar from '../components/layout/SearchBar';

import EstimativaAno from '../components/estimativas/EstimativaAno';

import { Provider } from 'react-redux';
import store from '../store';
import M from 'materialize-css/dist/js/materialize.min.js';
import '../App.css';

const SelicAno = () => {
    useEffect(() => {
        // Init Materialize JS
        M.AutoInit();
    });
    return (
    <Provider store={store}>
    <Fragment>
    <SearchBar />
    <div className='container'>
        <EstimativaAno />
    </div>
    </Fragment>
    </Provider>
    );
}

export default SelicAno
