// Pegar elementos do DOM
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];
const correctCount = document.getElementById("correctCount");
const wrongCount = document.getElementById("wrongCount");
const totalCount = document.getElementById("totalCount");
const progressBar = document.getElementById("progressBar");
const feedbackMessage = document.getElementById("feedbackMessage");

// Quando clicar no botão
btn.addEventListener('click', function () {
    const totalQuestions = parseInt(this.getAttribute('data-total-questions'));
    const erros = totalQuestions - acertos;
    const porcentagem = Math.round((acertos / totalQuestions) * 100);

    // Atualizar os valores
    correctCount.textContent = acertos;
    wrongCount.textContent = erros;
    totalCount.textContent = totalQuestions;
    progressBar.style.width = porcentagem + '%';
    progressBar.textContent = porcentagem + '%';

    // Atualizar mensagem de feedback
    if (porcentagem >= 90) {
        feedbackMessage.textContent = "Excelente! Você arrasou! 🏆";
        feedbackMessage.style.backgroundColor = "#e8f5e9";
        feedbackMessage.style.color = "#2e7d32";
    } else if (porcentagem >= 70) {
        feedbackMessage.textContent = "Muito bom! Você mandou bem! 🥇";
        feedbackMessage.style.backgroundColor = "#e3f2fd";
        feedbackMessage.style.color = "#1565c0";
    } else if (porcentagem >= 50) {
        feedbackMessage.textContent = "Bom trabalho! Continue assim! 🥈";
        feedbackMessage.style.backgroundColor = "#fff8e1";
        feedbackMessage.style.color = "#ff8f00";
    } else {
        feedbackMessage.textContent = "Continue praticando! Você consegue! 🥉";
        feedbackMessage.style.backgroundColor = "#ffebee";
        feedbackMessage.style.color = "#c62828";
    }

    // Mostrar modal
    modal.style.display = "block";
});

// Fechar modal ao clicar no X
span.onclick = function () {
    modal.style.display = "none";
}

// Fechar modal ao clicar fora
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Fechar modal com ESC
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
});
