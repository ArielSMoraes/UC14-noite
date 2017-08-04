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

$.get("https://swapi.co/api/people/55", function(data) {
    $(".main-content-row h4").each(function() {
        var titulo = $(this);
        var peso = $(this).next();
        var altura = peso.next();

        titulo.text(data.name);
        peso.text(peso.text() + data.mass);
        altura.text(altura.text() + data.height);
    })
});
