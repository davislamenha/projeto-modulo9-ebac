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
});
