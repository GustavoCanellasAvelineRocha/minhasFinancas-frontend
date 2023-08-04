import React, { useState } from "react";

import Card from "../components/card";
import FormLabel from "../components/formLabel";
import FormButtonGroup from "../components/formButtonGroup";

function CadastroUsuario() {
  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    senha: "",
    senhaRepetida: "",
  });

  const setNome = (novoNome) => {
    setUsuario((prevState) => ({
      ...prevState,
      nome: novoNome,
    }));
  };

  const setEmail = (novoEmail) => {
    setUsuario((prevState) => ({
      ...prevState,
      email: novoEmail,
    }));
  };

  const setSenha = (novaSenha) => {
    setUsuario((prevState) => ({
      ...prevState,
      senha: novaSenha,
    }));
  };

  const setSenhaRepetida = (novaSenhaRepetida) => {
    setUsuario((prevState) => ({
      ...prevState,
      senhaRepetida: novaSenhaRepetida,
    }));
  };

  const cadastrar = () => {
    console.log(usuario);
  };

  //   const Cancelar = () =>{
  //     console.log('nome',nome)
  //     console.log('email',email)
  //     console.log('senha',senha)
  //     console.log('senharepetida',senhaRepetida)
  //   }

  return (
    <div className="row">
      <div className="col-lg-12">
        <Card title="Cadastro de usuario ">
          <div className="bs-component">
            <FormLabel label="Nome: *" htmlFor="inputNome">
              <input
                type="text"
                id="inputNome"
                name="nome"
                value={usuario.nome}
                className="form-control"
                onChange={(e) => setNome(e.target.value)}
              ></input>
            </FormLabel>
            <FormLabel label="Email *" htmlFor="inputEmail">
              <input
                type="email"
                id="inputEmail"
                name="email"
                value={usuario.email}
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </FormLabel>
            <FormLabel label="Senha *" htmlFor="inputSenha">
              <input
                type="senha"
                id="inputSenha"
                name="senha"
                value={usuario.senha}
                className="form-control"
                onChange={(e) => setSenha(e.target.value)}
              ></input>
            </FormLabel>
            <FormLabel label="Repita Sua Senha *" htmlFor="inputSenhaRepetida">
              <input
                type="senhaRepetida *"
                id="inputSenhaRepetida"
                name="senhaRepetida"
                value={usuario.senhaRepetida}
                className="form-control"
                onChange={(e) => setSenhaRepetida(e.target.value)}
              ></input>
            </FormLabel>

            <FormButtonGroup>
              <button
                onClick={cadastrar}
                type="button"
                className="btn btn-success "
              >
                Salvar
              </button>
              <a type="button" className="btn btn-danger " href="/login">
                Cancelar
              </a>
            </FormButtonGroup>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default CadastroUsuario;
