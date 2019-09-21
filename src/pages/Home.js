
import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';


import SearchBar from '../components/layout/SearchBar';

import Estimativa from '../components/estimativas/Estimativa';

import { Provider } from 'react-redux';
import store from '../store';
import M from 'materialize-css/dist/js/materialize.min.js';
import '../App.css';


const Home = () => {
        useEffect(() => {
            // Init Materialize JS
            M.AutoInit();
        });
        return (
        <Provider store={store}>
        <Fragment>
        <SearchBar />
        <div className='container'>
            <Estimativa />
        </div>
        </Fragment>
        </Provider>
        );

        };

export default Home;