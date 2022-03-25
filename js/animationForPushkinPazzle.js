window.onload = function() {
    document.querySelector(".wrapper").style.display = 'none';
        
    setTimeout(() => {
        document.querySelector(".wrapper").style.display = 'block';
    }, 500);
};