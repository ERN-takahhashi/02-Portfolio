'use strict';

const cards = document.querySelectorAll('.p-product__card');
const modal = document.querySelector('.c-modal');
const ingredientImage = modal.querySelector('.c-modal__ingredientImage');
const productImage = modal.querySelector('.c-modal__productImage');
const closeBtn = modal.querySelector('.c-modal__close');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const ingredientSrc = card.dataset.modalIngredient;
    const productSrc = card.dataset.modalProduct;

    ingredientImage.src = ingredientSrc;
    productImage.src = productSrc;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
  });
});

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}

closeBtn.addEventListener('click', closeModal);

