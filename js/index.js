import { d, w, n } from './modules/global.js'; // modular document, window y navigator
import loadTasks from './modules/load_tasks.js';
import addList from './modules/todo_adding.js';

const $inputTask = d.querySelector('.input__task');

$inputTask.addEventListener('focus', () => {
  $inputTask.previousElementSibling.classList.add('top');
  $inputTask.previousElementSibling.classList.add('focus');
  $inputTask.parentNode.classList.add('focus');
});


$inputTask.addEventListener('blur', (e) => {
  $inputTask.value = $inputTask.value.trim(' ');
  if (!$inputTask.value.trim('').length) {
    $inputTask.previousElementSibling.classList.remove('top');
  }

  $inputTask.previousElementSibling.classList.remove('focus');
  $inputTask.parentNode.classList.remove('focus');
});

w.addEventListener('DOMContentLoaded', () => {
  addList('#btn-adding', '.todoList', '#task');
  loadTasks('.todoList');
});
