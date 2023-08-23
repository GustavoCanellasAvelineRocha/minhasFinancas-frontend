import LocalStorageService from "./localStorageService"

export const USUARIO_LOGADO= "usuario_logado"

class AuthService{

    static usuarioEstaAutenticado(){
        const usuario = LocalStorageService.findItem(USUARIO_LOGADO)
        return usuario && usuario.id
    }

    static removerUsuarioAutenticado(){
        LocalStorageService.removerItem(USUARIO_LOGADO)
    }

    static logar(usuario){
        LocalStorageService.addItem(USUARIO_LOGADO,usuario)
    }

    static findUsuarioAutenticado(){
        return LocalStorageService.findItem(USUARIO_LOGADO)
    }
}

export default AuthService