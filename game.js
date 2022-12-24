console.log('Hello world from game');
const question = document.getElementById('question')
const choices = Array.from(document.getElementsByClassName('choice-text'));
// console.log(choice)
let currentQuestion = {};
let acceptAns = false;
let score = 0;
let counter = 0
let availableQue = [];

let questions = [
    {
        question: "Inside which html element do we put the javascript??",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer:1
    },
    {
        question:
            "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href = 'xxx.js'>",
        choice2: "<script name = 'xxx.js'>",
        choice3: "<script src = 'xxx.js'>",
        choice3: "<script file = 'xxx.js'>",
        answer:3
    }, {
        question:
            "How do you write 'Hello Azad' in alert box?",
        choice1: "msgBox('Hello Azad');",
        choice2: "alertBox('Hello Azad);",
        choice3: "msg('Hello Azad');",
        choice4: "alert('Hello Azad');",
        answer:4
    }
]

// Constant
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;
startGame=() => {
    quescounter = 0;
    score = 0;
    availableQue = [...questions]
    getNewQuestion();
}

getNewQuestion = () => {

    if (availableQue.length === 0 || quescounter > MAX_QUESTIONS) {
        // go to the end page
        return window.location.assign('/end.html');
    }
    quescounter++;
    const questionIndex = Math.floor(Math.random() * availableQue.length);
    currentQuestion = availableQue[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice'+ number]
    })
    availableQue.splice(questionIndex, 1);
    // console.log(availableQue);
    acceptAns = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        // console.log(e.target)
        if (!acceptAns) return;
        acceptAns = false;
        const selectedChoice = e.target;
        const selectedAns = selectedChoice.dataset['number'];
         
        const classToApply =
            selectedAns == currentQuestion.answer ? "correct" : "incorrect";
        
        selectedChoice.parentElement.classList.add(classToApply);
        
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        },1000)
        
    });
});
startGame()