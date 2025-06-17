const exercicios = {
  ex: [
    /*Fáceis*/
    //Paralelogramo
    { titulo: "Quantos lados o paralelogramo tem?", imagem:"../Imagens/Prova/PF_paralelogramo1.png", resp: ["5", "6", "7", "4"] },

    { titulo: "Qual dessas imagens é um paralelogramo?", imagem:"../Imagens/Prova/PF_paralelogramo2.png", resp: ["Vermelho", "Rosa", "Roxo", "Azul Escuro"] },

    { titulo: "Qual parte da casa é um paralelogramo?", imagem:"../Imagens/Prova/PF_paralelogramo3.png", resp: ["Telhado", "janela", "Porta", "Parede"] },

    //Retângulo

    { titulo: "Quantos Lados esse retângulo possui?", imagem:"../Imagens/Prova/PF_retangulo1.png", resp: ["3", "6", "2", "4"] },

    { titulo: "Qual o valor do ângulo que falta?", imagem:"../Imagens/Prova/PF_retangulo2.png", resp: ["80°", "30°", "20°", "90°"] },

    { titulo: "Qual dessas imagens tem um retângulo?", imagem:"../Imagens/Prova/PF_retangulo3.png", resp: ["Caixa", "Escalímetro", "Bola de Golfe", "Tv"] },

    //Quadrado

    { titulo: "Quantos lados o quadrado possui?", imagem:"../Imagens/Prova/PF_quadrado1.png", resp: ["3", "6", "2", "4"] },

    { titulo: "Qual dessas imagens tem um quadrado?", imagem:"../Imagens/Prova/PF_quadrado2.png", resp: ["Bola de Golfe", "Escalímetro", "Banana", "Presente"] },

    { titulo: "Qual o valor do ângulo que falta?", imagem:"../Imagens/Prova/PF_quadrado3.png", resp: ["20°", "30°", "80°", "90°"] },

    //Triângulo

    { titulo: "Qual forma geométrica apresenta 3 lados?", imagem:"../Imagens/Prova/PF_triangulo1.png", resp: ["Quadrado", "Círculo", "Trapézio", "Triângulo"] },

    { titulo: "Qual valor falta para o resultado ser 180°?", imagem:"../Imagens/Prova/PF_triangulo2.png", resp: ["70°", "80°", "20°", "65°"] },

    { titulo: "Qual dessas imagens tem um triângulo?", imagem:"../Imagens/Prova/PF_triangulo3.png", resp: ["Esfera", "Quadrado", "Borracha", "Melancia"] },

    //Círculo

    { titulo: "Qual dessas imagens é círculo?", imagem:"../Imagens/Prova/PF_circulo1.png", resp: ["Diamante", "Paralelogramo", "Cristal Vermelho", "Bola"] },

    { titulo: "Qual desses objetos é um círculo?", imagem:"../Imagens/Prova/PF_circulo2.png", resp: ["Trapézio", "Coração", "Estrela", "Moeda"] },

    { titulo: "Qual desses é um círculo?", imagem:"../Imagens/Prova/PF_circulo3.png", resp: ["Maçã", "Livros", "Moldura", "Roda Gigante"] },

    //Trapézio

    { titulo: "Qual é o vértice do trapézio?", imagem:"../Imagens/Prova/PF_trapezio1.png", resp: ["1", "2", "Nenhuma das opções", "3"] },

    { titulo: "Qual dessas figuras é um trapézio?", imagem:"../Imagens/Prova/PF_trapezio2.png", resp: ["Relógio", "Presente", "Giz", "Desenho com rosto surpreso"] },

    { titulo: "Qual é o vértice do trapézio?", imagem:"../Imagens/Prova/PF_trapezio3.png", resp: ["3", "Nenhuma das opções", "1", "2"] },

    //Losango

    { titulo: "Qual é o vértice do Losango?", imagem:"../Imagens/Prova/PF_losango1.png", resp: ["Nenhuma das opções", "3", "1", "2"] },

    { titulo: "Qual é o face do Losango?", imagem:"../Imagens/Prova/PF_losango2.png", resp: ["2", "Nenhuma das opções", "3", "1"] },

    { titulo: "Qual é a aresta do Losango?", imagem:"../Imagens/Prova/PF_losango3.png", resp: ["2", "3", "Nenhuma das opções", "1"] },

    /*Médias*/
    //Paralelogramo
    { titulo: "Qual o perímetro do paralelogramo?", imagem:"../Imagens/Prova/PM_paralelogramo1.png", resp: ["18 CM", "12 CM", "14 CM", "24CM"], dica:"../Imagens/paralelogramo/dica_paralelogramo_m_perimetro.png" },

    { titulo: "Qual a área do paralelogramo?", imagem:"../Imagens/Prova/PM_paralelogramo2.png", resp: ["33 CM²", "137 CM²", "39 CM²", "35 CM²"], dica:"../Imagens/paralelogramo/dica_paralelogramo_m_area.png" },

    //Retângulo

    { titulo: "Qual o perímetro desse retângulo?", imagem:"../Imagens/Prova/PM_retangulo1.png", resp: ["20 CM²", "22 CM", "24 CM", "26 CM"], dica:"../Imagens/Retangulo/dica_retangulo_m_perimetro.png" },

    { titulo: "Qual a área desse retângulo?", imagem:"../Imagens/Prova/PM_retangulo2.png", resp: ["66 M²", "62 M²", "70 M²", "72 M²"], dica:"../Imagens/Retangulo/dica_retangulo_m_area.png" },

    //Quadrado

    { titulo: "Qual o perímetro desse quadrado?", imagem:"../Imagens/Prova/PM_quadrado1.png", resp: ["80 M", "50 M", "20 M", "40 M"], dica:"../Imagens/Quadrado/dica_quadrado_m_perimetro.png" },

    { titulo: "Qual a área desse quadrado?", imagem:"../Imagens/Prova/PM_quadrado2.png", resp: ["79 M²", "60 M²", "91 M²", "81 M²"], dica:"../Imagens/Quadrado/dica_quadrado_m_area.png" },

    //Triângulo

    { titulo: "Qual a área desse triângulo?", imagem:"../Imagens/Prova/PM_triangulo1.png", resp: ["40 CM²", "60 CM²", "90 CM²", "80 CM²"], dica:"../Imagens/Triangulo/dica_triangulo_m.png" },

    { titulo: "Qual a área desse triângulo?", imagem:"../Imagens/Prova/PM_triangulo2.png", resp: ["10 M²", "20 M²", "15 M²", "25 M²"], dica:"../Imagens/Triangulo/dica_triangulo_m.png" },

    //Círculo

    { titulo: "Qual dos três círculos tem o maior perímetro?", imagem:"../Imagens/Prova/PM_circulo1.png", resp: ["O círculo com raio de 3 cm tem o maior perímetro", "Os três tem o mesmo perímetro", "O círculo com raio de 2 cm tem o maior perímetro", "O círculo com raio de 5 cm tem o maior perímetro"], dica:"../Imagens/circulo/dica_circulo_m_perimetro" },

    { titulo: "Um círculo tem raio de 2 cm. Qual é a área do círculo?", imagem:"../Imagens/Prova/PM_circulo2.png", resp: ["A área do círculo é 13 cm²", "A área do círculo é 11 cm²", "A área do círculo é 15 cm²", "A área do círculo é 12 cm²"], dica:"../Imagens/circulo/dica_circulo_m_area" },

    //Trapézio

    { titulo: "Base maior: 18 cm, base menor: 10 cm, altura: 7 cm. Qual é a área do trapézio?", imagem:"../Imagens/Prova/PM_trapezio1.png", resp: ["97 cm²", "100 cm²", "108 cm²", "98 cm²"], dica:"../Imagens/trapezio/dica_trapezio_m_area.png" },

    { titulo: "Dado um trapézio com a base maior de 12 cm, a base menor de 8 cm, e a altura de 5 cm. Qual é a área?", imagem:"../Imagens/Prova/PM_trapezio2.png", resp: ["80 cm²", "30 cm²", "90 cm²", "50 cm²"], dica:"../Imagens/trapezio/dica_trapezio_m_area.png" },

    //Losango

    { titulo: "O losango tem lados de 8 cm. Qual é o perímetro desse losango?", imagem:"../Imagens/Prova/PM_losango1.png", resp: ["O perímetro é 40 cm.", "O perímetro é 38 cm.", "O perímetro é 36 cm.", "O perímetro é 32 cm."], dica:"../Imagens/losango/dica_losango_m_perimetro.png" },

    { titulo: "Se o losango tem diagonais que medem 4 cm e 6 cm, qual é a área?", imagem:"../Imagens/Prova/PM_losango2.png", resp: ["A área é 6 cm².", "A área é 16 cm².", "A área é 14 cm².", "A área é 12 cm²."], dica:"../Imagens/losango/dica_losango_m_area.png" },

    /*Difíceis*/
    { titulo: "Quantas faces tem o cubo?", imagem:"../Imagens/Prova/PD_quadrado1.png", resp: ["2", "5", "4", "6"]},

    { titulo: "Qual é a face do cilindro?", imagem:"../Imagens/Prova/PD_circulo1.png", resp: ["1", "2", "NENHUMA DAS OPÇÕES", "3"]}
  ]
}

