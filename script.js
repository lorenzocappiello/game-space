'use strict';

/* Button: 'Guess My Number' */ 

const modal1 = document.querySelector('.modal-1');
const overlay1 = document.querySelector('.overlay-1');
const btnCloseModal1 = document.querySelector('.close-modal-1');
const btnsOpenModal1 = document.querySelectorAll('.show-modal-1');

const openModal1 = function () {
  modal1.classList.remove('hidden');
  overlay1.classList.remove('hidden');
};

const closeModal1 = function () {
  modal1.classList.add('hidden');
  overlay1.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal1.length; i++)
  btnsOpenModal1[i].addEventListener('click', openModal1);

btnCloseModal1.addEventListener('click', closeModal1);
overlay1.addEventListener('click', closeModal1);

document.addEventListener('keydown', function (e) {

  if (e.key === 'Escape' && !modal1.classList.contains('hidden')) {
    closeModal1();
  }
});

/* Button: 'Dice vs Dice' */ 

const modal2 = document.querySelector('.modal-2');
const overlay2 = document.querySelector('.overlay-2');
const btnCloseModal2 = document.querySelector('.close-modal-2');
const btnsOpenModal2 = document.querySelectorAll('.show-modal-2');

const openModal2 = function () {
  modal2.classList.remove('hidden');
  overlay2.classList.remove('hidden');
};

const closeModal2 = function () {
  modal2.classList.add('hidden');
  overlay2.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal2.length; i++)
  btnsOpenModal2[i].addEventListener('click', openModal2);

btnCloseModal2.addEventListener('click', closeModal2);
overlay2.addEventListener('click', closeModal2);

document.addEventListener('keydown', function (e) {

  if (e.key === 'Escape' && !modal2.classList.contains('hidden')) {
    closeModal2();
  }
});

/* Button: 'Memory Game' */ 

const modal3 = document.querySelector('.modal-3');
const overlay3 = document.querySelector('.overlay-3');
const btnCloseModal3 = document.querySelector('.close-modal-3');
const btnsOpenModal3 = document.querySelectorAll('.show-modal-3');

const openModal3 = function () {
  modal3.classList.remove('hidden');
  overlay3.classList.remove('hidden');
};

const closeModal3 = function () {
  modal3.classList.add('hidden');
  overlay3.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal3.length; i++)
  btnsOpenModal3[i].addEventListener('click', openModal3);

btnCloseModal3.addEventListener('click', closeModal3);
overlay3.addEventListener('click', closeModal3);

document.addEventListener('keydown', function (e) {

  if (e.key === 'Escape' && !modal2.classList.contains('hidden')) {
    closeModal3();
  }
});