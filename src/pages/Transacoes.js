import React from 'react';
import Tabela from '../components/Tabela';

const Transacoes = ({lista}) => {
    return (
        <div>
            <Tabela lista={lista}/>
        </div>
    );
}

export default Transacoes;
