class Negociacao {

    constructor(_data,_quantidade,_valor){

        Object.assign(this, {_quantidade : quantidade,_valor : valor
            })
        this._data = new Date(data.getTime());

        Object.freeze(this);
    }

    obtemVolume(){
        return this._quantidade * this.valor;
    }

    get data(){
        return this._data;
    }

    setData(){
        return new Date (this._data.getTime());
    }

    get quanitade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
}