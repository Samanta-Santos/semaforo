const semaforo = document.querySelector("#semaforo_img");
const botao = document.querySelector("#botao");
let sinal = 0;

let carro = document.querySelector(".carro_img");

function mudarSinal() {
  if (sinal == 0) {
    semaforo.src = "./images/vermelho.png";
    setTimeout(() => {
      sinal = 1;
    }, 1000);
  } else if (sinal == 1) {
    semaforo.src = "./images/amarelo.png";
    setTimeout(() => {
      sinal = 2;
    }, 1000);
  } else if (sinal == 2) {
    semaforo.src = "./images/verde.png";
    setTimeout(() => {
      sinal = 3;
      carroAtravessa();
    }, 1000);
  } else if (sinal == 3) {
    setTimeout(() => {
      semaforo.src = "./images/vermelho.png";
      sinal = 1;
      carroEspera();
    }, 1000);
  }
}

function carroAtravessa() {
  carro.classList.remove("carro_img");
  carro.classList.add("carro_atravessa");
}

function carroEspera() {
  carro.classList.remove("carro_atravessa");
  carro.classList.add("carro_img");
}

function automatico() {
  setInterval(mudarSinal, 1000);
}

botao.addEventListener("click", automatico);
