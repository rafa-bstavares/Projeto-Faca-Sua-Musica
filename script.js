function tocar(sound){
    let audio = document.querySelector(`#aud_${sound}`)
    let tecla = document.querySelector(`#tecla-${sound}`)
    if(audio != null){
        audio.currentTime = 0
        audio.play()
        tecla.classList.add("muda-cor")
        setTimeout(function(){tecla.classList.remove("muda-cor")}, 200)
    }
}



let sequenciaArray = []
document.querySelector("body").addEventListener("keydown", function(e){
    if(e.key != "." && e.key != ","){
        tocar(e.key)
    }
})



function tocarGravado(){
    let sequencia = document.querySelector(".sequencia input").value
    let timer = document.querySelector(".timer input").value
    sequenciaArray = sequencia.split("")
    let wait = 0
    for(let i in sequenciaArray){
        setTimeout(function(){
            tocar(`${sequenciaArray[i]}`)
        }, wait)
        wait += timer*1000
    }
}



document.querySelector(".botao").addEventListener("click", function(){
    const regEx = / /g
    let sequencia = document.querySelector(".sequencia input").value
    if(sequencia.trim().replace(regEx, "") != ""){
        let timer = document.querySelector(".timer input").value
        if(timer.toString().indexOf(",") > -1){
            timer = timer.toString().replace(",", ".")
            tocarGravado()
        }else{
            tocarGravado()
        }
    }else{
        alert("para executar esse botão você precisa escrever uma sequencia na primeira caixa de texto")
    }
})



