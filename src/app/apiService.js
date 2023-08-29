import axios from "axios";

const httpClient = axios.create({
    baseURL: 'minhasfinancas-backend-production.up.railway.app'
})

class ApiService{
    constructor(apiurl){
        this.apiurl = apiurl;
    }

    requestUrl(url){
        return `${this.apiurl}${url}`
    }

    get(url){
        return httpClient.get(this.requestUrl(url))
    }

    post(url,objeto){
        return httpClient.post(this.requestUrl(url),objeto);
    }

    put(url, objeto){
        return httpClient.put(this.requestUrl(url),objeto)
    }

    delete(url){
        return httpClient.delete(this.requestUrl(url))
    }
}

export default ApiService;