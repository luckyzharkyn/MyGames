//вопросы
let questions = {
    1 : "How are you?",
    2 : "What's you old?",
    3 : "what's you name?",
    4 : "Where are you from?",
    5 : "Bekzat who?",
};

//варианты ответов
let answers = {
    1: {
        1: "fine",
        2: "bad",
        3: "worse",
        4: "average"
    },
    2: {
        1: "18",
        2: "23",
        3: "50",
        4: "70"
    },
    3: {
        1: "Zharkyn",
        2: "Bekzat",
        3: "Anuar",
        4: "Danil",
    },
    4: {
        1: "Kazakhstan",
        2: "Russia",
        3: "USA",
        4: "Africa",
    },
    5: {
        1: "I don't know",
        2: "Who is it?",
        3: "Nobody",
        4: "sexy"
    }
};
//правильные ответы
let rightAnswer = {
    1 : "fine",
    2 : "18",
    3 : "Bekzat",
    4 : "Kazakhstan",
    5 : "sexy"
};

//получение элементов
let question = document.getElementById("question");
let ans = document.querySelectorAll("input.answer");
let correctAnswer = document.getElementById("correctAnswer");
let button = document.getElementById("button");
let clear = document.getElementById("clear");
let a = 0;

button.addEventListener("click", record);

function record() {
   questions[`${Object.keys(questions).length + 1}`] = "hello";
   alert(questions[6]);
}

