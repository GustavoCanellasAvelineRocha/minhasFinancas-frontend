import React from "react";
import Card from "../../components/card";
import FormLabel from "../../components/formLabel";
import SelectMenu from "../../components/selectMenu";
import LancamentoService from "../../app/lancamentosService";
import FormButtonGroup from "../../components/formButtonGroup";

function lancamentosCadastro() {
  const lancamentosService = new LancamentoService();
  const tipos = lancamentosService.listarTipos();
  const meses = lancamentosService.listarMeses();

  return (
    <Card title="Cadastro de lancamento">
      <div className="row">
        <div className="col-md-12">
          <FormLabel id="inputDescricao" label="Descricao: *">
            <input
              id="inputDescricao"
              type="text"
              className="form-control"
            ></input>
          </FormLabel>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <FormLabel id="inputAno" label="Ano: *">
            <input id="inputAno" type="text" className="form-control"></input>
          </FormLabel>
        </div>
        <div className="col-md-6">
          <FormLabel id="inputMes" label="Mes: *">
            <SelectMenu
              id="inputMes"
              list={meses}
              className="form-select"
            ></SelectMenu>
          </FormLabel>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <FormLabel id="inputValor" label="Valor: *">
            <input id="inputValor" type="text" className="form-control"></input>
          </FormLabel>
        </div>
        <div className="col-md-4">
          <FormLabel id="inputTipo" label="tipo: *">
            <SelectMenu
              id="inputTipo"
              list={tipos}
              className="form-select"
            ></SelectMenu>
          </FormLabel>
        </div>
        <div className="col-md-4">
          <FormLabel id="inputStatus" label="Status: ">
            <input type="text" className="form-control" disabled></input>
          </FormLabel>
        </div>
      </div>

      <FormButtonGroup>
        <button type="button" className="btn btn-success">
          Salvar
        </button>
        <button
          type="button"
          className="btn btn-danger"
        >
          Cancelar
        </button>
      </FormButtonGroup>
    </Card>
  );
}

export default lancamentosCadastro;
