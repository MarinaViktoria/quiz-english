gsap.to("form", {opacity: 0.8, delay:1, duration:5});
gsap.to(".correctAnswers", {opacity:0.8, delay:1, duration:5});

const button = document.querySelector(".btn");
const answers = document.querySelectorAll(".answer");
const par = document.querySelector(".result");
const buttonNext = document.querySelector(".btn-next")

button.addEventListener("click", result);
function result(e) {
    e.preventDefault();
    let points = 0;

    answers.forEach(answer => {
        if (answer.checked) 
            points ++
        });
    par.textContent = "Anzahl korrekter Antworten: " + points
}

button.addEventListener("click", showCorrectAnswers);
function showCorrectAnswers() {
    buttonNext.style.display = "block";
}