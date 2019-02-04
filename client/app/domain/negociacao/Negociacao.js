class Negociacao {

    constructor(_data,_quantidade,_valor){

        Object.assign(this, {_quantidade : quantidade,_valor : valor
            })
        this._data = new Date(_data.getTime());

        Object.freeze(this);
    }

    obtemVolume(){
        return this._quantidade * this.valor;
    }

    get data(){
        return this._data;
    }

    get quanitade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
}