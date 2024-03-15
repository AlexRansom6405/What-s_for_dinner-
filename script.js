const questions = [
    "Where are you from?",
    "Which continent do you live in?",
    "What type of music do you like?",
    "How many times do you think about the Roman Empire a day?",
    "What pet do you have?",
    "How old are you?",
    "How many times do you eat a day?",
    "What is your favorite dessert?",
    "How long is your hair?",
    "What did you have for dinner yesterday?"
  ];
  
  const answers = [
    ["North America", "South America", "Europe", "Africa", "Asia"],
    ["North America", "South America", "Europe", "Africa", "Asia"],
    ["Rock", "Hip-hop", "Jazz", "Pop", "None of these"],
    ["Once a day", "Twice a day", "Five times a day", "All day everyday", "Never, why would I do that?"],
    ["Dog", "Cat", "Hamster", "Don’t have one", "Not listed"],
    ["5-14", "15-20", "20-35", "35-54", "55+"],
    ["Once a day", "Twice a day", "Three times a day", "4 times+", "I don’t need to eat"],
    ["Cake", "Ice Cream", "Cookies", "Brownies", "Donuts"],
    ["Short", "Medium", "Long", "Super Duper Long", "Bald"],
    ["American Food", "Mexican Food", "Italian Food", "Indian Food", "Asian Food"]
  ];
  
  let currentQuestionIndex = 0;
  let points = 0;
  
  const container = document.querySelector('.container');
  const startButton = document.getElementById('start-button');
  
  // Function to create and display question scene
  function displayQuestion() {
    container.innerHTML = `
      <h2 class="question">${questions[currentQuestionIndex]}</h2>
      <div class="answers">
        ${answers[currentQuestionIndex].map((answer, index) => `
          <label class="answer-option">
            <input type="radio" name="answer" value="${index}">
            ${answer}
          </label>
        `).join('')}
      </div>
      <button id="next-button" class="next-button">Next</button>
      ${currentQuestionIndex > 0 ? '<button id="back-button" class="next-button">Back</button>' : ''}
    `;
  
    const nextButton = document.getElementById('next-button');
    nextButton.addEventListener('click', nextQuestion);
  
    if (currentQuestionIndex > 0) {
      const backButton = document.getElementById('back-button');
      backButton.addEventListener('click', previousQuestion);
    }
  }
  
  // Function to move to the next question
  function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
      points += parseInt(selectedAnswer.value) + 1;
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    } else {
      alert("Please select an answer!");
    }
  }
  
  // Function to go back to the previous question
  function previousQuestion() {
    currentQuestionIndex--;
    displayQuestion();
  }
  
  // Function to display the result
  function displayResult() {
    let result;
    let resultDescription;
    if (points >= 41 && points <= 50) {
      result = "American Food";
      resultDescription = "Feel free to get all the burgers, fries, and hot dogs to feel the true American spirit!";
    } else if (points >= 31 && points <= 40) {
      result = "Mexican Food";
      resultDescription = "Celebrate with a fiesta full of tacos, burritos, and all other Mexican delights!";
    } else if (points >= 21 && points <= 30) {
      result = "Italian Food";
      resultDescription = "Experience a fine Italian cuisine such as a delicious pizza or pasta as if you were dining in Venice!";
    } else if (points >= 11 && points <= 20) {
      result = "Indian Food";
      resultDescription = "Go on a journey full of culture and flavor such as enjoying a bowl of curry or any other of the delicious Indian dishes!";
    } else {
      result = "Asian Food";
      resultDescription = "Partake in the vast amount of Asian cuisines, such as a fine bowl of noodles!";
    }
  
    container.innerHTML = `
      <h1 class="result-title">You Should Get ${result}!</h1>
      <p class="result-description">${resultDescription}</p>
    `;
  }
  
  startButton.addEventListener('click', () => {
    displayQuestion();
  });
  