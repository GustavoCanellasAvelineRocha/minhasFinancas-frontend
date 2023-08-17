import React, { useState } from "react";
import Card from "../../components/card";
import FormLabel from "../../components/formLabel";
import FormButtonGroup from "../../components/formButtonGroup";
import SelectMenu from "../../components/selectMenu";
import TablePesquisas from "./TablePesquisas";
import LancamentoService from "../../app/lancamentosService";
import Localstorege from "../../app/localStorageService";
import { mensagemErro, mensagemSucesso } from "../../components/toast";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

function LancamentoBusca() {
  const lancamentosService = new LancamentoService();
  const navigate = useNavigate()

  const [filtro, setFiltro] = useState({
    ano: "",
    mes: "",
    tipo: "",
    lancamentos: [],
    idDeletar: 0,
  });

  const [visibleDialog, setvisibleDialog] = useState(false);

  const buscar = () => {
    const usuarioLogado = Localstorege.findItem("usuario_logado");

    const lancamentoFiltro = {
      ano: filtro.ano,
      mes: filtro.mes,
      tipo: filtro.tipo,
      usuario: usuarioLogado.id,
    };

    lancamentosService
      .buscar(lancamentoFiltro)
      .then((response) => {
        setFiltro({ ...filtro, lancamentos: response.data });
      })
      .catch((error) => {
        mensagemErro(error.response.data);
      });
  };

  const listMouths = lancamentosService.listarMeses();

  const listTypes = lancamentosService.listarTipos();

  const editar = (id) => {};

  const abrirConfirmacaoDeletar = (id) => {
    setvisibleDialog(true);
    setFiltro({ ...filtro, idDeletar: id });
  };

  const fecharConfirmacao = () => {
    setvisibleDialog(false);
    setFiltro({ ...filtro, idDeletar: 0 });
  };

  const deletar = () => {
    lancamentosService
      .deletar(filtro.idDeletar)
      .then((response) => {
        mensagemSucesso("Lancamento deletado com sucesso!");
        buscar();
        fecharConfirmacao();
      })
      .catch((error) => {
        mensagemErro(error.response.data);
      });
  };

  const dialogFooter = () => {
    return(
      <div>
      <Button
        label="Cancelar"
        icon="pi pi-times"
        onClick={fecharConfirmacao}
        className="p-button-text"
      />
      <Button label="Confirmar" icon="pi pi-check" onClick={deletar} />
    </div>
    )
  };

  const irParaCadastro = () => {
    navigate("/lancamentos-cadastro")
  }

  return (
    <Card title="Busca Lançamentos">
      <div className="row">
        <div className="col-lg-6">
          <div className="db-component">
            <form>
              <fieldset>
                <FormLabel htmlFor="inputAno" label="Ano: *">
                  <input
                    type="text"
                    className="form-control"
                    id="inputAno"
                    placeholder="Digite o Ano"
                    value={filtro.ano}
                    onChange={(e) =>
                      setFiltro({ ...filtro, ano: e.target.value })
                    }
                  ></input>
                </FormLabel>

                <FormLabel htmlFor="inputMes" label="Mês: *">
                  <SelectMenu
                    id="inputMes"
                    className="form-select"
                    value={filtro.mes}
                    onChange={(e) =>
                      setFiltro({ ...filtro, mes: e.target.value })
                    }
                    list={listMouths}
                  ></SelectMenu>
                </FormLabel>

                <FormLabel htmlFor="inputTipo" label={"Tipo: *"}>
                  <SelectMenu
                    id="inputTipo"
                    className="form-select"
                    value={filtro.tipo}
                    onChange={(e) =>
                      setFiltro({ ...filtro, tipo: e.target.value })
                    }
                    list={listTypes}
                  ></SelectMenu>
                </FormLabel>

                <FormButtonGroup>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={buscar}
                  >
                    Buscar
                  </button>
                  <button type="button" className="btn btn-danger" onClick={irParaCadastro}>
                    Cadastrar
                  </button>
                </FormButtonGroup>
              </fieldset>
            </form>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-md-12">
            <TablePesquisas
              lancamentos={filtro.lancamentos}
              editarAction={editar}
              deletarAction={abrirConfirmacaoDeletar}
            ></TablePesquisas>
          </div>
        </div>
        <div>
          <Dialog
            header="Confirmacao"
            visible={visibleDialog}
            style={{ width: "50vw" }}
            onHide={() => setvisibleDialog(false)}
            footer={dialogFooter}
          >
            <p className="m-0">Realmente deseja excluir esse lancamento?</p>
          </Dialog>
        </div>
      </div>
    </Card>
  );
}

export default LancamentoBusca;
