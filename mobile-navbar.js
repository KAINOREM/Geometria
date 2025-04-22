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
let resetar_cor = 1;

function resposta(elemento) {
    if(resposta_opcao != 0) {
        document.getElementById(resposta_opcao).style.background='#eadfb4';
    }
    resposta_opcao = elemento.id;
    document.getElementById("certa").style.background='#eadfb4';
    document.getElementById(resetar_cor).style.background='#eadfb4';
    document.getElementById(resposta_opcao).style.background='#afeeee';
}

function confirmar() {
    if(resposta_opcao == "certa") {
        document.getElementById("certa").style.background='#2CFF05';
    } else if(resposta_opcao != 0) {
        document.getElementById("certa").style.background='#2CFF05';
        document.getElementById(resposta_opcao).style.background='red';
        resetar_cor = resposta_opcao;
    }
    else {
        alert("Selecione uma resposta");
    }
}
