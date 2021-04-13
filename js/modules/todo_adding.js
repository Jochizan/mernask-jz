import { d } from './global.js';
import addTask from './add_task.js';
import generateItem from './generate_item.js';

const addList = (btn, todoList, task) => {
  const $btn = d.querySelector(btn);

  $btn.addEventListener('click', (e) => {
    if (e.target == $btn) {
      const $task = d.querySelector(task);
      const $todoList = d.querySelector(todoList);
      const $inputTask = d.querySelector('.input__task');
      const id = Date.now()
      const text = $task.value;
      $task.value = '';

      addTask(text, id);
      $todoList.insertAdjacentElement('afterbegin', generateItem(text, id));
      $inputTask.previousElementSibling.classList.remove('top');
    }
  });
};

export default addList;
