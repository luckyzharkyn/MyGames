//вопросы
let questions = {
    1 : "Что такое автогол?",
    2 : "Что такое аут?",
    3 : "Что такое аутсайдер?",
    4 : "Что такое бомбардир?",
    5 : "Что такое вингер?",
    6 : "Что такое второй этаж?",
    7 : "Что такое гекса-трик?",
    8 : "Кто такой голкипер?",
    9 : "Что такое дисквалификация?",
    10 : "Что такое дриблинг?",
    11 : "Что такое забегание?",
    12 : "Что такое корнер?",
    13 : "Misses next match?",
    14 : "Что такое мундиаль?",
    15 : "Что такое навес?",
    16 : "Что такое нырок?",
    17 : "Что такое опасная игра?",
    18 : "Что такое пенальти?",
    19 : "Что такое перехват?",
    20 : "Что такое подкат?",
    21 : "Кто такой полузащитник?",
    22 : "Что такое разрез?",
    23 : "Что такое свободный удар?",
    24 : "Что такое хет-трик?",
    25 : "Что такое чемпионат?",
    26 : "Что такое штрафной удар?",
    
};
//ответы
let c = {
    1 : "мяч, забитый игроком в свои ворота",
    2 : `положение, когда мяч "вышел из игры", то есть пересёк линию, ограничивающую поле`,
    3 : "команда, занимающая одно из последних мест в турнирной таблице, неудачник чемпионата, которому грозит перевод из первой во вторую лигу",
    4 : "самый меткий игрок, чаще других поражающий ворота соперников. В футбол это слово пришло из артиллерии. Бомбардировать - значит обстреливатьиз орудий. Существовал некогда даже такой чин - бомбардир",
    5 : "крайний атакующий полузащитник",
    6 : "игра головой",
    7 : "шесть мячей, забитых игроком в одном матче",
    8 : `Вратарь. С английкого - "охраняющий цель"`,
    9 : "лишение футболиста или команды права участвовать в играх за нарушение правил или регламента соревнований, а также за недостойное поведение",
    10 : `движение футболиста с мячом в различных направлениях, с обводкой игроков соперника. В английской футбольной терминологии "дриблер" - игрок, умело ведущий мяч`,
    11 : "технический приём, при котором игрок без мяча пробегает мимо игрока с мячом и может получить от него короткий пас",
    12 : "В нашей терминологии - угловой удар, тогда как в английской - только угол футбольного поля",
    13 : "когда игрок на чемпионате получает одну жёлтую карточку, а в следующем матче другую, что в общей сложности даёт одну красную, он обязан пропустить один матч",
    14 : "Чемпионат Мира",
    15 : `от "навесная передача" - пас по воздуху`,
    16 : `Ч1) способ удара головой по низколетящему мячу в падении 2) способ имитации нарушения правил с целью "выпросить" штрафной удар или пенальти`,
    17 : "когда один игрок применяет по отношению к другому неразрешённые приёмы, в результате которых тот может получить травму",
    18 : `одиннадцатиметровый штрафной удар. Самое суровое наказание в футболе`,
    19 : `прерывание точного паса игроком противоположной команды`,
    20 : `эффектный приём отбора мяча`,
    21 : `игрок средней линии`,
    22 : `пустое пространство между двумя соперниками, куда обычно следует пас`,
    23 : `непрямой штрафной удар`,
    24 : `так называют в Англии три мяча, забитых в матче одним и тем же футболистом`,
    25 : `соревнования на первенство, цель которых - выявить чемпиона`,
    26 : `наказание, назначаемое за умышленное касание мяча рукой и за применение грубых приёмов`,
};

    
//варианты ответов
let answers = {
    1: {
        1: c[1],
        2: c[2],
        3: c[3],
        4: c[4],
    },
    2: {
        1: c[7],
        2: c[6],
        3: c[5],
        4: c[2],
    },
    3: {
        1: c[8],
        2: c[9],
        3: c[3],
        4: c[10],
    },
    4: {
        1: c[7],
        2: c[4],
        3: c[5],
        4: c[11],
    },
    5: {
        1: c[5],
        2: c[12],
        3: c[13],
        4: c[14],
    },
    6: {
        1: c[15],
        2: c[16],
        3: c[6],
        4: c[17],
    },
    7: {
        1: c[18],
        2: c[19],
        3: c[20],
        4: c[7],
    },
    8: {
        1: c[13],
        2: c[8],
        3: c[10],
        4: c[2],
    },
    9: {
        1: c[9],
        2: c[15],
        3: c[13],
        4: c[10],
    },
    10: {
        1: c[14],
        2: c[6],
        3: c[10],
        4: c[4],
    },
    11: {
        1: c[11],
        2: c[15],
        3: c[16],
        4: c[17],
    },
    12: {
        1: c[5],
        2: c[6],
        3: c[7],
        4: c[12],
    },
    13: {
        1: c[21],
        2: c[14],
        3: c[13],
        4: c[9],
    },
    14: {
        1: c[23],
        2: c[14],
        3: c[24],
        4: c[25],
    },
    15: {
        1: c[15],
        2: c[12],
        3: c[13],
        4: c[17],
    },
    16: {
        1: c[18],
        2: c[15],
        3: c[16],
        4: c[4],
    },
    17: {
        1: c[6],
        2: c[7],
        3: c[21],
        4: c[17],
    },
    18: {
        1: c[18],
        2: c[2],
        3: c[3],
        4: c[4],
    },
    19: {
        1: c[5],
        2: c[6],
        3: c[19],
        4: c[7],
    },
    20: {
        1: c[8],
        2: c[9],
        3: c[10],
        4: c[20],
    },
    21: {
        1: c[13],
        2: c[21],
        3: c[12],
        4: c[10],
    },
    22: {
        1: c[16],
        2: c[17],
        3: c[22],
        4: c[21],
    },
    23: {
        1: c[23],
        2: c[4],
        3: c[3],
        4: c[1],
    },
    24: {
        1: c[15],
        2: c[16],
        3: c[18],
        4: c[24],
    },
    25: {
        1: c[19],
        2: c[25],
        3: c[26],
        4: c[22],
    },
    26: {
        1: c[23],
        2: c[24],
        3: c[26],
        4: c[20],
    },
};
//правильные ответы
let rightAnswer = {
    1 : c[1],
    2 : c[2],
    3 : c[3],
    4 : c[4],
    5 : c[5],
    6 : c[6],
    7 : c[7],
    8 : c[8],
    9 : c[9],
    10 : c[10],
    11 : c[11],
    12 : c[12],
    13 : c[13],
    14 : c[14],
    15 : c[15],
    16 : c[16],
    17 : c[17],
    18 : c[18],
    19 : c[19],
    20 : c[20],
    21 : c[21],
    22 : c[22],
    23 : c[23],
    24 : c[24],
    25 : c[25],
    26 : c[26]
};

