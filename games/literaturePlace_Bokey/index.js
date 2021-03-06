let question = {
    1: 'На фоне каких мест изображен выдающийся казахский прозаик?',
    2: 'Алданское нагорье. Аул Аршалы. Пик Таниркоймас.<br>В каком произведении описываются эти места?',
    3: 'река Бухтарма.<br>В каком произведении упоминается это место?',
    4: 'город Актау.<br>В каком произведении происходит действие в этом городе? ',
    5: 'город Атырау и Каспийского море.<br>В каком произведении упоминается этот город и море?',
    6: 'Тарбагатай, аул Шынгыстай.<br>В каком произведении автор описывает их?',
    7: 'луга и река Хатунь.<br>В каком произведении описывается эти места?',
    8: 'аул Казакпай.<br>В каком произведении упоминается это место?',
    9: 'ущелье Туйе-Таса.<br>В каком месте Восточного Казахстана находится ущелье? В каком произведении автор описывает это место?',
    10: 'озеро Айнаколь.<br>В каком месте Восточного Казахстана находится озеро? В каком произведении автор описывает это место?',
    11: 'Ледяна гора – высочайшая вершина Алтая.<br>Что это за вершина? В каком произведении  о ней писал автор?',
    12: 'Сарыбель, Жаманашы, Бозтал.<br>Где находятся эти места? В каком произведении  о них писал автор?',
    13: 'озеро Караколь.<br>Где находится это озеро? В каком произведении  о нем писал автор?',
    14: 'озеро Маркаколь.<br>Где находится это озеро? В каком произведении  о нем писал автор?',
    15: 'гора Белуха.<br>Где находится гора? В каком произведении  о ней писал автор?',
    16: 'Кызылкумы.<br>Где находится пустыня? В каком произведении  о ней писал автор?'
}

let otvet = {
    1: {
        1: 'с. Чингистай, Катон-Карагайский район, места, где родился писатель',
        2: 'Чингистай '
    },
    2: {
        1: 'В повести «Человек-Олень»',
        2: 'Человек Олень'
    },
    3: {
        1: 'в повести «Осиротевший верблюжонок»',
        2: 'Осиротевший верблюжонок'
    },
    4: {
        1: 'в повести «Осиротевший верблюжонок»',
        2: 'Осиротевший верблюжонок'
    },
    5: {
        1: 'в повести «Осиротевший верблюжонок»',
        2: 'Осиротевший верблюжонок'
    },
    6: {
        1: 'в повести «Крик»',
        2: 'Крик'
    },
    7: {
        1: 'в повести «Снежная девушка»',
        2: 'Снежная девушка'
    },
    8: {
        1: 'в рассказе «Бура»',
        2: 'Бура'
    },
    9: {
        1: 'в рассказе «Камчигер»',
        2: 'Камчигер'
    },
    10: {
        1: 'в рассказе «Камчигер»',
        2: 'Камчигер'
    },
    11: {
        1: '«Отзовись, мой жеребенок!»',
        2: 'Отзовись мой жеребенок'
    },
    12: {
        1: '«Когда уходят Плеяды»',
        2: 'Когда уходят Плеяды'
    },
    13: {
        1: '«Оттепель»',
        2: 'Оттепель'
    },
    14: {
        1: '«Ардак»',
        2: 'Ардак'
    },
    15: {
        1: '«Кербугу»',
        2: 'Кербугу'
    },
    16: {
        1: '«Поющие барханы»',
        2: 'Поющие барханы'
    },
}

let imgs = {
    1: "img/01.png",
    2: "img/02Алданское_нагорье.jpg",
    3: "img/03Бухмарма.jpg",
    4: "img/04Актау.jpg",
    5: "img/05Атырау.webp",
    6: "img/06шынгыстай.jpg",
    7: "img/07луга.png",
    8: "img/08Казакпай.webp",
    9: "img/09ущелье.jpg",
    10: "img/10айнаколь.webp",
    11: "img/11гора.webp",
    12: "img/12сарыбель.webp",
    13: "img/13караколь.webp",
    14: "img/14маркаколь.webp",
    15: "img/15белуха.webp",
    16: "img/16кызылкум.webp",
}

