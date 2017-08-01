//Mudar a DOM com javascript

function bochaco(index) {
    var menu = document.querySelectorAll("header ul li");

    for (var i = 0; i < menu.length; i++) {
        menu[i].classList.remove("active");
    }

    var menuTres = menu[index];
    menuTres.classList.add("active");
}

function handleClick(event) {
    if (event.target.nodeName === "LI") {
        bochaco(event.target.dataset.index);
    }
}

var menuToClick = document.querySelector(".menu");
menuToClick.addEventListener("click", handleClick);