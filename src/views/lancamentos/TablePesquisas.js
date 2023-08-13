import React from "react";
import FormButtonGroup from "../../components/formButtonGroup";

function TablePesquisas(props) {
  const rows = props.lancamentos.map((lancamento, index) => {
    return (
      <tr key={index}>
        <td>{lancamento.descricao}</td>
        <td>{lancamento.valor}</td>
        <td>{lancamento.tipo}</td>
        <td>{lancamento.mes}</td>
        <td>{lancamento.status}</td>
        <td>
          <FormButtonGroup>
            <button
              type="button"
              className="btn btn-info"
              onClick={(e) => props.editarAction(lancamento.id)}
            >
              editar
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={(e) => props.deletarAction(lancamento.id)}
            >
              deletar
            </button>
          </FormButtonGroup>
        </td>
      </tr>
    );
  });

  return (
    <table className="table table-bordered table-hover mt-3">
      <thead className="table-primary ">
        <tr>
          <th scope="col">Descricao</th>
          <th scope="col">Valor</th>
          <th scope="col">Tipo</th>
          <th scope="col">Mes</th>
          <th scope="col">Situacao</th>
          <th scope="col">Acoes</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default TablePesquisas;
