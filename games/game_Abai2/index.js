let question = {
    1: "Отрывок из которого цикла стихов (название) представлен вашему вниманию?",
    2: "Назовите стихотворение Абая",
    3: "Назовите стихотворение Абая",
    4: "Из какого произведения эти строки. Кому они принадлежат – Искандеру, Аристотелю или автору - Абаю?",
    5: "Из какого произведения отрывок? ",
    6: "В слове тридцать первом «Қара сөз» говорится: ...следует избегать вредных свойст ума. О каких вредных свойствах ума говорит Абай?",
    7: "В слове тридцать третьем «Қара сөз» Абай говорит: Хочешь быть богатым – учись ремеслу. Проложите его мысль следующим предложением.",
    8: "Закончи цитату Абая „Достоинство человека определяется его подходом к делу, ….",
    9: "Абай воспевал женщину — мать. Знаменитая песня Абая «Айттым сәлем, каламкас» — «Шлю привет тебе, тонкобровая». Воспроизведите 4 первых строчки.",
    10: "Песня на стихи Абая «Көзімнің қарасы» - «Ты зрачок глаз моих» в переводе Марии Петровых стала народной:",
}

let stihi = {
    1: {
            1: "Стих – это вождь среди слов, ценнейший их убор,\n Талантливый поэт слагает речь в узор,\n Где слова равны, густы, округлены,\n Легки для языка, ласкают слух и взор.",
            2: "Цикл стихов «Поэзия – властитель языка»",
            3: "цикл стихов поэзия властитель языка"
    },
    2: {
        1: "Земля в цветах так празднична, нарядна.\nВ зените – жаворонок. С нами – соловьи.\nВторгается кукушка в хор наш рьяно,\nКупцы сзывают аульчан на ткани.\nНа поле борозды кладут декхане.\nДвоится скот у бедных и богатых.\nОт радости двоится и дыханье.",
        2: "Стихотворение «Весна», перевод М.Султанбекова",
        3: "стихотворение весна перевод м.султанбекова"
    },
    3: {
        1: "Вон птиц вереницы. Не надо далеких им стран.\nЗа житом собравшись, белеет вдали караван.\nНе слышно нигде ни гулянья, ни праздничных толп,\nКуда ни приедешь, унынье раскинуло стан.",
        2: "Стихотворение «Осень», перевод А.Кодара",
        3: "Стихотворение Осень перевод А.Кодара"
    },
    4: {
        1: "Про бренность помни бытия,\nЖиви, от ближних не тая\nЗаветных помыслов. Будь честен!\nДа будет чистой жизнь твоя!",
        2: "Поэма Искандер. Перевод Е.Винокурова.\n Слова принадлежат автору.",
        3: "Поэма Искандер Перевод Винокурова Слова принадлежат автору"
    },
    5: {
        1: "«Или все-таки наступят светлые дни,\n когда люди забудут воровство, обман, злословие, вражду\n и  устремятся к знаниям, обучатся ремеслу,\n начнут добывать богатства честным, достойным путем».",
        2: "Книга «Қара сөз». Слово двадцать четвертое. ",
        3: "Книга Қара сөз Слово двадцать чеытвертое"
    },
    6: {
        1: "",
        2: "Беспечность, равнодушие,\n склонность беспричинному веселью,\n тяга к мрачным раздумьям,\n губительным страстям.\n Эти пороки способны разрушить ум и талант. ",
        3: "Беспечность равнодушие склонность беспричинному веселью тяга к мрачным раздумьям губительным страстям Эти пороки способны разрушить ум и талант"
    },
    7: {
        1: "",
        2: "Богатство со временем исскнет, а умение – нет.",
        3: "Богатство со временем исскнет а умение нет"
    },
    8: {
        1: "",
        2: "а не завершением.“",
        3: "а не завершением"
    },
    9: {
        1: "",
        2: "Шлю, тонкобровая, привет!\nПохожей не было и нет!\nКогда тоскую по тебе, \nМне слезы затмевают свет. ",
        3: "Шлю тонкобровая привет Похожей не было и нет Когда тоскую по тебе Мне слезы затмевают свет"
    },
    10: {
        1: "Ты — зрачок глаз моих,\nПламень душ золотых.\n\nЗакончите четверостишие:",
        2: "Сердцу мук не избыть,\nСтоль глубок шрам от них.",
        3: "Сердцу мук не избыть Столь глубок шрам от них."
    },
}


//формы
let stihiStyle = document.querySelector(".stihiStyle");   //стих
let main__form__question = document.querySelector(".main__form__question");   //вопрос
let main__button = document.querySelector(".main__button");  // кнопка проверить
let main__form__button = document.querySelector(".main__form__button");  //форма кнопки проверить
let main__input = document.querySelector(".main__input");  //инпут для ответа
let time = document.querySelector(".time"); //таймер отображения
let main__form__footer = document.querySelector(".main__form__footer"); //чтобы форма осталавалась на месте
let header = document.querySelector(".header");
let main__next = document.querySelector(".main__next"); //кнопка следующий вопрос


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

    num = 10;
    countRightAnswer = 0;
    countIncorrectAnswer = 0;
    main__form__question.innerHTML = question[num];     //заполнение первого ответа
    stihiStyle.innerHTML = stihi[num][1];   //заполнение стихов
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
        
        num++;
        DontshowButtonCheck();
    }
}

main__next.addEventListener("click", function() {
    RunSetTimeOutCode();    //запуск кода через время
});

//при правильном ответе
function AnswerIsRight() {
    stihiStyle.innerHTML = `<span class="stihiStyle__span__right">Ответ правильный<br><br></span>
    <span style="color: rgb(45, 223, 45); font-size: 50px;">${stihi[num][2]}</span>`;
    main__input.classList.add('main__inputRight');
    main__next.style.display = 'inline';
}
//при неправильном ответе
function AnswerIsIncorrect() {
    stihiStyle.innerHTML = `<span class="stihiStyle__span__incorrect">Ответ неправильный<br><br></span>
    <span style="color: rgb(45, 223, 45); font-size: 50px;">Правильный ответ: <br>${stihi[num][2]}</span>`;
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
    stihiStyle.innerHTML = stihi[num][1];
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
        main__form.style.display = "none";
        
        testAgain.addEventListener("click", startCode);
        document.querySelector(".testNext").addEventListener("click", function() {
            document.location.href = "../krossvord/index.html";
        });
    }
}
