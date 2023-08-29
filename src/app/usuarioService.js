import ErroValidacao from "../exception/erroValidacao";
import ApiService from "./apiService";

class UsuarioService extends ApiService {
  constructor() {
    super("/api/usuarios");
  }

  autenticar(credenciais) {
    return this.post("/autenticar", credenciais);
  }

  obterSaldoPorUsuario(id) {
    return this.get(`/${id}/saldo`);
  }

  salvar(usuario) {
    return this.post("", usuario);
  }

  salvarConvidado() {
    return this.post("/Convidado");
  }


  validar(usuario) {
    const msgs = [];

    if (!usuario.nome) {
      msgs.push("O campo nome é obrigatório");
    }

    if (!usuario.email) {
      msgs.push("O campo email é obrigatório");
    } else if (!usuario.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
      msgs.push("Informe um email válido");
    }

    if (!usuario.senha) {
      msgs.push("O campo senha é obrigatório");
    } else if (!usuario.senhaRepetida) {
      msgs.push("Por favor, repita sua senha.");
    } else if (usuario.senha !== usuario.senhaRepetida) {
      msgs.push("As senhas não são iguais, por favor, tente novamente.");
    }

    if(msgs.length>0){
        throw new ErroValidacao(msgs)
    }
  }
}

export default UsuarioService;
