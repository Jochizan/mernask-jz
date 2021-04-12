import { d, w, n } from './modules/global.js'; // modular document, window y navigator

const $inputTask = d.querySelector('.input__task');

$inputTask.addEventListener('focus', () => {
  $inputTask.previousElementSibling.classList.add('top');
  $inputTask.previousElementSibling.classList.add('focus');
  $inputTask.parentNode.classList.add('focus');
});

$inputTask.addEventListener('blur', () => {
  $inputTask.value = $inputTask.value.trim(' ');
  if (!$inputTask.value.trim(' ').length) {
    $inputTask.previousElementSibling.classList.remove('top');
  }

  $inputTask.previousElementSibling.classList.remove('focus');
  $inputTask.parentNode.classList.remove('focus');
});

d.addEventListener('DOMContentLoaded', () => {});
