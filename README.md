# UC14-noite
Repositorio com algumas dicas de front-end para o curso do senac

# Conteúdo
1. [Seletores CSS](#Seletores-CSS)
2. [Pontuação de seletores](#Pontuação-de-seletores)
3. [Javascript](#Javascript)
4. [Variaveis](#Variaveis)
5. [Funcoes](#Funcoes)


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


### Pontuação de seletores

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

### Sobre a linguagem

O Javascript é uma linguagem prototipada, feita inicialmente para rodar em um browser, então, básicamente todos navegadores a utilizão.
É ela que adiciona dinamismo a aplicações webs, interagindo com o usuário.

#### Variaveis

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


#### Funcoes

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

