import React, { useState } from "react";

import Card from "../components/card";
import FormLabel from "../components/formLabel";
import FormButtonGroup from "../components/formButtonGroup";
import { mensagemSucesso,mensagemErro} from "../components/toast";
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

  const validar = () => {
    const msgs = []

    if(!usuario.nome){
      msgs.push("O campo nome é obrigatório")
    }

    if(!usuario.email){
      msgs.push("O campo email é obrigatório")
    }else if(usuario.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)){
      msgs.push('Informe um email válido')
    }

    if(!usuario.senha){
      msgs.push("O campo senha é obrigatório")
    }else if(!usuario.senhaRepetida){
      msgs.push("Por favor, repita sua senha.")
    }else if(usuario.senha !== usuario.senhaRepetida){
      msgs.push("As senhas não são iguais, por favor, tente novamente.")
    }

    return msgs
  }

  const cadastrar = () => {
    const msgs = validar()

    if(msgs.length>0){
      msgs.forEach(mensagemErro)
      return false
    }

    const usuarioService = new UsuarioService();
    usuarioService
      .salvar(usuario)
      .then(() => {
        mensagemSucesso('Usuario cadastrado com sucesso! faca o login para continuar');
        navigate("/login");
      })
      .catch((error) => {
        mensagemErro(error.response.data)
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
