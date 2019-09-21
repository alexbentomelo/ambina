import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCurrent } from '../../actions/estimativaActions';

const EstimativaItem = ({ estimativa, setCurrent }) => {


    return (
        <li className='collection-item'>
            <div>
                <a>Data: { estimativa.data_referencia }</a>
                <br />
                <a><span className='red-text'>Preço: { estimativa.estimativa_taxa_selic }</span></a>
            </div>
        </li>
    );
};

EstimativaItem.propTypes = {
    estimativa: PropTypes.object.isRequired,
    setCurrent: PropTypes.func.isRequired
};


export default connect(
    null,
    { setCurrent }
  )(EstimativaItem);
