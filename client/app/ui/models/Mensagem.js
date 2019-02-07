class Mensagem{
    constructor(texto = ''){
        
        this._texto = texto;
    }

    get texto(){
        this._texto;
    }

    set texto(texto){
        this._texto = texto;
    }
}