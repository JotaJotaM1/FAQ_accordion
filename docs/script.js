const accord = document.querySelectorAll(".accord");

const checkSigns = (question, answer) => {
    if (answer.classList.contains("active")) {
        question.children[1].src = "./images/icon-minus.svg";
    } else {
        question.children[1].src = "./images/icon-plus.svg";
    }
};

accord.forEach((e) => {
    const question = e.querySelector(".question");
    const answer = e.querySelector(".answer");
    const questionText = question.querySelector("p");

    // Inicializa el ícono según el estado actual de la respuesta
    checkSigns(question, answer);

    // Maneja el clic en el ícono
    question.children[1].addEventListener("click", () => {
        answer.classList.toggle("active");
        checkSigns(question, answer);
    });

    // Maneja el clic en el <p> que contiene la pregunta
    questionText.addEventListener("click", () => {
        answer.classList.toggle("active");
        checkSigns(question, answer);
    });
});