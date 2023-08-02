import React, { useState } from "react";

import Card from "../components/card";
import Formgroup from "../components/formgroup";

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
    <div className="container">
      <div className="row">
        <div
          className="col-md-6"
          style={{ position: "relative", left: "300px" }}
        >
          <Card title="Cadastro de usuario">
            <div className="col-lg-12">
              <div className="bs-component">
                <Formgroup label="Nome: *" htmlFor="inputNome">
                  <input
                    type="text"
                    id="inputNome"
                    name="nome"
                    value={usuario.nome}
                    className="form-control"
                    onChange={(e) => setNome(e.target.value)}  
                  ></input>
                </Formgroup>
                <Formgroup label="Email *" htmlFor="inputEmail">
                  <input
                    type="email"
                    id="inputEmail"
                    name="email"
                    value={usuario.email}
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </Formgroup>
                <Formgroup label="Senha *" htmlFor="inputSenha">
                  <input
                    type="senha"
                    id="inputSenha"
                    name="senha"
                    value={usuario.senha}
                    className="form-control"
                    onChange={(e) => setSenha(e.target.value)}
                  ></input>
                </Formgroup>
                <Formgroup
                  label="Repita Sua Senha *"
                  htmlFor="inputSenhaRepetida"
                >
                  <input
                    type="senhaRepetida"
                    id="inputSenhaRepetida"
                    name="senhaRepetida"
                    value={usuario.senhaRepetida}
                    className="form-control"
                    onChange={(e) => setSenhaRepetida(e.target.value)}
                  ></input>
                </Formgroup>
                <div>
                  <button
                    onClick={cadastrar}
                    type="button"
                    className="btn btn-success my-3"
                  >
                    Salvar
                  </button>
                  <button type="button" className="btn btn-danger mx-2 my-3">
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CadastroUsuario;
