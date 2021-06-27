function verificar (){
    var anoNascimento = document.getElementById('txtano')
    var data = new Date()
    var anoAtual = data.getFullYear()
    var resultado = document.getElementById('resultado')
    if(anoNascimento.value.length == 0 || Number (anoNascimento.value) > anoAtual){
        alert('[ERRO] Preencha corretamente o ano de seu nascimento! ')
    }else{
        var sexo = document.getElementsByName('radsex')
        var idade = anoAtual - Number(anoNascimento.value)
        var genero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        if(sexo[0].checked){
            genero = 'Homem'
            if(idade > 0 && idade <3){
                //bebe
                imagem.setAttribute('src', 'bebeMenino.png')
            }else if (idade < 13){
                //crianca
                imagem.setAttribute('src', 'criancaMenino.png')
            }else if (idade < 35){
                //jovem
                imagem.setAttribute('src', 'jovemHomem.png')
            }else if (idade < 59){
                //adulto
                imagem.setAttribute('src', 'adultoHomem.png')
            }else {
                //idoso
                imagem.setAttribute('src', 'idosoHomem.png')
            }

        } else if (sexo[1].checked){
            genero = 'Mulher'
            if(idade > 0 && idade <3){
                imagem.setAttribute('src', 'bebeMenina.png')
            }else if (idade < 13){
                //crianca
                imagem.setAttribute('src', 'criancaMenina.png')
            }else if (idade < 35){
                //jovem
                imagem.setAttribute('src', 'jovemMulher.png')
            }else if (idade < 59){
                //adulto
                imagem.setAttribute('src', 'adultoMulher.png')
            }else {
                //idoso
                imagem.setAttribute('src', 'idosoMulher.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
        resultado.appendChild(imagem)
    }
}