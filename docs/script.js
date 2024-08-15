const accord = document.querySelectorAll(".accord")

const checkSigns = (question, answer) => {
    if (answer.classList.contains("active")) {
        question.children[1].src = "../images/icon-minus.svg";
    } else {
        question.children[1].src = "../images/icon-plus.svg";
    }

}

accord.forEach((e) => {
    const question = e.querySelector(".question");
    const answer = e.querySelector(".answer");

    checkSigns(question, answer);

    question.children[1].addEventListener("click", () => {
        answer.classList.toggle("active");
        checkSigns(question, answer)

    });

})