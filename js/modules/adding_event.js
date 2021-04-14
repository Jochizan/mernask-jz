import { d } from './global/global.js';
import addTask from './ls_tasks/add_task.js';
import generateItem from './event_tasks/generate_item.js';

const addingEvent = (task, todoList) => {
  const $task = d.querySelector(task);
  const $todoList = d.querySelector(todoList);

  const id = Date.now();
  const text = $task.value;
  $task.value = '';

  addTask(text, id);
  $todoList.insertAdjacentElement('afterbegin', generateItem(text, id));
};

export default addingEvent;