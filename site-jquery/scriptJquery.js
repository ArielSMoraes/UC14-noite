$(".menu li").click(handleClickMenu)

function handleClickMenu() {
    $(".menu li").removeClass("active");
    $(this).addClass("active");
    var textoMenu = $(this).text();
    $(".title").text(textoMenu);
}

$(".main-content-row button").click(handleContent);

function handleContent() {
    $(".main-content-row > div").removeClass("active-content")
    $(this).parent().addClass("active-content");
}

$("#content2-open").click(function() {
    $("#content2").modal({
        fadeDuration: 500,
        fadeDelay: 1
    });
})

//Requisições AJAX

$.get("https://swapi.co/api/starships/", function(data) {
    $(data.results).each(function(index) {
        var nave = gerarNave(this, index);
        $(".main-content-row").append(nave);
    });
    var modal = gerarModal();
    $("body").append(modal);
});

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
        <span class="peso">Modelo: ${ship.model} </span>
        <span class="altura">passageiros: ${ship.passengers} </span>
        <button><a href="#content1" rel="modal:open"> READ MORE </a></button>
    </div>`;
    return nave;
}
