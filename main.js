function comecarCont(){
    let inicio = document.getElementById('txtI');
    let fim = document.getElementById('txtF');
    let passo = document.getElementById('txtP');
    let res = document.getElementById('res')
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Por favor insira dados válidos')
        res.innerHTML = 'Impossível contar!'
    } else{
        res.innerHTML = 'Contando...'
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if(p <=0){
            alert('[ERRO] Passo inválido considerando passo 1')
            p = 1
        }
        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `\u{1F449} ${c} `;}
        } else {
            for (let c = i; c >= f; c-=p){
                res.innerHTML += `\u{1F449} ${c} `;
            }
        }

        res.innerHTML += `\u{1F3C1}`
    }
}