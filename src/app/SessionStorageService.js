class SessionStorageService {
  static addItem(chave, valor) {
    sessionStorage.setItem(chave, JSON.stringify(valor));
  }

  static findItem(chave) {
    const usuarioLogadoString = sessionStorage.getItem(chave);
    return JSON.parse(usuarioLogadoString);
  }

  static removerItem(chave) {
    sessionStorage.removeItem(chave);
  }
}

export default SessionStorageService;
