//Mudar a DOM com javascript

function bochaco(index) {
    var menu = document.querySelectorAll(".menu li")

    for (var i = 0; i < menu.length; i++) {
        menu[i].classList.remove("active");
    }

    var menuTres = menu[index];
    menuTres.classList.add("active");
}

function changeTitle(newText) {
    var title = document.querySelector(".title");
    title.textContent = newText;
}

function handleClick(event) {
    if (event.target.nodeName === "LI") {
        bochaco(event.target.dataset.index);
        changeTitle(event.target.textContent);
    }
}

var menuToClick = document.querySelector(".menu");
menuToClick.addEventListener("click", handleClick);

// content menu

function changeContentBackground(element) {
    var contents = document.querySelectorAll(".main-content-row > div");

    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active-content");
    }

    element.classList.add("active-content");
}

function handleContentClick(event) {
    if (event.target.nodeName === "BUTTON") {
        changeContentBackground(event.target.parentElement);
    }
}

var menuToClick = document.querySelector(".main-content-row");
menuToClick.addEventListener("click", handleContentClick);
