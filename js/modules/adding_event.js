import { d } from './global/global.js';
import addTask from './ls_tasks/add_task.js';
import generateItem from './event_tasks/generate_item.js';

const addingEvent = (todoList, input) => {
  const $task = d.querySelector(input);
  const $todoList = d.querySelector(todoList);

  const id = Date.now();
  if (!$task.value.trim(' ').length)
    return console.error('Error ingrese un texto para continuar...');
  const text = $task.value;
  $task.value = '';

  addTask(text, id);
  $todoList.insertAdjacentElement('afterbegin', generateItem(text, id));
};

export default addingEvent;
