import React, { useContext, useState } from "react";
import FormLabel from "../components/formLabel";
import Card from "../components/card";
import FormButtonGroup from "../components/formButtonGroup";
import { useNavigate } from "react-router-dom";

import UsuarioService from "../app/usuarioService";
import { mensagemErro } from "../components/toast";
import { AuthContext } from "../main/Provedor";

function Login() {
  const usuarioService = new UsuarioService();
  const { fazerLogin } = useContext(AuthContext);
  const navigate = useNavigate();

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
    usuarioService
      .autenticar({
        email: usuario.email,
        senha: usuario.senha,
      })
      .then((response) => {
        fazerLogin(response.data);
        navigate("/home");
      })
      .catch((error) => {
        mensagemErro(error.response.data);
      });
  };

  const irParaCadastro = () => {
    navigate("/cadastro-usuarios");
  };

  return (
    <div className="row">
      <div className="col-md-6 loginResponsivo">
        <div className="bs-docs-section">
          <Card title="Login">
            <div className="row">
              <div className="col-lg-12">
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
                    <FormLabel htmlFor="exampleInputPassword1" label="Senha: *">
                      <input
                        type="Password"
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
                        <i className="pi pi-sign-in"></i> Entrar
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={irParaCadastro}
                      >
                        <i className="pi pi-plus"></i> Cadastrar
                      </button>
                    </FormButtonGroup>
                  </fieldset>
                </form>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Login;
