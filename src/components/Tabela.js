import React from 'react';
    

    const Tabela = ({lista}) => (
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descrição</th>
            <th>Entrada</th>
            <th>Saída</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((item) => (
            <tr key={item.codigo}>
              <td>{item.codigo}</td>
              <td>{item.descricao}</td>
              <td>{item.entrada.toFixed(2)}</td>
              <td>{item.saida.toFixed(2)}</td>
              <td>{item.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
    
    export default Tabela;
    