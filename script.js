gsap.to("form", {opacity: 0.8, delay:1, duration:5});
gsap.to(".correctAnswers", {opacity:0.8, delay:1, duration:5});
const button = document.querySelector(".btn");
const par = document.querySelector(".result");
button.addEventListener("click", result);

function result(e) {
    e.preventDefault()

    let points = 0;
    if (document.querySelector("#answer1").checked) {
        points++
    }
    if (document.querySelector("#answer2").checked) {
        points++
    }
    if (document.querySelector("#answer3").checked) {
        points++
    }
    if (document.querySelector("#answer4").checked) {
        points++
    }
    if (document.querySelector("#answer5").checked) {
        points++
    }
    if (document.querySelector("#answer6").checked) {
        points++
    }
    if (document.querySelector("#answer7").checked) {
        points++
    }
    if (document.querySelector("#answer8").checked) {
        points++
    }
    if (document.querySelector("#answer9").checked) {
        points++
    }
    if (document.querySelector("#answer10").checked) {
        points++
    }
    if (document.querySelector("#answer11").checked) {
        points++
    }
    if (document.querySelector("#answe12").checked) {
        points++
    }
    if (document.querySelector("#answer13").checked) {
        points++
    }
    if (document.querySelector("#answer14").checked) {
        points++
    }
    if (document.querySelector("#answer15").checked) {
        points++
    }
    if (document.querySelector("#answer16").checked) {
        points++
    }
    if (document.querySelector("#answer17").checked) {
        points++
    }
    if (document.querySelector("#answer18").checked) {
        points++
    }
    if (document.querySelector("#answer19").checked) {
        points++
    }
    if (document.querySelector("#answer20").checked) {
        points++
    }
    par.textContent = "Anzahl korrekter Antworten: " + points
}