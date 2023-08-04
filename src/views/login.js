import React, { useState } from "react";
import FormLabel from "../components/formLabel";
import Card from "../components/card";
import FormButtonGroup from "../components/formButtonGroup";
import { useNavigate } from "react-router-dom";

import UsuarioService from "../app/usuarioService";

function Login() {
  const usuarioService = new UsuarioService();
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });

  const [msgErro, setMsgErro] = useState(null);

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

  const entrar = async () => {
    usuarioService
      .autenticar({
        email: usuario.email,
        senha: usuario.senha,
      })
      .then((response) => {
        localStorage.setItem("usuario_logado", JSON.stringify(response.data));
        localStorage.getItem("usuario_logado");
        navigate("/home");
      })
      .catch((error) => {
        setMsgErro(error.response.data);
      });
  };

  const irParaCadastro = () => {
    navigate("/cadastro-usuarios");
  };

  return (
    <div className="row">
      <div className="col-md-6 loginResponsivo" >
        <div className="bs-docs-section">
          <Card title="Login">
            <div className="row">
              <span>{msgErro}</span>
            </div>
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
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={irParaCadastro}
                        >
                          Cadastrar
                        </button>
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
