function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anon = document.getElementById("ano2")

    if(anon.value.length == 0 || Number(anon.value) >= ano || anon.value <= 1905){
        alert("ERRO verificar os dados corretos.")
}
    else{
        var idade = ano - Number(anon.value)
        var res = document.getElementById("res")
        var sexg = document.getElementsByName("sexg")
        var gênero = ""
        var img = document.createElement("img")
        img.setAttribute("id","foto")

        if(sexg[0].checked){
            gênero = "Homem"
            if(idade > 0 && idade <= 8){
                img.setAttribute("src","img/foto-crianca8-masculino.png")
            }else if(idade <= 16){
                img.setAttribute("src","img/foto-adolecente16-masculino.png")
            }else if(idade <= 23){
                img.setAttribute("src","img/foto-adolecente23-masculino.png")
            }else if(idade <= 35){
                img.setAttribute("src","img/foto-adulto35-masculino.png")
            }else if(idade <= 50){
                img.setAttribute("src","img/foto-adulto50-masculino.png")
            }else if(idade <= 65){
                img.setAttribute("src","img/foto-idoso65-masculino.png")
            }else{
                img.setAttribute("src","img/foto-idoso-masculino.png")
            }
        }else if(sexg[1].checked){
            gênero = "Mulher"
            if(idade > 0 && idade <= 8){
                img.setAttribute("src","img/foto-crianca8-feminina.png")
            }else if(idade <= 16){
                img.setAttribute("src","img/.png")
            }else if(idade <= 23){
                img.setAttribute("src","img/foto-adolecente-feminina.png")
            }else if(idade <= 35){
                img.setAttribute("src","img/foto-adulta35-feminina.png")
            }else if(idade <= 50){
                img.setAttribute("src","img/.png")
            }else if(idade <= 65){
                
            }else{
                img.setAttribute("src","img/foto-idosa-feminina.png")
            }
        }
        res.style.textAlign ="center"
        res.innerHTML= `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)

    }
}