function tabuada(){
    let numero = document.getElementById('txtnum')
    let resultado = document.getElementById('selTab')

    if(numero.value.length == 0){
        alert('ERRO: Digite um número!')
    }else{
        let n = Number(numero.value)
        
        resultado.innerHTML= ''

        for(let cont = 0; cont <= 11; cont++){
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${cont*n}`
            resultado.appendChild(item)
        }
    }
    
}