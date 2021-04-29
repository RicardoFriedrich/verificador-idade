function verificar(){
var data = new Date() // Método que puxa a data
var ano = data.getFullYear() // Pega somente o ano
var fano = document.querySelector('#txtano') // Pega o input com o ano
var res = document.querySelector('#res') // Pega a Div onde iremos mostrar o resultado


if (fano.value.length <=3 || Number(fano.value > ano)) { //valida se o ano é válido
    
    alert('[ERROR] Ano inválido, digite novamente!')

} else { // Começa a checagem

    var idade = ano - fano.value //calcula a idade
    var fsex = document.getElementsByName('radsex') //pega a radiobox com a seleção de sexo
    var genero = '' // variável para receber o genero dinamicamente
    var artigoGen = '' // modifica o artigo dinamicamente
    var fotoGen = '' //modifica a imagem de acordo com o genero
    var foto = document.createElement('img') // Cria um elemento de <img>
    foto.setAttribute('id','foto') // define um ID para o elemento
    var body = document.querySelector('body')


    if (fsex[0].checked) { // verifica se é homem
    
        genero = 'homem' 
        fotoGen = 'm' 
        body.style.background = "#0a80af"
            
        if (idade >= 0 && idade < 12) { //verifica idade
            //criança
            foto.setAttribute('src', `foto-bebe-${fotoGen}.png`)

        } else if (idade < 21) {
            //adolescente
           foto.setAttribute('src', `foto-jovem-${fotoGen}.png`)


        } else if (idade < 50) {
            //adulto
            foto.setAttribute('src', `foto-adulto-${fotoGen}.png`)


        } else {
            //idoso
            foto.setAttribute('src', `foto-idoso-${fotoGen}.png`)

        }



    } else if (fsex[1].checked) { //verifica se é mulher

        genero = 'mulher'
        artigoGen ='a'
        fotoGen = 'f'
        body.style.background = "pink"
        


        if (idade >= 0 && idade < 12) { //verifica idade
            //criança
            foto.setAttribute('src', `foto-bebe-${fotoGen}.png`)

        } else if (idade < 21) {
            //adolescente
           foto.setAttribute('src', `foto-jovem-${fotoGen}.png`)



        } else if (idade < 50) {
            //adulto
            foto.setAttribute('src', `foto-adulto-${fotoGen}.png`)



        } else {
            //idoso
            foto.setAttribute('src', `foto-idoso-${fotoGen}.png`)



        }


    }


    res.style.textAlign = 'center' // alinha o texto da div ao centro
    res.innerHTML = `Detectamos um${artigoGen} ${genero} de ${idade} anos` // mostra o resultado
    res.appendChild(foto) //torna o elemento "foto" que é uma <img> filho da div "res"


}





}