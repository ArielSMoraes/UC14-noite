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