let hint = {
    1: '',
    2: 'img/подсказки/02Человек_Олень.jpg',
    3: 'img/подсказки/03Осиротевший_верблюжонок.jpg',
    4: 'img/подсказки/03Осиротевший_верблюжонок.jpg',
    5: 'img/подсказки/03Осиротевший_верблюжонок.jpg',
    6: 'img/подсказки/06Крик.jpg',
    7: 'img/подсказки/07Снежная_девушка.jpg',
    8: '',
    9: 'img/подсказки/09Камчигер.jpg',
    10: 'img/подсказки/10Камчигер.jpg',
    11: 'img/подсказки/11Где_ты_ мой_жеребенок.jpg',
    12: '',
    13: '',
    14: 'img/подсказки/14Ардак.jpg',
    15: 'img/подсказки/15КЕРБУГУ.jpg',
    16: 'img/подсказки/16Поющие_барханы.jpg',
}

let description = {
    1: "«Трубные крики маралов еще раздавались время от времени, когда Актан подъехал к гряде сумрачных, величественных гор – отрогам Алданского .",
    2: "«Трубные крики маралов еще раздавались время от времени, когда Актан подъехал к гряде сумрачных, величественных гор – отрогам Алданского нагорья. В глаза бросалась необычайно узкая и высокая черная скала, копьем вонзавшаяся в небо… Этот пик назывался Хранилищем Властелина – Таниркоймас. У его подножия находился бездонный провал, и горная тропа, проходившая здесь, пробиралась к самому краешку обрыва, будто желая испытать смелость проходящего путника». \n\n«Вечером аул Аршалы бывал особенно красив. Мирный пахучий дым вставал над крышами, золотистыми от вечернего солнца. С дальних выпасов возвращались стада, втекали на деревенскую улицу, повсюду во дворах кипела хлопотливая вечерняя жизнь».",
    3: '«Мыс Бухтармы, где мы жили, был красивый и уединенный, рыбы здесь было полно. Берега реки поросли тальником и березами, вода была прозрачна и чиста, хотя стояла середина лета… Мошкары на берегу почти совсем не было, ее сносило небольшим ветерком. Блаженно было лежать и млеть под лучами щедрого солнца Алтая».',
    4: '«С первого взгляда казалось, что Актау ничем не отличается от других городов с многомиллионным населением, но была в нем одна особенность. Обращали на себя внимание красивые шестиэтажные дома на сваях, идущие гуськом один за другим по берегу моря. Ветер, дующий днем в степи, ночью – с моря, шурша проходил между высокими сваями и обмахивал город, освобождая его от газов и пыли».',
    5: '«Это море для засушливой степи Мангыстау, суровой и зимой, и летом, было вроде глотка живительной влаги. Что ни говори, а цивилизация неузнаваемо изменила не только этот край, но и всю жизнь, настроение и повадки людей. Кто мог подумать, что в прокопченной степи Мангыстау вырастет город?»',
    6: '«Они уже благополучно одолели перевал Ирека и вышли на Тарбагатай. Пере путниками открылась равнина Шарыктыбулака. Она была похожа на спящую девушку с красивой грудью. Где-то среди равнины притаилась под снегом зимовка. В ней живут чабаны из соседних аулов Шынгыстай и Пилорама; можно отогреться, отдохнуть, поесть, но путник, едущий первым, направляет коня к Алатау».',
    7: '«Нуржану в Глубинном крае  приходилось бывать. Сюда совхоз «Алтайский» отправлял косцов на заготовку сена. Засуха погнала людей от выжженных долин в горы, на сочные альпийские луга, там и косили; совхозу достались участки возле реки Хатунь, природной границы между Казахстаном и Россией. Хатунь река быстрая, с напористым течением, берет начало у ледников Музтау».',
    8: '«Исчезновение серного Буры не внесло особых изменений в жизнь аула Казакпай. А Буры уже не было год. В прошлые времена, когда кочевали они вдоль Кызылкаина, этого не могло случиться. Тогда все садились на коней и искали и находили, даже если пропадал не верблюд, а пуговица. С тех пор разросся аул, выросло много новых домов, стало крупным хозяйство, и люди реже стали навещать друг друга, и только горе и праздники собирали их вместе».',
    9: '«Ущелье Туйе-Тас: непокорный ручей Шарыктыбулак кощунственно  плюет в небо белыми хлопьями пены, и ветер с песьим воем скользит по холодным отвесным стенам… Скала эта напоминает гигантского злого верблюда, отсюда и название местности – Туйе-Тас, ущелье Туйе-Тас». ',
    10: '«Конники наконец выехали на перевал Марка, и их взору открылась глубокая серебряная чаша озера Айнаколь, на берегу которого раскинулся аул Керей». ',
    11: '«Есть такое поверье, если человек, стоя у Акшакы, увидит Ледяную гору, он проживет счастливую жизнь. Ледяная гора – высочайшая вершина Алтая». ',
    12: '«Желтая безмятежная осень стояла в алтайских предгорьях. Недолгая осень, но красивая, вся обшитая золотом. Стоили лишь заняться рассвету в небе со стороны Сарыбеля, как текучий воздух начинал благоухать ароматом густой таранги, растущей по ущельям и гребням Жаманашы, запахами еще не умерших трав, буйно населяющих безоблачные берега Бозтала. Мои ноздри трепетали, вдыхая опаленный воздух степи, выжженной за долгое лето беспощадным солнцем. А глаза видели, как вдоль Бухтармы уже сбросили листву все неисчислимые деревья леса». ',
    13: '«Я вспомнил про озеро Караколь зеркальной чистоты, которое расположено в горах Алтая среди прохладных скал. Оно окружено соснами и кедрами… И какой бы прозрачной не была его вода, оно всегда – и днем и ночью – казалось непроглядно черным. Думалось, что оно неподвижно сжимает страдание в своих объятиях. Окрестные пастухи никогда не останавливались у Караколя, перегоняя отары из долин в горы. Ходили слухи, будто озеро нечисто, что в нем живет водяная корова, которая ночью пасется на берегу». ',
    14: '«В этом году берега Маркоколя обсохли и зацвели буйно. Молодая трава жадно пошла в рост из-под засохшей, прошлогодней. Весенние дали, тонущие в мареве, мягко сливались с подножием голубого неба.  Гладкое озеро отражало это яркое, без единого пятнышка небо. Словно белая пряжа, протянутая у гор Тарбагатая, длинное облако отделяло снежные вершины гор от земли, и они казались плывущими в небе. Воздух сегодня словно был напоен ароматом свежего кумыса».',
    15: '«Эта белоснежная вершина казалась Кербугу волшебной мечтой. Он тосковал по ней, глядел на нее с надеждой и верил, что однажды его копыта коснутся ее чистой белизны. В трудные минуты жизни стоило ему только прикрыть глаза, как сквозь дымку выступала всей своей громадой белая гора, его мечта Акшокы (Белуха) манила его и звала трубными звуками». ',
    16: '«У Кызылкумов тоже переменился нрав. Пески с их извечным шорохом движущихся песчинок тоже приобрели покой, угрюмо застыли безмолвными дюнами. А песок теперь имеет темно-багровый оттенок. Только невесомая, мягкая пыльца поднимается  над барханами при порывах ветра. … Застывшие песчаные гребни в некоторых местах поблескивают белесыми солончаками. Как будто кто-то очень старательно раскидал по пустыне горсти соли».'
}

