class Negociacoes {

    constructor(armadilha){
        this._negociacoes = [];
        Object.freeze(this);
    }

    adciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    toArray(){
        return [].concat(this._negociacoes);
    }

    get volumeTotal(){
        return this._negociacoes
            .reduce((total, negociacao) => 
                total + negociacao.volume ,0);
    }
    esvazia(){
        this._negociacoes.length = 0;
    }
}