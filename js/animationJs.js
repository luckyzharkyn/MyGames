window.onload = function() {
    document.querySelector(".wrapper").style.display = 'none';
    let timer = 1000;
    setTimeout(() => {
        document.getElementById("temno").className = 'animationDontShow';
        document.querySelector(".wrapper").style.display = 'flex';
    }, timer);
    
};
