window.onload = function() {
    document.querySelector(".wrapper").style.display = 'none';
    let timer = 2000;
    setTimeout(() => {
        document.getElementById("temno").className = 'animationDontShow';
        document.querySelector(".wrapper").style.display = 'block';
    }, timer);
    
};
