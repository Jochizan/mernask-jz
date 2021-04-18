import { d, w } from './global/global.js';
import addingEvent from './adding_event.js';

const addList = (btn, todoList, input) => {
  const $btn = d.querySelector(btn);

  // click button
  $btn.addEventListener('click', (e) => {
    if (e.target.matches(btn + '> *')) {
      const $inputTask = d.querySelector(input);

      addingEvent(todoList, input);
      $inputTask.previousElementSibling.classList.remove('top');
    }
  });
};

const addListKeyEnter = (btn, todoList, input) => {
  // keydown 'ENTER'
  w.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (e.target.value || e.target)) {
      addingEvent(todoList, input);
    }
  });
};

export { addList, addListKeyEnter };
