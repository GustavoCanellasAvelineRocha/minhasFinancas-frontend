import React, { useState } from "react";

import Card from "../components/card";
import FormLabel from "../components/formLabel";
import FormButtonGroup from "../components/formButtonGroup";
import { mensagemSucesso, mensagemErro } from "../components/toast";
import { useNavigate } from "react-router-dom";

import UsuarioService from "../app/usuarioService";

function CadastroUsuario() {
  const navigate = useNavigate();

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
    const usuarioService = new UsuarioService();

    const usuarioAux = {
      nome: usuario.nome,
      email: usuario.email,
      senha: usuario.senha,
      senhaRepetida: usuario.senhaRepetida
    };

    console.log(usuarioAux)

    try{
      usuarioService.validar(usuarioAux);
    }catch(erro){
      const mensagem = erro.mensagem;
      mensagem.forEach(msg => {
        mensagemErro(msg)
      });
      return false
    }
    
    usuarioService
      .salvar(usuario)
      .then(() => {
        mensagemSucesso(
          "Usuario cadastrado com sucesso! faca o login para continuar"
        );
        navigate("/login");
      })
      .catch((error) => {
        mensagemErro(error.response.data);
      });
  };

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
                type="Password"
                id="inputSenha"
                name="senha"
                value={usuario.senha}
                className="form-control"
                onChange={(e) => setSenha(e.target.value)}
              ></input>
            </FormLabel>
            <FormLabel label="Repita Sua Senha *" htmlFor="inputSenhaRepetida">
              <input
                type="Password"
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
                <i className="pi pi-save"></i> Salvar
              </button>
              <a type="button" className="btn btn-danger " href="/login">
              <i className="pi pi-times"></i> Cancelar
              </a>
            </FormButtonGroup>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default CadastroUsuario;
