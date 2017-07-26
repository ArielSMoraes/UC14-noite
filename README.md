# UC14-noite
Repositorio com algumas dicas de front-end para o curso do senac

# Conteúdo
1. [Seletores CSS](#seletores-css)
2. [Pontuação de seletores](#pontuacao-de-seletores)
3. [Javascript](#javascript)
4. [Váriaveis](#variaveis)
5. [Funcoes](#funcoes)
6. [DOM](#dom)
7. [eventos](#eventos)
8. [Colocando texto na tela](#colocando-texto-na-tela)

Eventos
## Seletores CSS

*O que é um seletor css?*

Básicamente é uma regra que se aplica a um ou varios elementos html dispostos na tela, estas regras tem potuações e hierarquias

### exemplo de regras:

#### seletor utilizando o nome de duas tags
```css
div nav {
  color: white
}
```

```html
<div>
  <!-- está nav é selecionada -->
  <nav></nav>
</div>
```

#### seletor utilizando o nome de uma classe
```css
.nome-da-classe {
  color: white
}
```

```html
<!-- ambos elementos serão selecionados, pois tem a classe com o mesmo nome -->
<div class="nome-da-classe"> 
</div>
<p class="nome-da-classe"></p>
```

#### seletor utilizando o nome de um ID
```css
#nome-do-id {
  color: white
}
```

```html
<!-- A primeira div sera selecionada, lembrando que IDs devem ser únicos na página -->
<div id="nome-do-id"></div>
<div></div>
```

#### seletor utilizando o nome de uma classe
```css
div > ul {
  color: white
}
```

```html
<div>
  <!-- Apenas esse primeiro UL sera selecionado, se a regra fosse apenas "div ul" ambos uls seriam selecionados -->
  <ul></ul>
  <span>
    <ul></ul>
  </span>
</div>

```

[Mais exemplos de seletores](https://code.tutsplus.com/pt/tutorials/the-30-css-selectors-you-must-memorize--net-16048)


### Pontuacao de seletores

* Elementos 1 ponto

* Pseudo classe 10 pontos

* Classe 10 pontos

* Id 100 pontos

* !importante 1000 pontos

#### Exemplos:
2 pontos:
```css
div ul {
  /* ... */
}
```

2 pontos:
```css
div > ul {
  /* ... */
}
```

10 pontos:
```css
.minha-classe {
  /* ... */
}
```

100 pontos:
```css
#meu-id {
  /* ... */
}
```

110 pontos:
```css
#meu-id .minha-classe {
  /* ... */
}
```

111 pontos:
```css
div #meu-id .minha-classe {
  /* ... */
}
```

[referencia pontuacao de seletores](https://tableless.com.br/pontuacao-especificidade-css/)

## Javascript

## Sobre a linguagem

O Javascript é uma linguagem prototipada, feita inicialmente para rodar em um browser, então, básicamente todos navegadores a utilizão.
É ela que adiciona dinamismo a aplicações webs, interagindo com o usuário.

### Variaveis

Para se declarar váriaveis em javascript é utilizado o token `var`, e as váriaveis pertencem ao escopo de suas funções
```javascript
var numero = 10;
var string = "texto";
var array1 = [];
var array 2 = new Array();
var meuObjeto1 = {};
var meuObjeto2 = new Object();
```

Para atribulir novos valores para as váriaveis é assim:

```javascript
numero = 20;
array1[0] = "novo texto"; // ou
array1.push("novo texto");

meuObjeto1.name = "meu nome";
```

Para acessar o valor das váriaveis é usada a seguinte forma:
```javascript
numero // ira retornar o valor dentro de numero
array1[0] // ira retornar o valor dentro do array na posição zero
meuObjeto1.name // ira retornar o valor da propriedade name dentro do meu objeto
```

### Funcoes

essa função `dataAtual` ao ser chamada ex: `dataAtual()` irá retornar uma string com a data atual
```javascript
function dataAtual() {
  return Date();
}
```

Já está função recebe dois parametros e retorna sua soma ex : `somaDoisNumeros(10,30)`
```javascript
function somaDoisNumeros(num1, num2) {
  return num1 + num2;
}
```

### DOM
(Document Object Model)

Toda manipulação feita no html atraves de javascript é uma manipulação de DOM

O elemento `document` do javascript é o que se utiliza para manipular a DOM
[W3C DOM](https://www.w3schools.com/jsref/dom_obj_document.asp)

Selecionar elementos:
```javascript
  document.querySelector("#meuId")
  document.querySelector(".minhaClasse")
  document.querySelector("button")
```

Criar elementos do tipo texto:
```javascript
  document.createTextNode("meu texto")
```

Criar elementos HTML:
```javascript
  document.createElement("LI")
```


### Eventos

O dentro do Javascript existe uma serie de eventos que acontecem, os quais podem ser atrelado funções a eles, ou seja, se pode dar algum significado customizado para este evento.

Existem algumas formas de se capturar esses eventos:

Diretamente no HTML
```html
<!-- lembrando que sempre se deve passar uma função para o evento -->
<div onclick="minhaFuncao()"></div>
<input onkeyup="minhaOutraFuncao()" />
```

Pelo document do Javascript

```html
<button id="meuBotao">Clicar!</button>
```

```javascript
var botao = document.querySelector("#meuBotao");
botao.addEventListener("click", minhaFuncao);
//deve se tomar o cuidado para que, ao passar a função de referencia ao addEventListener, ela não tenha as ()
```

### Colocando texto na tela

Pensando que temos o seguinte HTML
```html
<body>
  <div>
    <p id="meuParagrafo">Olá</p>  
  <div>
</body>
```

E queremos alterar o texto que existe neste html, no caso o "Olá" para "Olá mundo"
Usamos o seguinte script
```javascript
var paragrafo = querySelector("#meuParagrafo");
paragrafo.textContent = "Olá mundo"; // ou
paragrafo.innerHTML = "Olá mundo"; // o innerHTML tem mais poder, aceita tags html
```
