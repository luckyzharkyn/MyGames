let question = {
    1: {
        TextQuestion: "Как звучит полное имя Абая?",
        answers: {
            1: "Абай Кунанбаев",
            2: "Абай Ибрагим Кунанбаев",
            3: "Абай"
        },
        correctAnswer: "Абай Ибрагим Кунанбаев"
    },
    2: {
        TextQuestion: "Как переводится прозвище Абай?",
        answers: {
            1: "красивый",
            2: "внимательный, осторожный",
            3: "нежный"
        },
        correctAnswer: "внимательный, осторожный"
    },
    3: {
        TextQuestion: "К какому роду принадлежала семья Абая?",
        answers: {
            1: "род Тобыкты из казахского племени Аргын",
            2: "Кыпшак",
            3: "Керей"
        },
        correctAnswer: "род Тобыкты из казахского племени Аргын"
    },
    4: {
        TextQuestion: "Какому роду принадлежит мать Абая Улжан?",
        answers: {
            1: "керей",
            2: "кыпшак",
            3: "Мать Улжан — из рода Каракесек из племени Аргын"
        },
        correctAnswer: "Мать Улжан — из рода Каракесек из племени Аргын"
    },
    5: {
        TextQuestion: "Какие языки преподавались в медресе у муллы в Семипалатинске, где обучался юный Абай?",
        answers: {
            1: "арабский, персидский и другие восточные языки",
            2: "английский",
            3: "французский"
        },
        correctAnswer: "арабский, персидский и другие восточные языки"
    },
    6: {
        TextQuestion: "Где и в каком году появился первый сборник стихов Абая. Как он назывался?",
        answers: {
            1: "в 1912, в Москве",
            2: "в 1910 в Омске",
            3: "Санкт-Петербург, 1909"
        },
        correctAnswer: "Санкт-Петербург, 1909"
    },
    7: {
        TextQuestion: "Какие ученые Востока оказали влияние на мировоззрение Абая?",
        answers: {
            1: "На формирование мировоззрения Абая оказали влияние поэты и учёные Востока, придерживавшиеся гуманистических идей Фирдоуси, Алишер Навои, Низами, Физули, Ибн Сина.",
            2: "Аль-Хорезми, Абу Райхон Беруни",
            3: "Амир Темур, Мирзо Улугбек"
        },
        correctAnswer: "На формирование мировоззрения Абая оказали влияние поэты и учёные Востока, придерживавшиеся гуманистических идей Фирдоуси, Алишер Навои, Низами, Физули, Ибн Сина."
    },
    8: {
        TextQuestion: "Каких европейских и русских поэтов Абай читал и переводил?",
        answers: {
            1: "Ф.Достоевского",
            2: "Л.Толстого",
            3: "Крылова, Лермонтова, Пушкина, Гёте и Байрона."
        },
        correctAnswer: "Крылова, Лермонтова, Пушкина, Гёте и Байрона."
    },
    9: {
        TextQuestion: "О каком периоде Абай написал эти строки?",
        answers: {
            1: "Учился в семинарии",
            2: "работал волостным управителем",
            3: "когда отец Кунанбай начал приучать Абая к деятельности главы рода"
        },
        correctAnswer: "работал волостным управителем"
    },
    10: {
        TextQuestion: "Какой сын (имя) был переводчиком и общественным деятелем партии «Алаш Орда»? ",
        answers: {
            1: "Четвёртый сын Турагул (общественный деятель партии «Алаш Орда», поэт и писатель, по собственному утверждению перевёл на казахский язык произведения Джека Лондона.",
            2: "Акылбай",
            3: "Сын Абдирахман"
        },
        correctAnswer: "Четвёртый сын Турагул (общественный деятель партии «Алаш Орда», поэт и писатель, по собственному утверждению перевёл на казахский язык произведения Джека Лондона."
    },
    11: {
        TextQuestion: "Назовите имя племянника – поэта, писателя, автора книги «Зеркало казахов», поэм «Калкаман-Мамыр» и «Енлик-Кебек»?",
        answers: {
            1: "Дулат",
            2: "Какитай",
            3: "Шакарим"
        },
        correctAnswer: "Шакарим"
    },

};

let imgMass = {
    1: "img/none.jpeg",
    2: "img/1.jpeg",
    3: "img/2.jpeg",
    4: "img/3.jpg",
    5: "img/4.jpeg",
    6: "img/5.jpeg",
    7: "img/6.jpg",
    8: "img/7.jpg",
    9: "img/8.jpg",
    10: "img/9.jpeg",
    11: "img/10.jpeg",
};

