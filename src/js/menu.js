import cards from '../menu.json';
import dishCardTpl from '../templates/dishCards.hbs';

const dishListEl = document.querySelector('.js-menu');
dishListEl.insertAdjacentHTML('beforeend', createMenuMarkup());

function createMenuMarkup() {
  return dishCardTpl(cards);
};