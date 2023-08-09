import React from "react";

function TablePesquisas(props){
    const rows = props.lancamentos.map((lancamento,index)=>{
        return(
            <tr key={index}>
                <td>
                    {lancamento.descricao}
                </td>
                <td>
                    {lancamento.valor}
                </td>
                <td>
                    {lancamento.tipo}
                </td>
                <td>
                    {lancamento.mes}
                </td>
                <td>
                    {lancamento.status}
                </td>
            </tr>
        )
    })

    return(
        <table className="table table-bordered table-hover">
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
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default TablePesquisas;