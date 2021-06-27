function carregar(){
    var mensagem = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date
    var hora = data.getHours()
    var minutos = data.getMinutes()

    if(minutos <=9){
        minutos = `0`+ `${minutos}`
    }
    msg.innerHTML = `Agora são: ${hora}h : ${minutos}m `

    if(hora >0 && hora < 12){
        imagem.src = 'manha.png'
    }else if(hora >12 && hora <18){
        imagem.src = 'tarde.png'
    }else{
        imagem.src = 'noite.png'
    }
    
    }
