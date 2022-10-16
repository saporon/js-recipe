const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const choice4 = document.getElementById("choice-4")
const feedback = document.getElementById("feedback")
const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")

const quiz = {
  text: "何本？",
  image: "Two.jpeg",
  choices: [
    {
      text: "5本",
      feedback: "残念、もう一度数えてみて",
    },
    {
      text: "2本",
      feedback: "正解！",
    },
    {
      text: "日本",
      feedback: "Do you like Japan ?",
    },
    {
      text: "3本",
      feedback: "そっち数えたの！？",
    },
  ],
}

const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
  choice4.textContent = quiz.choices[3].text
}

const choose = function (choiceNumber) {
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function () {
  choose(0)
}

choice2.onclick = function () {
  choose(1)
}

choice3.onclick = function () {
  choose(2)
}

choice4.onclick = function () {
  choose(3)
}

reloadQuiz()
