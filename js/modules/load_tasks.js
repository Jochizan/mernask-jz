import { d, ls } from './global.js';
import addTask from './add_task.js';
import generateItem from './generate_item.js';

const loadTasks = (todoList) => {
  const $todoList = d.querySelector(todoList);

  if (ls.getItem('item') !== null) {
    Array.from(ls.getItem('item'))
      .join('')
      .split(',')
      .forEach((el) => {
        $todoList.insertAdjacentElement('afterbegin', generateItem(el));
      });
  }
};

export default loadTasks;
