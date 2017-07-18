# UC14-noite
Repositorio com algumas dicas de front-end para o curso do senac


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


### pontuação de seletores

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
