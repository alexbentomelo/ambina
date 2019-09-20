import React from 'react';
import PropTypes from 'prop-types';

const EstimativaItem = ({ estimativa }) => {
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
    estimativa: PropTypes.object.isRequired
};


export default EstimativaItem
