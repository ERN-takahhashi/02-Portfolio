'use strict';

const modal = document.getElementById('ingredientModal');
const openButtons = document.querySelectorAll('.c-button--ingredient');
const closeBtn = document.querySelector('.c-modal__close');
const overlay = document.querySelector('.c-modal__overlay');

openButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('is-active');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('is-active');
});

overlay.addEventListener('click', () => {
  modal.classList.remove('is-active');
});