//Переменные
    let wrapper = document.querySelector(".wrapper");
    let questionP = document.getElementById("question");                                    //где пишется вопрос
    let answerButtons = document.querySelectorAll("button.answer");                         //все кнопки
    let nextQuestion = document.getElementById("next_question");                            //следующий вопрос
    let correctAnswerP = document.querySelector("span.count_correct_answer");               //число правильных ответов
    //let incorrectAnswerP = document.querySelector("span.count_incorrect_answer");           //число неправильных ответов
    let showCorrectAnswerSpan = document.getElementById("right_answer_class_span");         //показать слово правильные ответы
    //let showInCorrectAnswerSpan = document.getElementById("incorrect_answer_class_span");   //показать слово неправильные ответы
    let ball = document.querySelector(".ball");                                             //получить объект мяч
    let buttonAgain = document.createElement("button");                                     //создать кнопку button
    let ball_and_gates = document.querySelector(".ball_and_gates");                         //получить div мяча и вороты
    let massQuestions = [];                                                                 //пустой массив для перемешивании вопросов
    let gate = document.querySelector(".gate");
    let test__block = document.querySelector(".test__block");

//получение стилей
    let ball_style = getComputedStyle(ball);                                        //получить стили мяча

//счетчики
    let num = 25;                                                                    //номер вопроса
    let countCorrectAnswer = 0;                                                     //число правильных ответов
    //let countInCorrectAnswer = 0;                                                   //число неправильных ответов
    let timer = 500;
    let x;

