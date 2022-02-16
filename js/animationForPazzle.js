window.onload = function() {
    document.querySelector(".wrapper").style.display = 'none';
};

let vsplitie__button = document.querySelector(".vsplitie__button");
vsplitie__button.addEventListener("click", function() {
    let timer = 500;    
    setTimeout(() => {
        document.getElementById("temno").className = 'animationDontShow';
        document.getElementById("temno").style.display = 'none';
        document.querySelector(".wrapper").style.display = 'block';
    }, timer);
});