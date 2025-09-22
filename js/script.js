
//Aqui criamos váriaveis que puxam elementos do HTML pelo seus ID's  e suas classes

let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container') //Aqui pela classe
let items = container.querySelectorAll('.list .item')
let indicators = document.querySelector('.indicators')
let dots = indicators.querySelectorAll('ul li') //Aqui pelo simples "ul & li" do HTML

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1 //A última posição para ficar trocando o carrosel é feito dessa forma para deixá-lo infinito, que é a quantidade de itens -1, porque no JS, uma array sempre começa do 0 e vai seguindo adiante

function setSlider(){
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    let dotsOld = indicators.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicators.querySelector('.number').innerHTML = '0' + (active + 1)
}

nextButton.onclick = () => {
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    items[active].classList.add('active')
}

prevButton.onclick = () => {
    active = active - 1 < firstPosition ? lastPosition : active - 1 //Se o active for maior q o lastPosition, ele vai voltar para 0, se não ele vai aumentar em 1 e continuar passando.
    setSlider()
    items[active].classList.add('active') //E aqui, ele pega a váriavel items e adiciona a classe 'active' nos proximos itens, fazendo eles aparecerem.
} 

