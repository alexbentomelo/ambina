import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCurrent } from '../../actions/estimativaActions';


const EstimativaAcumulada = ({ estimativaano, setCurrent }) => {
    return (
        <li className='collection-item'>
            <div>
                <a>Data: { estimativaano.data_referencia }</a>
                <br />
                <a><span className='red-text'>Preço: { estimativaano.estimativa_taxa_selic }</span></a>
            </div>
        </li>
    )
}

EstimativaAcumulada.propTypes = {
    estimativaano: PropTypes.object.isRequired,
    setCurrent: PropTypes.func.isRequired
};


export default connect(
    null,
    { setCurrent }
  )(EstimativaAcumulada);
