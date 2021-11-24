import alertaLuminosidade from './Luminosidade/alertaLuminosidade.png'
import normalLuminosidade from './Luminosidade/normalLuminosidade.png'
import riscoLuminosidade from './Luminosidade/riscoLuminosidade.png'

import pontoZero from './PontoZero/pontoZero2.png'

import alertaRuido from './Ruido/alertaRuido.png' 
import normalRuido from './Ruido/normalRuido.png'
import riscoRuido from './Ruido/riscoRuido.png' 

import alertatemperatura from './Temperatura/alertaTemperatura.png'
import normaltemperatura from './Temperatura/normalTemperatura.png'
import riscotemperatura from './Temperatura/riscoTemperatura.png'

import alertaVibracao from './Vibracao/alertaVibracao.png'
import normalVibracao from './Vibracao/normalVibracao.png'
import riscoVibracao from './Vibracao/riscoVibracao.png'

import usuarioOnline from './Usuario/usuarioOnline.png'

var ruidoImages = {
    alertaRuido,
    normalRuido,
    riscoRuido
}

var temperaturaImages = {
    alertatemperatura,
    normaltemperatura,
    riscotemperatura
}

var luminosidadeImages = {
    alertaLuminosidade,
    normalLuminosidade,
    riscoLuminosidade
}

var vibracaoImages = {
    alertaVibracao,
    normalVibracao,
    riscoVibracao
}

var icons = {
    usuarioOnline,
    pontoZero
}

var imagesWrapper = {
    temperaturaImages,
    vibracaoImages,
    ruidoImages,
    luminosidadeImages,
    icons
}

export {imagesWrapper}