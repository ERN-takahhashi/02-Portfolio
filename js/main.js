'use strict';

const cards = document.querySelectorAll('.p-product__card');
const modal = document.querySelector('.c-modal');
const overlay = document.querySelector('.c-modal__overlay');
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
    overlay.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
  });
});

function closeModal() {
  modal.classList.remove('is-open');
  overlay.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}
closeBtn.addEventListener('click', closeModal);

/* =========================
左サイド画像スクロール連動
========================= */

const sidebar = document.querySelector('.p-sidebar');
const sections = document.querySelectorAll('[data-sidebar-image]');

const options = {
  root: document.querySelector('.p-main'), // 右側スクロール領域
  rootMargin: '-40% 0px -40% 0px', // 中央付近で反応
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const image = entry.target.dataset.sidebarImage;
      sidebar.style.backgroundImage = `url(${image})`;
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

