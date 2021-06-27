var agora = new Date()
var hora = agora.getHours().toLocaleString().replace()
var minutos = agora.getMinutes().toLocaleString().replace()

// if(hora >= 1 && hora < 12){
//     console.log(`São ${hora} horas da manhã. Tenha um Bom Dia!!!`)     
// }else if(hora == 12){
//     console.log(`É meio dia. Tenha um Bom Dia!!!`)
// }else if( hora >12 && hora < 18){
//     console.log(`São ${hora} horas da tarde. Tenha uma boa tarde!!! `)
// }else{
//     console.log(`São ${hora} horas da noite. Tenha uma boa noite!!! `)
// }

if(hora >= 1 && hora < 12){
    console.log(`São ${hora} horas e ${minutos} minutos. Tenha um Bom Dia!!!`)     
}else if(hora == 12){
    console.log(`É meio dia e ${minutos} minutos. Tenha um Bom Dia!!!`)
}else if( hora >12 && hora < 18){
    console.log(`São ${hora} horas e ${minutos} minutos. Tenha uma boa tarde!!! `)
}else{
    console.log(`São ${hora} horas e ${minutos} minutos. Tenha uma boa noite!!! `)
}