import React, { Component } from 'react';
import { Link }from 'react-router-dom';


const Navbar = ({ title }) => {

        return (
            <nav className='navbar bg-primary'>
                <h1> { title }</h1>
                <ul>
                    <li>
                        <Link to='/'>Histórico</Link>
                    </li>
                    <li>
                        <Link  to='/selic_ano'>Selic/Ano</Link>
                    </li>
                </ul>
            </nav>
        )

}

Navbar.defaultProps = {
    title: 'Anbima'
};

export default Navbar