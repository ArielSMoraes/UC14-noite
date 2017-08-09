$(".menu li").click(handleClickMenu)

function handleClickMenu() {
    $(".menu li").removeClass("active");
    $(this).addClass("active");
    var textoMenu = $(this).text();
    $(".title").text(textoMenu);
}

//Requisições AJAX, com promises

$.get("https://swapi.co/api/starships/")
    .then(geraListaDeNaves)
    .then(getNext)
    .then(geraListaDeNaves)
    .then(getNext)
    .then(geraListaDeNaves)

function geraListaDeNaves(data) {
    $(data.results).each(function(index) {
        var nave = gerarNave(this, index);
        $(".main-content-row").append(nave);
    });
    var modal = gerarModal();
    $("body").append(modal);
    return data.next
}

function getNext(next) {
    return $.get(next);
}


// Modais
function gerarModal() {
    var modal = `
        <div id="content1" style="display:none;">
             Modal
        </div>`;
    return modal;
}

function gerarNave(ship, index) {
    var nave = `<div class=${index}>
        <h4>${ship.name}</h4>
        <span class="peso"><strong>Modelo:</strong> ${ship.model} </span>
        <span class="altura"><strong>passageiros:</strong> ${ship.passengers} </span>
        <button><a href="#content1" rel="modal:open"> READ MORE </a></button>
    </div>`;
    return nave;
}
