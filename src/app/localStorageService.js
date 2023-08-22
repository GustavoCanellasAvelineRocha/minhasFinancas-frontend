class LocalStorageService{
    static addItem(chave,valor){
        localStorage.setItem(chave,JSON.stringify(valor))
    }

    static findItem(chave){
        const usuarioLogadoString = localStorage.getItem(chave)
        return JSON.parse(usuarioLogadoString)
    }

    static removerItem(chave){
        localStorage.removeItem(chave)
    }
}

export default LocalStorageService