let answerButtons = document.querySelectorAll(".answer");
let questionShow = document.querySelector(".main__question");
let main__answers = document.querySelector(".main__answers");
let buttons = document.querySelectorAll(".buttons");
let showCorrectAnswer = document.querySelector(".showCorrectAnswer");
let showIncorrectAnswer = document.querySelector(".showIncorrectAnswer");
let something__necessary = document.querySelector(".something__necessary");
let main = document.querySelector('.main');
let testAgain = document.querySelector('.testAgain');
let start = document.querySelector('.start');
let start__game = document.querySelector(".start__game");
let imgClass = document.querySelector(".imgClass");
let stihi__abai = document.querySelector(".stihi__abai");
let nextTest = document.querySelector(".testNext");
let header__title = document.querySelector(".header__title");

//сохранить имя пользователя
let playerName = document.querySelector(".playerName");
let playerNameListShow = document.querySelector('.playerNameListShow');

let num;  //счетчик вопроса
let countRightAnswer = 0;
let countIncorrectAnswer = 0;
let timer = 3000;

start.addEventListener("click", startCode);

function startCode() {

    header__title.style.display = "none";
    main.style.display = "block";
    main.classList.add("animationShow");
    start__game.style.display = "none";
    something__necessary.style.display = "none";
    num = 1;
    countRightAnswer = 0;
    countIncorrectAnswer = 0;
    questionShow.innerHTML = question[num]['TextQuestion'];
    NextImg();
    
    for(let i = 0; i < answerButtons.length; i++) {
        buttons[i].innerHTML = question[num]['answers'][i+1];
        // if(buttons[i].innerHTML.length > 100) {          //если количество символов в кнопке больше 100, 
        //     buttonsWidthBig(i, 400);                     // то расширить кнопку
        // } else buttonsWidthBig(i, 300);
    }
};

//при выборе ответа
;(function(){
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(event) {
            buttonsBlock();
            allIncorrect();
            checkAnswer(event);
            countAnswer();
            runCodeSetTimout();
        });
    }
})();

// запуск кода через время
function runCodeSetTimout() {
    document.querySelector(".main__class").classList.remove("animationShow");
    imgClass.classList.remove("animationShow");
    setTimeout(NextQuestion, timer);
    setTimeout(generateAnswers, timer);
    setTimeout(buttonsUnBlock, timer);
    setTimeout(defaultButtons, timer);
    setTimeout(EndTest, timer);
    setTimeout(NextImg, timer);    
    setTimeout(stihiShow, timer);
}

function NextImg() {
    imgClass.src = imgMass[num];
}

// генерация ответов
function generateAnswers() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = question[num]['answers'][i+1];
        // if(buttons[i].innerHTML.length > 100) {              //если количество символов в кнопке больше 100, 
        //     buttonsWidthBig(i, 400);                         // то расширить кнопку
        // } else buttonsWidthBig(i, 300);
    }
}

//расширить кнопку, если она маленькая
function buttonsWidthBig(num, num2) {
    buttons[num].style.width = `${num2}px`;
}


// следующий вопрос
function NextQuestion() {
    document.querySelector(".main__class").classList.add("animationShow");
    imgClass.classList.add("animationShow3s");
    num++;
    questionShow.innerHTML = question[num]['TextQuestion'];
};

//заблокировать все кнопки
function buttonsBlock() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

//разблокировать все кнопки
function buttonsUnBlock() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }
}

//кнопки возвращаются с исходное состояние
function defaultButtons() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("answer-correct");
        buttons[i].classList.remove("answer-incorrect");
    }
}

//если неправильно, покрасить всех красным цветом, а правильный ответ зеленым
function allIncorrect() {
    
    for(let i = 0; i < buttons.length; i++) {                         
        
        if(question[num]['correctAnswer'] == buttons[i].innerHTML){
            buttons[i].classList.add("answer-correct");
        } else {
            buttons[i].classList.add("answer-incorrect");
        }
    }
}

//если ответ правильный, счетчик увеличивается, если нет, уменьшается
function checkAnswer(event) {
    
    if(event.target.innerHTML == question[num]['correctAnswer']){
        countRightAnswer++;
    } else {
        countIncorrectAnswer++;
    }
}

function stihiShow() {
    if(num == 9) {
        stihi__abai.style.display = 'block';
    } else stihi__abai.style.display = 'none';
};

//счетчик правильных ответов показывается на экране
function countAnswer() {
    showCorrectAnswer.innerHTML = countRightAnswer;
    showIncorrectAnswer.innerHTML = countIncorrectAnswer;
}

function EndTest() {
    if(num > Object.keys(question).length) {
        something__necessary.style.display = "block";
        something__necessary.classList.add("animationShow3s");
        main.style.display = "none";
        
        
    }
}

testAgain.addEventListener("click", startCode);

        nextTest.addEventListener("click", function() {
            document.location.href = "../game_Abai2/index.html";
        });
    