const dicasConfig = {};

// Configurar eventos para todas as dicas
document.querySelectorAll('.dica').forEach(dica => {
    dica.addEventListener('click', function () {
        const dicaId = this.id;
        if (dicasConfig[dicaId]) {
            imagemDica.src = dicasConfig[dicaId];
            modalDica.style.display = "block";
        }
    });
});


const registro = [];

for (let ex = 1; ex <= 10; ex++) {
  if (ex <= 5) {
    let aleatorio = Math.floor(Math.random() * 21);
    let loop = true;

    while (loop == true) {
      if (registro.includes(aleatorio) == true) {
        aleatorio = Math.floor(Math.random() * 21);
      } else {
        registro.push(aleatorio);
        loop = false;
      }
    }

    document.getElementById("ex"+ ex).innerHTML = exercicios.ex[aleatorio].titulo;
    document.getElementById("imagem_ex"+ ex).src = exercicios.ex[aleatorio].imagem;

    for (let num = 1; num <= 4; num++) {
      document.getElementById(ex + "."+ num).innerHTML += exercicios.ex[aleatorio].resp[num - 1];
    }
  } else if (ex <= 8) {
    let aleatorio = Math.floor(Math.random() * 14) + 21;
    let loop = true;

    while (loop == true) {
      if (registro.includes(aleatorio) == true) {
        aleatorio = Math.floor(Math.random() * 14) + 21;
      } else {
        registro.push(aleatorio);
        loop = false;
      }
    }

    document.getElementById("ex"+ ex).innerHTML = exercicios.ex[aleatorio].titulo;
    document.getElementById("imagem_ex"+ ex).src = exercicios.ex[aleatorio].imagem;
    dicasConfig[`dica_ex${ex}`] = exercicios.ex[aleatorio].dica;

    for (let num = 1; num <= 4; num++) {
      document.getElementById(ex + "."+ num).innerHTML += exercicios.ex[aleatorio].resp[num - 1];
    }

  } else if (ex <= 10) {
    let aleatorio = Math.floor(Math.random() * 2) + 35;
    let loop = true;

    while (loop == true) {
      if (registro.includes(aleatorio) == true) {
        aleatorio = Math.floor(Math.random() * 2) + 35;
      } else {
        registro.push(aleatorio);
        loop = false;
      }
    }

    document.getElementById("ex"+ ex).innerHTML = exercicios.ex[aleatorio].titulo;
    document.getElementById("imagem_ex"+ ex).src = exercicios.ex[aleatorio].imagem;

    for (let num = 1; num <= 4; num++) {
      document.getElementById(ex + "."+ num).innerHTML += exercicios.ex[aleatorio].resp[num - 1];
    }
  }
}

