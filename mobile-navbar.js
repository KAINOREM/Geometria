class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList); // Should be a selector passed as argument
        this.navLinks = document.querySelectorAll(navLinks); // Should be a selector passed as argument
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);

mobileNavbar.init();

let resposta_opcao = 0;
let resposta_certa = 90;

function resposta(elemento) {
    if (resposta_opcao != 0) {
        document.getElementById(resposta_opcao).style.background = '#eadfb4';
    }
    if (resposta_certa != 90) {
        document.getElementById(resposta_certa).style.background = '#eadfb4';
    }
    resposta_opcao = elemento.id;
    if (resposta_opcao.includes(".4") == true) {
        resposta_certa = resposta_opcao;
    }
    document.getElementById(resposta_opcao).style.background = '#afeeee';
}

function confirmar() {
    if (resposta_certa == resposta_opcao) {
        document.getElementById(resposta_certa).style.background = '#2CFF05';

    } else if (resposta_opcao != 0) {
        document.getElementById(resposta_opcao).style.background = 'red';
        alert("Você errou, mas está quase lá! Continue tentando.");

    }
    else {
        alert("Selecione uma resposta.");
    }
}

let dica_t = 5;

function dica_triangulo(elemento) {
    dica_t -= 1;
    if (dica_t >= 0) {
        switch (elemento.id) {
            case "triangulo_f":
                alert("Tente somar os lados que você já sabe o valor e veja quanto falta para 180.");
                alert("Você tem " + dica_t + " dicas restantes")
                break

            case "triangulo_m":
                alert("A fórmula da área do triângulo é Área = (Base x Altura) dividido por 2");
                alert("Você tem " + dica_t + " dicas restantes")
                break
        }
    } else {
        alert("Você não tem mais dicas disponíveis");
    }
}