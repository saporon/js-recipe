const button = document.getElementById("button")
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

button.onclick = function () {
  alert("クリックしたね")
}

const logValue = function (e) {
  console.log(e.target.value)
}

inputText.oninput = logValue
inputDate.oninput = logValue

document.onkeydown = function (e) {
  console.log(e.key)
}
