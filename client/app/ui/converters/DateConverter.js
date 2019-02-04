class DateConverter{

    constructor(){
        throw new Error('Esta classe não pode ser instanciada')
    }


    static toString(data){

        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');
        

        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`  
        
        // data.getDate() 
        // +'/'+  (data.getMonth() + 1) 
        // +'/'+  data.getFullYear();
    }

    static toDate(texto){
        return new Date(...texto.split('-').map((item, index) => item - index % 2 ));
    }
}