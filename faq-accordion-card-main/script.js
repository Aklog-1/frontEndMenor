
const arrowImgs = document.querySelectorAll(".icon-arrow-down");
const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

arrowImgs.forEach((arrow, index) => {
    arrow.addEventListener("click", () => {

        arrowImgs[index].classList.toggle("rotate-arrow");
        questions[index].classList.toggle("chosen-question");
        answers[index].classList.toggle("show-answer");;        
    })
})