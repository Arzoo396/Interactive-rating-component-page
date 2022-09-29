const container = document.querySelector(".container")
const container2 = document.querySelector(".container2")
const submitButton = document.getElementById("arzoo")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submitButton.addEventListener("click", () => {
    container2.classList.remove("hidden")
    container.style.display = "none"
})

// rateAgain.addEventListener("click", () => {
//     container2.classList.add("hidden")
//     container.style.display = "block"
// })

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})