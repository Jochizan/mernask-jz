import { d, ls } from '../global/global.js';
import generateItem from '../event_tasks/generate_item.js';

const loadTasks = (todoList) => {
  if (ls.getItem('tasks') !== null) {
    const $todoList = d.querySelector(todoList);
    const values = JSON.parse(ls.getItem('tasks'));

    values.forEach((el) => {
      if (el.finish) {
        $todoList.insertAdjacentElement(
          'beforeend',
          generateItem(el.text, el.id, el.finish)
        );
      } else {
        debugger
        $todoList.insertAdjacentElement(
          'afterbegin',
          generateItem(el.text, el.id, el.finish)
        );
      }
    });
  }
};

export default loadTasks;
