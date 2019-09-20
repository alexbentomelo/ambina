import React, { useState, useEffect } from 'react';

import EstimativaItem from './EstimativaItem';


const Estimativa = () => {

    const [estimativas, setEstimativas] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(()=>{
        getEstimativas();
        // eslint-disable-next-line
    }, []);


    const getEstimativas = async () => {
        setLoading(true);
        const res = await fetch('/estimativa_taxa_selic');
        const data = await res.json();

        setEstimativas(data);
        setLoading(false);
    }

    if(loading){
        return <h4>Carregando Estimativas ....</h4>
    }



    return (
        <ul className="collection with-header">
        <li className="collection-header">
            <h4 className='center'>Estimativas da Taxa Selic</h4>
        </li>
        {!loading && estimativas.length ===0 ? (
            <p className='center'>Nenhuma Estimativa para mostrar</p>
        ) : (
            estimativas.map(estimativa => <EstimativaItem estimativa={estimativa}/>)

        )}
            
        </ul>
    )
}

export default Estimativa
