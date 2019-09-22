import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEstimativasAno } from '../../actions/estimativaActions';
import EstimativaAcumulada from './EstimativaAcumulada';



const EstimativaAno = ({ estimativaano: { estimativaano, loading }, getEstimativasAno }) => {
    useEffect(()=>{
        getEstimativasAno();
        // eslint-disable-next-line
    }, []);

   if(loading || estimativaano === null){
        return <h4>Carregando Estimativas ....</h4>
    }

    return (
        <ul className="collection with-header">
        <li className="collection-header">
            <h4 className='center'>Estimativas da Taxa Selic</h4>
        </li>
        {!loading && estimativaano.length === 0 ? (
            <p className='center'>Nenhuma Estimativa para mostrar</p>
        ) : (
            estimativaano.map(estimativaano => <EstimativaAcumulada estimativaano={estimativaano}/>)

        )}
            
        </ul>
    );
};

EstimativaAno.propTypes = {
    estimativa: PropTypes.object.isRequired,
    getEstimativasAno: PropTypes.func.isRequired
  };
  
  const mapStateToProps = state => ({
    estimativa: state.estimativa
  });
  
  export default connect(
    mapStateToProps,
    { getEstimativasAno }
  )(EstimativaAno);
