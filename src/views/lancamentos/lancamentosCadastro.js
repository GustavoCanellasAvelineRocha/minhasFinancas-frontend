import React, { useState, useEffect, useMemo } from "react";
import Card from "../../components/card";
import FormLabel from "../../components/formLabel";
import SelectMenu from "../../components/selectMenu";
import LancamentoService from "../../app/lancamentosService";
import FormButtonGroup from "../../components/formButtonGroup";
import Localstorege from "../../app/SessionStorageService";
import { useParams } from "react-router-dom";

import { mensagemErro, mensagemSucesso } from "../../components/toast";
import { useNavigate } from "react-router-dom";

function LancamentosCadastro() {
  const lancamentosService = useMemo(() => new LancamentoService(), []);
  const navigate = useNavigate();
  const tipos = lancamentosService.listarTipos();
  const meses = lancamentosService.listarMeses();
  const [atualizando, setAtualizando] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      lancamentosService.obterPorId(id).then((response) => {
        setLancamento(response.data);
        setAtualizando(true);
      });
    }
  }, [id, lancamentosService]);

  const [Lancamento, setLancamento] = useState({
    id: null,
    idUsuario: null,
    descricao: "",
    valor: "",
    ano: "",
    tipo: "",
    status: "",
  });

  const SalvaLancamento = () => {
    const usuarioLogado = Localstorege.findItem("usuario_logado");

    let valor = Lancamento.valor

    const lancamentoAux = {
      id: null,
      idUsuario: usuarioLogado.id,
      descricao: Lancamento.descricao,
      valor: valor.replace(",","."),
      mes: Lancamento.mes,
      ano: Lancamento.ano,
      tipo: Lancamento.tipo,
      status: Lancamento.status,
    };

    validarCampos(lancamentoAux);

    lancamentosService
      .salvar(lancamentoAux)
      .then((response) => {
        mensagemSucesso("Lancamento cadastrado com sucesso!");
        irParaBusca();
      })
      .catch((error) => {
        mensagemErro(error.response.data);
      });
  };

  const atualizaLancamento = () => {
    const usuarioLogado = Localstorege.findItem("usuario_logado");

    let valor = Lancamento.valor

    const lancamentoAux = {
      id: null,
      idUsuario: usuarioLogado.id,
      descricao: Lancamento.descricao,
      valor: valor.replace(",","."),
      mes: Lancamento.mes,
      ano: Lancamento.ano,
      tipo: Lancamento.tipo,
      status: Lancamento.status,
    };

    lancamentosService
      .atualizar(lancamentoAux)
      .then((response) => {
        mensagemSucesso("Lancamento atualizado com sucesso!");
        irParaBusca();
      })
      .catch((error) => {
        mensagemErro(error.response.data);
      });
  };

  const validarCampos = (lancamento) => {
    try {
      lancamentosService.validar(lancamento);
    } catch (erro) {
      const mensagem = erro.mensagem;
      mensagem.forEach((msg) => {
        mensagemErro(msg);
      });
      return false;
    }
  };

  const irParaBusca = () => {
    navigate("/lancamentos-busca");
  };

  return (
    <Card
      title={atualizando ? "Editando Lancamento" : "Cadastro de lancamento"}
    >
      <div className="row">
        <div className="col-md-12">
          <FormLabel id="inputDescricao" label="Descricao: *">
            <input
              id="inputDescricao"
              type="text"
              className="form-control"
              value={Lancamento.descricao}
              onChange={(e) => {
                setLancamento({ ...Lancamento, descricao: e.target.value });
              }}
            ></input>
          </FormLabel>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <FormLabel id="inputAno" label="Ano: *">
            <input
              id="inputAno"
              type="text"
              className="form-control"
              value={Lancamento.ano}
              onChange={(e) => {
                setLancamento({ ...Lancamento, ano: e.target.value });
              }}
            ></input>
          </FormLabel>
        </div>
        <div className="col-md-6">
          <FormLabel id="inputMes" label="Mes: *">
            <SelectMenu
              id="inputMes"
              list={meses}
              className="form-select"
              value={Lancamento.mes}
              onChange={(e) => {
                setLancamento({ ...Lancamento, mes: e.target.value });
              }}
            ></SelectMenu>
          </FormLabel>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <FormLabel id="inputValor" label="Valor: *">
            <input
              id="inputValor"
              type="text"
              className="form-control"
              value={Lancamento.valor}
              onChange={(e) => {
                setLancamento({ ...Lancamento, valor: e.target.value });
              }}
            ></input>
          </FormLabel>
        </div>
        <div className="col-md-4">
          <FormLabel id="inputTipo" label="tipo: *">
            <SelectMenu
              id="inputTipo"
              list={tipos}
              className="form-select"
              value={Lancamento.tipo}
              onChange={(e) => {
                setLancamento({ ...Lancamento, tipo: e.target.value });
              }}
            ></SelectMenu>
          </FormLabel>
        </div>
        <div className="col-md-4">
          <FormLabel id="inputStatus" label="Status: ">
            <input
              type="text"
              className="form-control"
              disabled
              value={Lancamento.status}
            ></input>
          </FormLabel>
        </div>
      </div>

      <FormButtonGroup>
        {atualizando ? (
          <button
            type="button"
            className="btn btn-success"
            onClick={atualizaLancamento}
          >
            <i className="pi pi-pencil"></i> Editar
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-success"
            onClick={SalvaLancamento}
          >
            <i className="pi pi-save"></i> Salvar
          </button>
        )}

        <button type="button" className="btn btn-danger" onClick={irParaBusca}>
          <i className="pi pi-times"></i> Cancelar
        </button>
      </FormButtonGroup>
    </Card>
  );
}

export default LancamentosCadastro;