//формы
let main__form__question = document.querySelector(".main__form__question");   //вопрос
let main__button = document.querySelector(".main__button");  // кнопка проверить
let main__input = document.querySelector(".main__input");  //инпут для ответа
let main__img__next = document.querySelector(".main__img__next");  //img
let main__form__description = document.querySelector(".main__form__description");  //описание картины
let buttonNextQuestion = document.querySelector(".buttonNextQuestion");
let main__form__button = document.querySelector(".main__form__button");
let main__imgAndButton = document.querySelector(".main__imgAndButton");
let main__form__centerAll = document.querySelector(".main__form__centerAll");
let writeAnswer = document.querySelectorAll(".writeAnswer");
let textAndButtonBeginDiv = document.querySelector(".main__form__description__andWriteAnswer");

//подказка
let imgClass = document.querySelector(".imgClass");

//в начале игры
let start = document.querySelector('.start');
let start__game = document.querySelector(".start__game");

//при окончании игры
let something__necessary = document.querySelector(".something__necessary");
let main__form = document.querySelector(".main__form");
let testAgain = document.querySelector('.testAgain');
let nextTest = document.querySelector(".testNext");
let showCorrectAnswer = document.querySelector(".showCorrectAnswer");
let showIncorrectAnswer = document.querySelector(".showIncorrectAnswer");

