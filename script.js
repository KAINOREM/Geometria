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
    "triangulo_f": "/Imagens/dica_geral.png",
    "retangulo_m_perimetro": "/imagens/dica_retangulo_m_perimetro.png",
    // Adicione outras dicas aqui
};

// Configurar eventos para todas as dicas
document.querySelectorAll('.dica').forEach(dica => {
    dica.addEventListener('click', function() {
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
        if (respostas.includes(resposta_opcao) == false) {
            respostas.push(resposta_opcao);
            acertos += 1;
        }
    }
    
    document.getElementById(resposta_opcao).style.background = '#afeeee';
}

// Sua função confirmar atualizada com modal
function confirmar() {
    if (resposta_certa == resposta_opcao) {
        document.getElementById(resposta_certa).style.background = '#2CFF05';
        tituloResposta.textContent = "Parabéns!";
        imagemResposta.src = "/Imagens/parabens_geral.png"
        textoResposta.textContent = "Você é incrivel!";
        modalResposta.style.display = "block";
        
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

// Fechar modais (mantido igual)
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }
});

function resultado(elemento) {
    alert ("Você acertou " + acertos + "/" + elemento.id)
}