//начало
    questionP.innerHTML = "Нажмите чтобы начать";
    buttonsNone();                                                                  //кнопки ответов не видны
        
//смена вопросов
    nextQuestion.addEventListener("click", NumberQuestion);                         //при нажатии на кнопку next, вызывается функция NumberQuestion()

//при нажатии на кнопку ответа срабатывает функция check
    for(let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener("click", check);
    }

//заполнение массива для вопросов
    for(let i = 0; i <= Object.keys(questions).length; i++) {
        massQuestions.push(i);
    }
    // massQuestions = shuffle(massQuestions);                                     //массив перемешать

    
//при нажатии кнопки "следующий вопрос", выполнится следующая функция
    function NumberQuestion() {
    //nextQuestion.value = "Следующий вопрос";                                        //текст внутри кнопки становится "следующий вопрос"
    test__block.style.display = 'flex';
    ball_and_gates.style.display = "flex";                                         //при нажатии "начать" появляется мяч и ворота
    showCorrectAnswerSpan.id = ("right_answer_class_span_show");                    //текст внизу кнопки становится видна
    //showInCorrectAnswerSpan.id = ("incorrect_answer_class_span_show");              //текст внизу кнопки становится видна
    nextQuestion.style.display = 'none';
    if(window.innerWidth < 1400) {
        test__block.style.display = 'block';
    }
    
    MoveBallBack();
    questionP.innerHTML = questions[massQuestions[num]];                        //меняется вопрос questions  [massQuestions[num]];
    buttonsUnBlock();                                                           //разблокировать все кнопки ответов
    defaultButtons();                                                           //свойство всех кнопок становится по дефолту
    buttonsFill(massQuestions[num]);                                            //заполнить кнопки ответами massQuestions[num]
    showWord();                                 
    }

    function NextQuestionShowSettimeOut() {
        MoveBallBack();
        if(num <= Object.keys(questions).length){                                       //если счетчик меньше длины ключей объекта questions, то продолжаем
            questionP.innerHTML = questions[massQuestions[num]];                        //меняется вопрос questions  [massQuestions[num]];
            showWord();
            buttonsUnBlock();                                                           //разблокировать все кнопки ответов
            defaultButtons();                                                           //свойство всех кнопок становится по дефолту
            buttonsFill(massQuestions[num]);                                            //заполнить кнопки ответами massQuestions[num]
        } else {
            EndTest();                                                                  //заканчиваем тест, если вопросы закончились
        }
    }

//получить рандомное число
    function random(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;                   //Максимум и минимум включаются
    }

    
//попытка получить разные числа
    function getMassRandom() {
        
        for(let i = 0; i < 3; i++) {
                mass[i] = random(1, 26);
        }

        for(let i = 0; i < mass.length - 1; i++) {
            for(let j = i + 1; j < mass.length; j++){
                
                if(mass[i] == mass[j]){
                    mass[i] = random(1, 26);
                }
            }
        }

        return mass;

    }


//не видны кнопки ответов в начале
    function buttonsNone(){
        
        for(let i = 0; i < answerButtons.length; i++) {
            answerButtons[i].className = "answer_none";
        }
    }

//заполнить ответами кнопки
    function buttonsFill(num) {
        
        for(let i = 0; i < answerButtons.length; i++) {
            answerButtons[i].innerHTML = answers[num][i+1];
        }
    }    

  //анимация мяча
  function MoveBallForward() {
    let BalltoGate = anime({
        targets: '.ball',
        translateX: x,
        rotate: '5turn',
        duration: 3000
      });
}
    function MoveBallBack() {
        anime({
            targets: '.ball',
            translateX: 0,
            rotate: '-3turn',
            duration: 3000        
        });
    }
    function showWord() {
        anime({
            targets: '#question',
            scale: "80%",
            duration: 2000     
        }); 
}