for(let i = 6; i <=8; i ++) {
  console.log(dicasConfig["dica_ex" + i])
}

let resposta_opcao = 0;
let respostas = [];
let acertos = 0;

function resposta(elemento) {
  if ((resposta_opcao != 0)) {
    document.getElementById(resposta_opcao).style.background = '#eadfb4';
  }

  resposta_opcao = elemento.id;

  if (respostas.includes(resposta_opcao.slice(0, -1)) == true) {

    resposta_opcao = 0;

  } else {
    document.getElementById(resposta_opcao).style.background = '#afeeee';
  }
}

function confirmar() {
  document.getElementById(resposta_opcao).style.background = '#a1dbdb';
  let cortada = resposta_opcao.slice(0, -1);
  respostas.push(cortada);

  for (let num = 1; num <= 4; num++) {
    if (cortada + num != resposta_opcao) {
      document.getElementById(cortada + num).style.background = '#dbd1a7';
    }
  }

  if (resposta_opcao.includes(".4") == true) {
    acertos += 1;
    exercicios.ex[aleatorio].titulo
  }
  resposta_opcao = 0
}

const modalDica = document.getElementById("modalDica");
const modalResposta = document.getElementById("modalResposta");
const imagemDica = document.getElementById("imagemDica");
const tituloResposta = document.getElementById("tituloResposta");
const textoResposta = document.getElementById("textoResposta");
const closeButtons = document.querySelectorAll(".close");

closeButtons.forEach(button => {
  button.addEventListener('click', function () {
    this.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', function (event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === "Escape") {
    document.querySelectorAll('.modal').forEach(modal => {
      modal.style.display = 'none';
    });
  }
});

function resultado(elemento) {
  alert("Você acertou "+ acertos + "/"+ elemento.id)
}