//счетчики
let num;  //счетчик вопросов
let countRightAnswer = 0;   //количество правильных ответов
let countIncorrectAnswer = 0;   //количество неправильных ответов


start.addEventListener("click", startCode);
//кнопка начать
function startCode() {
    document.querySelector(".header__subtitle").style.display = "none";
    document.querySelector(".header__title").style.display = "none";
    main__form.style.display = "block";
    document.querySelector(".main").classList.add("animationShow");
    start__game.style.display = "none";
    something__necessary.style.display = "none";
    clearInput();

    num = 16;
    countRightAnswer = 0;
    countIncorrectAnswer = 0;
    main__form__question.innerHTML = question[num];     //заполнение первого вопроса
    main__img__next.src = imgs[num];   
    showDescription(); 

    //при нажатии кнопки button
    main__button.addEventListener("click", check);

};

buttonNextQuestion.addEventListener("click", RunCode); //кнопка далее

writeAnswer[0].addEventListener("click", dontShowPovest);

writeAnswer[1].addEventListener("click", ShowPovest);

function dontShowPovest() {
    main__form__centerAll.classList.remove("animationDontShow");
    textAndButtonBeginDiv.classList.remove('animationShow');
    main__img__next.classList.remove('animationShow');
    
    textAndButtonBeginDiv.classList.add('animationDontShow');
    main__img__next.classList.add('animationDontShow');

    setTimeout(() => {
        main__form__centerAll.classList.add("animationShow");

        main__img__next.style.display = 'none';
        textAndButtonBeginDiv.style.display = "none";
        main__form__centerAll.style.display = 'flex';
    }, 1000);
}

function ShowPovest() {
    textAndButtonBeginDiv.classList.remove('animationDontShow');
    main__img__next.classList.remove('animationDontShow');
    main__form__centerAll.classList.remove("animationShow");
    main__form__centerAll.classList.add("animationDontShow");
    
    setTimeout(() => {
        main__form__centerAll.style.display = 'none';

        main__img__next.classList.add("animationShow");
        textAndButtonBeginDiv.classList.add("animationShow");
        main__img__next.style.display = 'block';
        textAndButtonBeginDiv.style.display = "block";

    }, 1000);
}

//проверить ответ при нажатии на "проверить"
function check() {
    if(main__input.value == "") {   //если инпут пустой
        main__input.value = 'Введите ответ';
    } else {
        let mass = [];
        let mass2 = [];
        let temp = [];
        mass = otvet[num][2].toLowerCase().split(" ");    //заполнение массива оригинальным ответом
        mass2 = (main__input.value).toLowerCase().split(" "); //заполнение массива ответом пользователя
        
        for(let i = 0; i < mass2.length; i++) {         //сравнение совпадении
            for(let j = 0; j < mass.length; j++) {
                if(mass2[i] == mass[j]){
                    temp.push(mass2[i]);                //заполнение массива совпадении
                }
            }
        }
        
        if(temp.length >= 1){   //если массив совпадении больше или равна одному
            countRightAnswer++;
            AnswerIsRight();
        } else {
            countIncorrectAnswer++;
            AnswerIsIncorrect();
        }

        buttonCheckDontShow();
        buttonNextShow(); 
        

    }
}

