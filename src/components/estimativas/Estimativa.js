import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import EstimativaItem from './EstimativaItem';
import PropTypes from 'prop-types';
import { getEstimativas } from '../../actions/estimativaActions';



const Estimativa = ({ estimativa: { estimativa, loading }, getEstimativas }) => {

    useEffect(()=>{
        getEstimativas();
        // eslint-disable-next-line
    }, []);

   if(loading || estimativa === null){
        return <h4>Carregando Estimativas ....</h4>
    }

    return (
        <ul className="collection with-header">
        <li className="collection-header">
            <h4 className='center'>Estimativas da Taxa Selic</h4>
        </li>
        {!loading && estimativa.length === 0 ? (
            <p className='center'>Nenhuma Estimativa para mostrar</p>
        ) : (
            estimativa.map(estimativa => <EstimativaItem estimativa={estimativa}/>)

        )}
            
        </ul>
    );
};

Estimativa.propTypes = {
    estimativa: PropTypes.object.isRequired,
    getEstimativas: PropTypes.func.isRequired
  };
  
  const mapStateToProps = state => ({
    estimativa: state.estimativa
  });
  
  export default connect(
    mapStateToProps,
    { getEstimativas }
  )(Estimativa);

