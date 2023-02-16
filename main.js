$(document).ready(() => {
  $('header button').on('click', () => {
    $('form').slideDown();
  });
  $('#botao-cancelar').on('click', () => {
    $('form').slideUp();
  });
});

$('form').on('submit', (e) => {
  e.preventDefault();
  const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
  const novoItem = $('<li style="display: none"></li>');
  $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
  $(
    `<div class="overlay-img-link"><a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>`,
  ).appendTo(novoItem);
  $(novoItem).appendTo('ul');
  $(novoItem).fadeIn(800);
  $('#endereco-imagem-nova').val('');
});
