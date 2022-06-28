const semaforo = document.querySelector("#semaforo_img");
const botao = document.querySelector('#botao')

const cores = ["vermelho", "amarelo", "verde"];


const ligar = {
    'vermelho': () => semaforo.scr = './images/vermelho.png',
    'amarelo': () => semaforo.scr = './images/amarelo.png',
    "verde": () => semaforo.scr = './images/verde.png'
  }




botao.addEventListener('click', mudarSinal)