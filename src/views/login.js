import React, { useState } from "react";
import Card from "../components/card";
import Formgroup from "../components/formgroup";

function Login() {

  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");

  const entrar = () =>{
      console.log('email',email)
      console.log('senha',senha)
  }

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-md-6"
          style={{ position: "relative", left: "300px" }}
        >
          <div className="bs-docs-section"> 
            <Card title="Login">
              <div className="row">
                <div className="col-lg-12">
                  <div className="bs-component">
                    <fieldset>
                      <Formgroup label="Email: *" htmlFor="exampleInputEmail1">
                        <input
                          type="email"
                          value={email}
                          onChange={e=> setEmail(e.target.value)}
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Digite seu email"
                        ></input>
                      </Formgroup>
                      <Formgroup label="Senha: *" htmlFor="">
                        <input
                          type="password"
                          value={senha}
                          onChange={e=> setSenha(e.target.value)}
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder="Digite sua senha"
                        ></input>
                      </Formgroup>
                      <button onClick={entrar} className="btn btn-success">
                        Entrar
                      </button>
                      <button className="btn btn-danger ">
                        Cadastrar
                      </button>
                    </fieldset>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
