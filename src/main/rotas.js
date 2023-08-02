import React from "react";

import {Route,HashRouter,Routes} from "react-router-dom"

import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";

function Rotas(){
    return(
        <HashRouter>
            <Routes>
                <Route path="/login" Component={Login}></Route>
                <Route path="/cadastro-usuarios" Component={CadastroUsuario}></Route>
            </Routes>
        </HashRouter>
    )
}

export default Rotas