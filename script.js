const quizForm = document.getElementById("quiz-form");
const resultDiv = document.getElementById("result");
const correctAnswers = [
  "true",
  "false",
  "true",
  "false",
  "false",
  "true",
  "true",
  "false",
  "true",
  "false",
  "a",
  "b",
  "c",
  "b",
  "a",
  "b",
  "c",
  "a",
  "c",
  "a",
  "a",
  "b",
  "a",
  "b",
  "a",
  "a",
  ["a", "c"],
  ["a", "c"],
  ["a", "c"],
  ["a", "b", "c"],
  "Poseidon",
  "sắt",
  "Zeus và Poseidon, Hera và Hades",
  "Eucalyptus",
  "bơ, cà chua và dưa hấu",
  "thời kỳ đồ đá mới",
  "Vận tốc âm thanh tăng khi đi qua không khí dày hơn",
  "'pi' đại diện cho giá trị số pi (π) khoảng 3.14",
  "Mỗi đội bóng đá có 11 cầu thủ trong một đội hình xuất phát",
  "Artemis",
];

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    quizForm.q1.value,
    quizForm.q2.value,
    quizForm.q3.value,
    quizForm.q4.value,
    quizForm.q5.value,
    quizForm.q6.value,
    quizForm.q7.value,
    quizForm.q8.value,
    quizForm.q9.value,
    quizForm.q10.value,
    quizForm.q11.value,
    quizForm.q12.value,
    quizForm.q13.value,
    quizForm.q14.value,
    quizForm.q15.value,
    quizForm.q16.value,
    quizForm.q17.value,
    quizForm.q18.value,
    quizForm.q19.value,
    quizForm.q20.value,
    quizForm.q21.value,
    quizForm.q22.value,
    quizForm.q23.value,
    quizForm.q24.value,
    quizForm.q25.value,
    quizForm.q26.value,
    quizForm.q27.value,
    quizForm.q28.value,
    quizForm.q29.value,
    quizForm.q30.value,
    quizForm.q31.value,
    quizForm.q32.value,
    quizForm.q33.value,
    quizForm.q34.value,
    quizForm.q35.value,
    quizForm.q36.value,
    quizForm.q37.value,
    quizForm.q38.value,
    quizForm.q39.value,
    quizForm.q40.value,
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 1;
    }
  });

  resultDiv.innerHTML = `Your score is ${score}/${correctAnswers.length}`;
});
