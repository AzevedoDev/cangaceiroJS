class NegociacaoController{


constructor(){
    let $ = document.querySelector.bind(document);
    
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    
}


    adciona(event){
        event.preventDefault();

        let data = new Date(...this._inputData.value.split('-'));

        let negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade),
            parseFloat(this._inputValor)
        )


        console.log(negociacao);
        
    }
}