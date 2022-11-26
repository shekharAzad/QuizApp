console.log('Hello world from game');
const question = document.getElementById('question')
const choice = Array.from(document.getElementsByClassName('choice-text'));
// console.log(choice)
let currentQuestion = {};
let acceptAns = true;
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
    counter = 0;
    score = 0;
    availableQue = [...questions]
    getNewQuestion();
}