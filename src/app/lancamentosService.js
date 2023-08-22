import ErroValidacao from "../exception/erroValidacao";
import ApiService from "./apiService";

class LancamentoService extends ApiService {
  constructor() {
    super("/api/lancamentos");
  }

  salvar(lancamento) {
    return this.post("", lancamento);
  }

  obterPorId(id) {
    return this.get(`/buscar/${id}`);
  }

  atualizar(lancamento) {
    return this.put(`/${lancamento.id}`, lancamento);
  }

  deletar(id) {
    return this.delete(`/${id}`);
  }

  alterarStatus(id,status){
    const json = {status: status}
    return this.put(`/${id}/atualiza-status`,json)
  }

  listarMeses() {
    const list = [
      { label: "Selecione", value: "" },
      { label: "Janeiro", value: 1 },
      { label: "Fevereiro", value: 2 },
      { label: "Março", value: 3 },
      { label: "Abril", value: 4 },
      { label: "Maio", value: 5 },
      { label: "Junho", value: 6 },
      { label: "Julho", value: 7 },
      { label: "Agosto", value: 8 },
      { label: "Setembro", value: 9 },
      { label: "Outubro", value: 10 },
      { label: "Novembro", value: 11 },
      { label: "Dezembro", value: 12 },
    ];
    return list;
  }

  listarTipos() {
    const list = [
      { label: "Selecione", value: "" },
      { label: "Despesa", value: "DESPESA" },
      { label: "Receita", value: "RECEITA" },
    ];
    return list;
  }

  buscar(LancamentoFiltro) {
    let params = `/buscar?usuario=${LancamentoFiltro.usuario}`;

    if (LancamentoFiltro.mes) {
      params = `${params}&mes=${LancamentoFiltro.mes}`;
    }

    if (LancamentoFiltro.tipo) {
      params = `${params}&tipo=${LancamentoFiltro.tipo}`;
    }

    if (LancamentoFiltro.status) {
      params = `${params}&status=${LancamentoFiltro.status}`;
    }

    if (LancamentoFiltro.ano) {
      params = `${params}&ano=${LancamentoFiltro.ano}`;
    }

    return this.get(params);
  }

  validar(lancamento) {
    const erros = [];

    if (!lancamento.ano) {
      erros.push("Informe o ano.");
    }

    if (!lancamento.mes) {
      erros.push("Informe o mes.");
    }

    if (!lancamento.descricao) {
      erros.push("Informe a descricao.");
    }

    if (!lancamento.valor) {
      erros.push("Informe o valor.");
    }

    if (!lancamento.tipo) {
      erros.push("Informe o tipo.");
    }

    if (erros && erros.length > 0) {
      throw new ErroValidacao(erros);
    }
  }

}

export default LancamentoService;