//проверка ответа при нажатии
    function check() {
        buttonsBlock();                                                             //все кнопки блокируются
       // nextQuestionValueEnd();                                                   //если вопросы закончились, то меняем кнопку "следующий вопрос" на "закончить тест"
        
        if(rightAnswer[massQuestions[num]] == this.innerHTML){                 //если параметр в объекте rightAnswer равен содержимому нажатой кнопки massQuestions[num]]
            findGate();
            this.className = "answer-correct";                                      //этой кнопке применяется класс правильного ответа
            MoveBallForward();
            countCorrectAnswer++;                                                   //счетчик правильного ответа плюс
            countAnswer();                                //значение счетчика правильных ответов показывается на экране                                                  
            num++;                                                                  //счетчик для следующего вопроса
        } else {
            allIncorrect();
            //countInCorrectAnswer++;
            //countIncAnswer();
            num++;                                                                  //счетчик для следующего вопроса
            //MoveBalltoGate();
        }
        setTimeout(NextQuestionShowSettimeOut, timer);
    }


function findGate() {
    // x = gate.offsetLeft;
    // x -= 400;
    let test1 = gate.getBoundingClientRect();
    // alert(test1.width);
    if(window.innerWidth <= 500) {
        x = test1.left - 50;
    } else {
        x = test1.left - 300;
    }

}

//если неправильно, покрасить всех красным цветом, а правильный ответ зеленым
    function allIncorrect(text) {
        
        for(let i = 0; i < answerButtons.length; i++) {                         
            
            if(rightAnswer[massQuestions[num]] == answerButtons[i].innerHTML){             //massQuestions[num]]
                answerButtons[i].className = "answer-correct";
            } else {
                answerButtons[i].className = "answer-incorrect";    
            }
        }
    }
//перемешивание готового массива
    function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

//заблокировать все кнопки
    function buttonsBlock() {
        for(let i = 0; i < answerButtons.length; i++) {
            answerButtons[i].disabled = true;
        }
    }

//разблокировать все кнопки
    function buttonsUnBlock() {
        for(let i = 0; i < answerButtons.length; i++) {
            answerButtons[i].disabled = false;
        }
    }

//кнопки возвращаются с исходное состояние
    function defaultButtons() {
        for(let i = 0; i < answerButtons.length; i++) {
            answerButtons[i].className = "answer";
        }
    }

//счетчик правильных ответов показывается на экране
    function countAnswer() {
        correctAnswerP.innerHTML = countCorrectAnswer;
    }
//счетчик неправильных ответов показывается на экране
    // function countIncAnswer() {
    //     incorrectAnswerP.innerHTML = countInCorrectAnswer;
    // }

//кнопка "следующий вопрос" становится "Закончить тест", если счетчик num больше кол вопросов
    // function nextQuestionValueEnd() {
    //     if(num > Object.keys(questions).length) {
    //         nextQuestion.value = "Закончить тест";
    //     }
    // }

//заканчиваем тест, если вопросы закончились
    function EndTest() {
            wrapper.style.display = "none";                                         //скрыть всё на экране
            buttonAgain.style.display = "block";                                    //показать кнопку "начать заново"
    }


//вставить элемент в html
buttonAgain.innerHTML = "Начать заново";
buttonAgain.className = "buttonAgain";
buttonAgain.addEventListener("click", function(){location.reload();})
wrapper.parentElement.appendChild(buttonAgain);


// при окончании теста, все элементы на странице должны исчезнуть, и должна появится кнопка начать заново +
// мяч и ворота должны появится после нажатия начать +
// вопросы должны идти в вперемешку, и не повторятся  +
// при уменьшении страницы, мяч и ворота должны исчезнуть +
// при нажатии на ответ, вместе с неправильным ответом должен загорется и правильный ответ +
// при обновлении страницы, или закрытий браузера, просить подтвердить действие на странице +

// ответы должны идти вперемешку
// мяч должен плавно идти в ворота
// оптимизировать страницу для телефона
// оптимизировать код css
// оптимизировать код js

