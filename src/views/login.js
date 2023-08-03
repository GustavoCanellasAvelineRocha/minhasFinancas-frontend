import React, { useState } from "react";
import FormLabel from "../components/formLabel";
import Card from "../components/card";
import FormButtonGroup from "../components/formButtonGroup";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const entrar = () => {
    console.log("email", email);
    console.log("senha", senha);
  };

  const cadastrar = () => {
    
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
                          value={email}
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
                          value={senha}
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
                          onClick={cadastrar}
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

export default Login ;
