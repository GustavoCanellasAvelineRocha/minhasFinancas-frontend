import React, { useState } from "react";
import FormLabel from "../components/formLabel";
import Card from "../components/card";
import FormButtonGroup from "../components/formButtonGroup";

import axios from "axios";

function Login() {
  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });

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

  const entrar = () => {
    axios.post('http://localhost:8080/api/usuarios/autenticar',
    {
      email: usuario.email,
      senha: usuario.senha
    }).then(Response=>{
      console.log(Response)
    }).catch(error=>{
      console.log(error)
    })
  };

  return (
    <div className="row">
      <div className="col-md-6" style={{ position: "relative", left: "300px" }}>
        <div className="bs-docs-section">
          <Card title="Login">
            <div className="row">
              <div className="col-lg-12">
                <div className="bs-component">
                  <form>
                    <fieldset>
                      <FormLabel htmlFor="exampleInputEmail1" label="Email: *">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Digite o Email"
                          value={usuario.email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </FormLabel>
                      <FormLabel
                        htmlFor="exampleInputPassword1"
                        label="Senha: *"
                      >
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                          value={usuario.senha}
                          onChange={(e) => setSenha(e.target.value)}
                        />
                      </FormLabel>

                      <FormButtonGroup>
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={entrar}
                        >
                          Entrar
                        </button>
                        <a
                          role="button"
                          className="btn btn-danger"
                          href="/cadastro-usuarios"
                        >
                          Cadastrar
                        </a>
                      </FormButtonGroup>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Login;