function hintNext() {
    imgClass.src = hint[num];
}

function buttonCheckDontShow() {
    main__button.style.display = 'none';
}

function buttonCheckShow() {
    main__button.style.display = 'inline';
}
function buttonNextDontShow() {
    buttonNextQuestion.style.display = 'none';
}

function buttonNextShow() {
    buttonNextQuestion.style.display = 'inline';
}

function showDescription() {
    if(num != 1) {
        main__form__description.innerHTML = description[num];
    }
}

//при правильном ответе
function AnswerIsRight() {
    document.querySelector(".p1").style.display = "block";
    document.querySelector(".rightAndIncorrect").classList.add("animationShow");
    writeAnswer[1].style.display = "none";
    main__input.style.display = 'none';
    main__imgAndButton.style.display = "block";
    document.querySelector(".p1").innerHTML = "Ответ правильный<br><br>" + otvet[num][1];

    main__input.value += "\n\nОтвет правильный\n\n" + otvet[num][1];
}
// при неправильном ответе
function AnswerIsIncorrect() {
    document.querySelector(".p2").style.display = "block";
    document.querySelector(".rightAndIncorrect").classList.add("animationShow");
    writeAnswer[1].style.display = "none";
    main__input.style.display = 'none';
    main__imgAndButton.style.display = "block";
    document.querySelector(".p2").innerHTML = "Ответ неправильный<br><br>" + "<span class='p1_span'> Правильный ответ: " + otvet[num][1]+ "</span>";

    main__input.value += "\n\nОтвет неправильный\n\n" + "Правильный ответ: \n\n" + otvet[num][1];
}
// возвращение инпута в исходное состояние
function InputDefault() {
    main__input.classList.remove('main__inputRight');
    main__input.classList.remove('main__inputIncorrect');
}

// кнопка далее
function RunCode() {
    main__form.classList.remove("animationShow3s");
    main__form.style.display = "none";
    main__imgAndButton.style.display = "none";

    if(num == Object.keys(question).length - 1) {
        buttonNextQuestion.innerHTML = 'Закончить тест';
    }
    setTimeout(() => {
        main__form.classList.add("animationShow3s");
        main__form.style.display = "block";
        main__imgAndButton.style.display = "flex";
        main__imgAndButton.classList.add("animationShow3s");
    }, 400);
    num++;
    showDescription();
    NextIMG(imgs, num);
    NextQuestion();
    InputDefault();
    countAnswer();
    buttonCheckShow();
    buttonNextDontShow();
    ShowPovest();
    EndTest();
    document.querySelector(".p1").style.display = "none";
    document.querySelector(".p2").style.display = "none";
    writeAnswer[1].style.display = "inline";
    main__input.style.display = 'block';
    

  
}

// следующий вопрос
function NextQuestion() {
    main__form__question.innerHTML = question[num];
    clearInput();
}
//next img
function NextIMG(object1, num) {
    main__img__next.src = object1[num];
}
// очистить инпут
function clearInput() {
    main__input.value = "";
}

// счетчик правильных ответов показывается на экране
function countAnswer() {
    showCorrectAnswer.innerHTML = countRightAnswer;
    showIncorrectAnswer.innerHTML = countIncorrectAnswer;
}
// при окончании теста
function EndTest() {
    if(num > Object.keys(question).length) {
        something__necessary.style.display = "block";
        
        something__necessary.classList.add("animationShow3s");
        testAgain.addEventListener("click", startCode);
       
        setTimeout(() => {
            main__form.style.display = "none";
        }, 400);
        nextTest.addEventListener("click", function() {
            document.location.href = "../../additional_page/literaturePlace/source/html/1.html";
        });
    }
}



  // main__form__centerAll.classList.remove("animationDontShow");
    // main__form__centerAll.classList.remove("animationShow");
    // textAndButtonBeginDiv.classList.remove('animationDontShow');
    // textAndButtonBeginDiv.classList.remove('animationShow');
    // main__img__next.classList.remove('animationDontShow');
    // main__img__next.classList.remove('animationShow');
    