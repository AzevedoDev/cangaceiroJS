var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
]
console.log(campos);

// precisamos de tbody, pois ele receberá a tr que vamos construir
var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', (event) => {
    
    event.preventDefault();
    
    var tr = document.createElement('tr');
    
    campos.forEach((campo)=>{
        //cria uma td sem informações
        var td = document.createElement('td');
        //atribui o valor do campo ao td
        td.textContent = campo.value;
        //adiciona a td na tr
        tr.appendChild(td);
    });
    //nova td que armazenará o volume da negociação
    var tdVolume = document.createElement('td');
    //as posições 1 e 2 do array armazenam os campos de quanditade e valor, respectivamente.
    tdVolume.textContent = campos[1].value * campos[2].value;
    //adciona a td que faltava à tr
    tr.appendChild(tdVolume);
    //adciona a tr
    tbody.appendChild(tr);
});