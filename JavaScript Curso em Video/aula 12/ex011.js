var idade = 67
console.log(`Você tem ${idade} anos.`)
if(idade < 16){
    console.log('Ainda não vota.')
}else{
    if(idade >= 16 && idade < 18 || idade >= 67) {
        console.log('O voto opcional.')
    }else{
        console.log('Maior de idade, o voto é obrigatório.')
    }
}
