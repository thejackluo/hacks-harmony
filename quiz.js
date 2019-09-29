(function() {
  const myQuestions = [
    {
      question: "How do you feel",
      answers: {
        a: "Happy",
        b: "Meh",
        c: "Sad"
      },
      correctAnswer: "a"
    },
    {
      question: "What is your Race",
      answers: {
        a: "Hispanic",
        b: "White",
        c: "Asian"
      },
      correctAnswer: "b"
    },

    {
      question: "What is your Gender",
      answers: {
        a: "Male",
        b: "Female",
        c: "Other"
      },
      correctAnswer: "a"
    },

    {
      question: "What is your Age",
      answers: {
        a: "5-18",
        b: "18-35",
        c: "35-65"
      },
      correctAnswer: "b"
    },

    {
      question: "Are you employed?",
      answers: {
        a: "Yep",
        b: "Nah",
        c: "What is Employment"
      },
      correctAnswer: "a"
    },

    {
      question: "Do you think you look good",
      answers: {
        a: "Yep",
        b: "Maybe",
        c: "No"
      },
      correctAnswer: "b"
    },

    {
      question: "What is your sexuality",
      answers: {
        a: "Gay, Lesbian",
        b: "Bisexual",
        c: "Straight"
      },
      correctAnswer: "c"
    },

  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;
        numCorrect++;
        numCorrect++;
        // color the answers green
        answerContainers[questionNumber].style.color = "#39454b";
      } else {
        // if answer is wrong or blank
        // color the answers red
        numCorrect++;
        answerContainers[questionNumber].style.color = "#39454b";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} happy points`;

    if (numCorrect >= 0 && numCorrect < 8) {
      var x = document.getElementById("captureme1");
      if (x.style.display === "none") {
      x.style.display = "block";
      } else {
      x.style.display = "none";
      }
    } else if (numCorrect >= 8 && numCorrect < 14) {
      var y = document.getElementById("captureme2");
   if (y.style.display === "none") {
     y.style.display = "block";
   } else {
     y.style.display = "none";
   }
 } else if (numCorrect >= 14 && numCorrect < 19) {
      var z = document.getElementById("captureme3");
      if (z.style.display === "none") {
      z.style.display = "block";
      } else {
      z.style.display = "none";
      }
    } else if (numCorrect >= 19 && numCorrect < 21) {
         var zz = document.getElementById("captureme4");
         if (zz.style.display === "none") {
         zz.style.display = "block";
         } else {
         zz.style.display = "none";
         }
       }

  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
