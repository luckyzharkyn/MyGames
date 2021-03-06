let question = {
    1: "1.	Как звали главного героя, который в ходе поиска Золотой чаши становился все сильнее и бесстрашнее?",
    2: "2.	У него плохое зрение, но он очень любит читать.",
    3: "3.	Она ходит в музыкальную школу по классу домбры и может дать отпор хулиганам.",
    4: "4.	Он прибыл из прошлого. Носил странную прическу из пяти заплетенных косичек.",
    5: "5.	Кто помог ребятам отправиться в прошлое?",
}

let stihi = {
    1: {
            1: "",
            2: "Бату",
            3: "Бату"
    },
    2: {
        1: "",
        2: "Сашка",
        3: "Сашка"
    },
    3: {
        1: "",
        2: "Дана",
        3: "Дана"
    },
    4: {
        1: "",
        2: "Аспара",
        3: "Аспара"
    },
    5: {
        1: "",
        2: "кюйши",
        3: "кюйши"
    },
}


let imgs = {
    1: "img/1.jpg",
    2: "img/2.jpg",
    3: "img/3.jpg",
    4: "img/4.jpg",
    5: "img/5.jpg",
    6: "img/index.jpg"
}

//формы
let stihiStyle = document.querySelector(".stihiStyle");   //стих
let main__form__stihi = document.querySelector(".main__form__stihi");
let main__form__input = document.querySelector('.main__form__input');
let main__form__question = document.querySelector(".main__form__question");   //вопрос
let main__button = document.querySelector(".main__button");  // кнопка проверить
let main__form__button = document.querySelector(".main__form__button");  //форма кнопки проверить
let main__input = document.querySelector(".main__input");  //инпут для ответа
let time = document.querySelector(".time"); //таймер отображения
let main__form__footer = document.querySelector(".main__form__footer"); //чтобы форма осталавалась на месте
let header = document.querySelector(".header");
let main__next = document.querySelector(".main__next"); //кнопка следующий вопрос
let main__form__stihi__img = document.querySelector(".main__form__stihi__img");


//в начале игры
let start = document.querySelector('.start');
let start__game = document.querySelector(".start__game");

//при окончании игры
let something__necessary = document.querySelector(".something__necessary");
let main__form = document.querySelector(".main__form");
let testAgain = document.querySelector('.testAgain');
let showCorrectAnswer = document.querySelector(".showCorrectAnswer");
let showIncorrectAnswer = document.querySelector(".showIncorrectAnswer");

//счетчики
let num = 1;  //счетчик вопросов
let countRightAnswer = 0;   //количество правильных ответов
let countIncorrectAnswer = 0;   //количество неправильных ответов
let timer = 200;   //через какое время будет следующий вопрос


start.addEventListener("click", startCode);
//кнопка начать
function startCode() {
    header.style.display = "none";
    main__form.style.display = "block";
    start__game.style.display = "none";
    something__necessary.style.display = "none";
    clearInput();

    num = 1;
    countRightAnswer = 0;
    countIncorrectAnswer = 0;
    main__form__question.innerHTML = question[num];     //заполнение первого ответа
    //при нажатии кнопки button
    main__button.addEventListener("click", check);
};

//проверить ответ при нажатии на "проверить"
function check() {
    if(main__input.value == "") {   //если инпут пустой
        main__input.value = "введите ответ";
    } else {
        let mass = [];
        let mass2 = [];
        let temp = [];
        mass = (stihi[num][3]).toLowerCase().split(" ");    //заполнение массива оригинальным ответом
        mass2 = (main__input.value).toLowerCase().split(" "); //заполнение массива ответом пользователя
        
        for(let i = 0; i < mass2.length; i++) {         //сравнение совпадении
            for(let j = 0; j < mass.length; j++) {
                if(mass2[i] == mass[j]){
                    temp.push(mass2[i]);                //заполнение массива совпадении
                }
            }
        }
        
        if(temp.length >= 1){   //если массив совпадении больше или равна нулю
            countRightAnswer++;
            AnswerIsRight();
        } else {
            countIncorrectAnswer++;
            AnswerIsIncorrect();
        }
        main__form__input.style.display = "none";
        stihiStyle.style.display = "block";
        main__form__stihi.style.display = "flex";
        main__form__stihi__img.src = imgs[num];
        main__form__stihi.classList.add("animationShow");
        num++;
        DontshowButtonCheck();
    }
}

main__next.addEventListener("click", function() {
    RunSetTimeOutCode();    //запуск кода через время
});

//при правильном ответе
function AnswerIsRight() {
    stihiStyle.innerHTML = `<span class="stihiStyle__span__right">Ответ правильный<br></span>
    <span style="color: rgb(45, 223, 45); font-size: 50px;">${stihi[num][2]}</span>`;
    main__input.classList.add('main__inputRight');
    main__next.style.display = 'inline';
}
//при неправильном ответе
function AnswerIsIncorrect() {
    if(main__input.value == "введите ответ") {
        stihiStyle.innerHTML = `<span class="stihiStyle__span__incorrect">Ответ неправильный<br></span>
    <span style="color: rgb(45, 223, 45); font-size: 50px;">Правильный ответ: <br>${stihi[num][2]}</span>`;
    } else {
        stihiStyle.innerHTML = `<span class="stihiStyle__span__incorrect">${main__input.value}<br>Ответ неправильный<br></span>
    <span style="color: rgb(45, 223, 45); font-size: 50px;">Правильный ответ: <br>${stihi[num][2]}</span>`;
    }
    main__input.classList.add('main__inputIncorrect');
    main__next.style.display = 'inline';
}
//возвращение инпута в исходное состояние
function InputDefault() {
    main__input.classList.remove('main__inputRight');
    main__input.classList.remove('main__inputIncorrect');
}

//запуск кода через время
function RunSetTimeOutCode() {
    setTimeout(NextQuestion, timer);
    setTimeout(NextStihi, timer);
    setTimeout(InputDefault, timer);
    setTimeout(countAnswer, timer);
    setTimeout(EndTest, timer);
    setTimeout(showButtonCheck, timer);
    main__next.style.display = 'none';
}

//следующий вопрос
function NextQuestion() {
    main__form__question.innerHTML = question[num];
    clearInput();
}
//очистить инпут
function clearInput() {
    main__input.value = "";
}
function showButtonCheck() {
    main__form__button.style.display = 'inline';
    // time.style.display = 'none';
}
function DontshowButtonCheck() {
    main__form__button.style.display = 'none';
    // time.style.display = 'inline';
}

//следующие стихи
function NextStihi() {
    stihiStyle.style.display = "none";
    main__form__stihi.style.display = "none";
    main__form__input.style.display = "block";
    // stihiStyle.innerHTML = stihi[num][1];
}
//счетчик правильных ответов показывается на экране
function countAnswer() {
    showCorrectAnswer.innerHTML = countRightAnswer;
    showIncorrectAnswer.innerHTML = countIncorrectAnswer;
}
//при окончании теста
function EndTest() {
    if(num > Object.keys(question).length) {
        something__necessary.style.display = "block";
        something__necessary.classList.add("animationShow");
        main__form.style.display = "none";
        
        testAgain.addEventListener("click", startCode);
        document.querySelector(".testNext").addEventListener("click", function() {
            document.location.href = "./tur2/index.html";
        });
    }
}
