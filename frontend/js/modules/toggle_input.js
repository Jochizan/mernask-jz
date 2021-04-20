import { d } from './global/global.js';

const toggleInput = (input) => {
  const $inputTask = d.querySelector(input);

  $inputTask.addEventListener('focus', () => {
    $inputTask.previousElementSibling.classList.add('top');
    $inputTask.previousElementSibling.classList.add('focus');
    $inputTask.parentNode.classList.add('focus');
  });

  $inputTask.addEventListener('blur', (e) => {
    $inputTask.value = $inputTask.value.trim(' ');
    if (!$inputTask.value.trim(' ').length) {
      $inputTask.previousElementSibling.classList.remove('top');
    }

    $inputTask.previousElementSibling.classList.remove('focus');
    $inputTask.parentNode.classList.remove('focus');
  });
};

export default toggleInput;