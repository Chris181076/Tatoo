const burgerButton = document.getElementById("burger");
const closeBtn = document.getElementById("closeBtn")
const mainMenu = document.getElementsByClassName("main-menu")[0];


burgerButton.addEventListener("click", function(){
    mainMenu.style.display ="block";
});

closeBtn.addEventListener("click", function(event) {
    event.preventDefault();
    mainMenu.style.display ="none";
});

