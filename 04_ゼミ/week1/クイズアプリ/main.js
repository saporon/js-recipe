const snowboadbutton = document.getElementById("snowboadbutton")
const karaokebutton = document.getElementById("karaokebutton")
const benkyoubutton = document.getElementById("benkyoubutton")

const answer = document.getElementById("answer")

snowboadbutton.onclick = function () {
  answer.textContent = "正解!"
}
karaokebutton.onclick = function () {
  answer.textContent = "不正解"
}

benkyoubutton.onclick = function () {
  answer.textContent = "はずれ!勉強好きな人いる？"
}
