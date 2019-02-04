 class NegociacaoController{


constructor(){
    let $ = document.querySelector.bind(document);
    
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    
}


    adciona(event){
        event.preventDefault();

        let negociacao = new Negociacao(
            DateConverter.toDate(this._inputData.value),
            parseInt(this._inputQuantidade),
            parseFloat(this._inputValor)
        )
        
        let diaMesAno = DateConverter.toString(negociacao.data);
       
        console.log(diaMesAno);
        
    }
}