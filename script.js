let resposta_opcao = 0;
let resposta_certa = 90;
let respostas = [];
let acertos = 0;


const modalDica = document.getElementById("modalDica");
const modalResposta = document.getElementById("modalResposta");
const imagemDica = document.getElementById("imagemDica");
const tituloResposta = document.getElementById("tituloResposta");
const textoResposta = document.getElementById("textoResposta");
const closeButtons = document.querySelectorAll(".close");
const imagemResposta = document.getElementById("imagemResposta");

// Configuração das dicas (imagem por ID)
const dicasConfig = {
    "triangulo_m": "/Imagens/Triangulo/dica_triangulo_m.png",
    "retangulo_m_perimetro": "/imagens/Retangulo/dica_retangulo_m_perimetro.png",
    "retangulo_m_area": "/imagens/Retangulo/dica_retangulo_m_area.png",
    "quadrado_m_perimetro": "/imagens/Quadrado/dica_quadrado_m_perimetro.png",
    "quadrado_m_area": "/imagens/Quadrado/dica_quadrado_m_area.png",
    "losango_m_perimetro": "/imagens/losango/dica_losango_m_perimetro.png",
    "losango_m_area": "/imagens/losango/dica_losango_m_area.png",
    "paralelogramo_m_perimetro": "/imagens/paralelogramo/dica_paralelogramo_m_perimetro.png",
    "paralelogramo_m_area": "/imagens/paralelogramo/dica_paralelogramo_m_area.png",
    // Adicione outras dicas aqui
};

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

// Sua função resposta atualizada
function resposta(elemento) {
    if (resposta_opcao != 0) {
        document.getElementById(resposta_opcao).style.background = '#eadfb4';
    }
    if (resposta_certa != 90) {
        document.getElementById(resposta_certa).style.background = '#eadfb4';
    }

    resposta_opcao = elemento.id;

    // Verifica se é a resposta correta (.4 no ID)
    if (resposta_opcao.includes(".4") == true) {
        resposta_certa = resposta_opcao;
    }

    document.getElementById(resposta_opcao).style.background = '#afeeee';
}

let sound1 = document.getElementById('audio1');
let sound2 = document.getElementById('audio2');
let sound3 = document.getElementById('audio3');
let sound4 = document.getElementById('audio4');

// Sua função confirmar atualizada com modal
function confirmar() {
    if (resposta_certa == resposta_opcao) {
        document.getElementById(resposta_certa).style.background = '#2CFF05';
        tituloResposta.textContent = "Parabéns!";
        imagemResposta.src = "/Imagens/parabens_geral.png"
        textoResposta.textContent = "Você é incrivel!";
        modalResposta.style.display = "block";

        if (respostas.includes(resposta_opcao) == false) {
            respostas.push(resposta_opcao);
            acertos += 1;
        }

        let aleatorio = Math.floor((Math.random() * 100) + 1);

        if ((aleatorio >= 1) && (aleatorio <= 33)) {
            sound1.play()
        } else if ((aleatorio > 33) && (aleatorio <= 66)) {
            sound2.play()
        } else if ((aleatorio > 66) && (aleatorio <= 99)) {
            sound3.play()
        } else if (aleatorio == 100) {
            tituloResposta.textContent = "";
            imagemResposta.src = "/Efeitos Sonoros/Especial imagem.jpg"
            textoResposta.textContent = "";
            modalResposta.style.display = "block";
            sound4.play()
        }



    } else if (resposta_opcao != 0) {
        document.getElementById(resposta_opcao).style.background = 'red';
        tituloResposta.textContent = "Ainda não chegamos na resposta certa!";
        imagemResposta.src = "/Imagens/estaquasela_geral.png"
        textoResposta.textContent = "Tente novamente, você está quase lá!";
        modalResposta.style.display = "block";

    } else {
        tituloResposta.textContent = "Atenção";
        textoResposta.textContent = "Por favor, selecione uma resposta.";
        modalResposta.style.display = "block";
    }
}

// Fechar modais
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
    alert("Você acertou " + acertos + "/" + elemento.id)
}

