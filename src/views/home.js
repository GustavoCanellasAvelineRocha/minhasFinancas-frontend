import React, { useEffect, useState } from "react";
import FormButtonGroup from "../components/formButtonGroup";
import Jumbotron from "../components/jumbotron";
import UsuarioService from "../app/usuarioService";

function Home() {
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    const usuarioService = new UsuarioService();

    const usuarioLogadoString = localStorage.getItem("usuario_logado");
    const usuarioLogado = JSON.parse(usuarioLogadoString);

    if (usuarioLogado != null) {
      usuarioService
        .obterSaldoPorUsuario(usuarioLogado.id)
        .then((response) => {
          setSaldo(response.data);
        })
        .catch((error) => {
          console.error(error.response);
        });
    }
  });

  return (
    <Jumbotron>
      <h1 className="display-3">Bem vindo!</h1>
      <p className="lead">Esse é seu sistema de finanças.</p>
      <p className="lead">Seu saldo para o mês atual é de {saldo}</p>
      <hr className="my-4"></hr>
      <p>
        E essa é sua área administrativa, utilize um dos menus ou botões abaixo
        para navegar pelo sistema.
      </p>

      <FormButtonGroup>
        <a
          className="btn btn-primary btn-lg"
          href="/cadastro-usuarios"
          role="button"
        >
          <i className="fa fa-users"></i> Cadastrar Usuário
        </a>
        <a
          className="btn btn-danger btn-lg"
          href="https://bootswatch.com/flatly/#"
          role="button"
        >
          <i className="fa fa-users"></i> Cadastrar Lançamento
        </a>
      </FormButtonGroup>
    </Jumbotron>
  );
}

export default Home;
