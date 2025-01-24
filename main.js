const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp')
const rebuild = document.getElementById('rebuildLamp')

turnOn.addEventListener('click', ligarLampada)
turnOff.addEventListener('click', desligarLampada)
lamp.addEventListener('dblclick', destroiLampada)
rebuild.addEventListener('click', reconstroiLampada)

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function ligarLampada() {
    if (!isLampBroken()) {
        lamp.src = './imgs/ligada.jpg'
    }
}
function desligarLampada() {
    if (!isLampBroken()) {
        lamp.src = './imgs/desligada.jpg'
    }
}
function destroiLampada() {
    lamp.src = './imgs/quebrada.jpg'
}

function reconstroiLampada() {
    if (isLampBroken()) {
        lamp.src = './imgs/desligada.jpg'

    }
}