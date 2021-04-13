import { d, ls } from './global.js';
import generateItem from './generate_item.js';

const loadTasks = (todoList) => {
  const $todoList = d.querySelector(todoList);

  if (ls.getItem('tasks') !== null) {
    const values = JSON.parse(ls.getItem('tasks')).tasks;

    values.forEach((el) => {
      $todoList.insertAdjacentElement(
        'afterbegin',
        generateItem(el.text, el.id, el.finish)
      );
    });
  }
};

export default loadTasks;
