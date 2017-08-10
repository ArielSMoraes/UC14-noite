var cep1 = {
    "cep": "11111111",
    "tipoDeLogradouro": "Rua",
    "logradouro": "Lougradouro do 1",
    "bairro": "Cidade Baixa",
    "cidade": "Porto Alegre",
    "estado": "RS"
}

var cep2 = {
    "cep": "22222222",
    "tipoDeLogradouro": "Rua",
    "logradouro": "Juriti",
    "bairro": "Setor 02",
    "cidade": "Ariquemes",
    "estado": "RO"
}

var cep3 = {
    "cep": "33333333",
    "tipoDeLogradouro": "Avenida",
    "logradouro": "Jacupira",
    "bairro": "Arangonhonha",
    "cidade": "Macapa",
    "estado": "AM"
}

function buscaCep(cep) {
    if (cep == 11111111) {
        return cep1;
    }
    if (cep == 22222222) {
        return cep2;
    }
    if (cep == 33333333) {
        return cep3;
    }
}

$("#executarBusca").click(filtrarCep);

function filtrarCep() {
    var valorFiltro = $("#busca").val();
    var cepFiltrado = buscaCep(valorFiltro);
    mostraCepsNaTela(cepFiltrado);
}

function mostraCepsNaTela(cepFiltrado) {
    $("#cep").text("cep: " + cepFiltrado.cep);
    $("#tlog").text("Tipo de logradouro: " + cepFiltrado.tipoDeLogradouro);
    $("#log").text("logradouro: " + cepFiltrado.logradouro);
    $("#bairro").text("Bairro: " + cepFiltrado.bairro);
    $("#cidade").text("Cidade: " + cepFiltrado.cidade);
    $("#estado").text("Estado: " + cepFiltrado.estado);
}
