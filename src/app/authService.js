import SessionStorageService from "./SessionStorageService";

export const USUARIO_LOGADO = "usuario_logado";

class AuthService {
  static usuarioEstaAutenticado() {
    const usuario = SessionStorageService.findItem(USUARIO_LOGADO);
    return usuario && usuario.id;
  }

  static removerUsuarioAutenticado() {
    SessionStorageService.removerItem(USUARIO_LOGADO);
  }

  static logar(usuario) {
    SessionStorageService.addItem(USUARIO_LOGADO, usuario);
  }

  static findUsuarioAutenticado() {
    return SessionStorageService.findItem(USUARIO_LOGADO);
  }
}

export default AuthService;
