let animationIMG = document.querySelector(".animationIMG");
let timer = 7000;
let count = 1;


let timerId = setInterval(() => {
    count++;
    animationIMG.src = `Img/${count}.jpg`;
    animationIMG.classList.add("animationShow");
    setTimeout(() => {
        animationIMG.classList.remove("animationShow");
    }, 3000); 
    if(count == 26) {
        clearInterval(timerId);
    }
}, timer);



