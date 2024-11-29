import React, { useState, useEffect } from 'react';

const Home = ({ lista }) => {
    const [totais, setTotais] = useState({
        totalRecebido: 0,
        totalPago: 0,
        saldo: 0,
    });

    useEffect(() => {
        const totalRecebido = lista.reduce((acc, item) => acc + item.entrada, 0);
        const totalPago = lista.reduce((acc, item) => acc + item.saida, 0);
        const saldo = totalRecebido - totalPago;

        setTotais({ totalRecebido, totalPago, saldo });
    }, [lista]);

    return (
        <div>
            <h1>Resumo Financeiro</h1>
            <p>Total Entrada: R$ {totais.totalRecebido.toFixed(2)}</p>
            <p>Total Saídas: R$ {totais.totalPago.toFixed(2)}</p>
            <p>Saldo: R$ {totais.saldo.toFixed(2)}</p>
        </div>
    );
};

export default Home;