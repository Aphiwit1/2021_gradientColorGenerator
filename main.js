
var btnClick = document.getElementById('generateColor')
var firstColorText = document.querySelector('.firstColor')
var secondColorText = document.querySelector('.secondColor')
var firstColor = document.querySelector('.color1')
var secondColor = document.querySelector('.color2')
var copyText = document.querySelector('.copy-text')

btnClick.addEventListener('click', generateColor)


function generateColor() {
    var firstHexColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    var secondHexColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    firstColorText.innerHTML = firstHexColor
    secondColorText.innerHTML = secondHexColor

    firstColor.style.height = '20px'
    firstColor.style.width = '20px'
    secondColor.style.height = '20px'
    secondColor.style.width = '20px'
    firstColor.style.background = firstHexColor
    secondColor.style.background = secondHexColor

    copyText.innerHTML = `background: linear-gradient(to right, ${firstHexColor} , ${secondHexColor})`
    document.documentElement.style.background = `linear-gradient(to right, ${firstHexColor} , ${secondHexColor})`
}

