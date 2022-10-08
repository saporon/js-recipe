const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const mainusButton = document.getElementById("mainus-button")
const dubleButton = document.getElementById("duble-button")

let count = 0

plusButton.onclick = function () {
  count += 1
  display.textContent = count
}

mainusButton.onclick = function () {
  count -= 1
  display.textContent = count
}

dubleButton.onclick = function () {
  count *= 2
  display.textContent = count
}
